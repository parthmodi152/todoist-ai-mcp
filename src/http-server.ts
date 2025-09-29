#!/usr/bin/env node
import { randomUUID } from 'node:crypto'
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js'
import dotenv from 'dotenv'
import express, { type Request, type Response } from 'express'
import morgan from 'morgan'
import { getMcpServer } from './mcp-server.js'

dotenv.config()

const PORT = process.env.PORT || 8080

function main() {
    const baseUrl = process.env.TODOIST_BASE_URL
    const todoistApiKey = process.env.TODOIST_API_KEY

    console.log('Environment check:', {
        hasApiKey: !!todoistApiKey,
        apiKeyLength: todoistApiKey?.length,
        baseUrl,
    })

    if (!todoistApiKey) {
        throw new Error('TODOIST_API_KEY is not set')
    }

    const app = express()
    app.use(express.json())
    app.use(morgan('dev'))

    // Map to store transports by session ID
    const transports: Record<string, StreamableHTTPServerTransport> = {}

    // MCP POST endpoint handler
    const mcpPostHandler = async (req: Request, res: Response) => {
        const sessionId = req.headers['mcp-session-id'] as string | undefined

        console.log('Received request:', {
            method: req.method,
            sessionId,
            body: req.body,
        })

        try {
            let transport: StreamableHTTPServerTransport

            if (sessionId && transports[sessionId]) {
                // Reuse existing transport
                console.log('Reusing existing transport for session:', sessionId)
                transport = transports[sessionId]
            } else if (!sessionId && isInitializeRequest(req.body)) {
                // New initialization request
                transport = new StreamableHTTPServerTransport({
                    sessionIdGenerator: () => randomUUID(),
                    onsessioninitialized: (sessionId: string) => {
                        console.log(`Session initialized with ID: ${sessionId}`)
                        transports[sessionId] = transport
                    },
                })

                // Set up onclose handler to clean up transport when closed
                transport.onclose = () => {
                    const sid = transport.sessionId
                    if (sid && transports[sid]) {
                        console.log(`Transport closed for session ${sid}`)
                        delete transports[sid]
                    }
                }

                // Connect the transport to the MCP server
                const server = getMcpServer({ todoistApiKey, baseUrl })
                await server.connect(transport)
                await transport.handleRequest(req, res, req.body)
                return
            } else {
                // Invalid request
                res.status(400).json({
                    jsonrpc: '2.0',
                    error: {
                        code: -32000,
                        message: 'Bad Request: No valid session ID provided',
                    },
                    id: null,
                })
                return
            }

            // Handle the request with existing transport
            await transport.handleRequest(req, res, req.body)
        } catch (error) {
            console.error('Error handling MCP request:', error)
            if (!res.headersSent) {
                res.status(500).json({
                    jsonrpc: '2.0',
                    error: {
                        code: -32603,
                        message: 'Internal server error',
                    },
                    id: null,
                })
            }
        }
    }

    // MCP GET endpoint handler (for SSE streams)
    const mcpGetHandler = async (req: Request, res: Response) => {
        const sessionId = req.headers['mcp-session-id'] as string | undefined
        if (!sessionId || !transports[sessionId]) {
            res.status(400).send('Invalid or missing session ID')
            return
        }

        const transport = transports[sessionId]
        await transport.handleRequest(req, res)
    }

    // MCP DELETE endpoint handler (for session termination)
    const mcpDeleteHandler = async (req: Request, res: Response) => {
        const sessionId = req.headers['mcp-session-id'] as string | undefined
        if (!sessionId || !transports[sessionId]) {
            res.status(400).send('Invalid or missing session ID')
            return
        }

        try {
            const transport = transports[sessionId]
            await transport.handleRequest(req, res)
        } catch (error) {
            console.error('Error handling session termination:', error)
            if (!res.headersSent) {
                res.status(500).send('Error processing session termination')
            }
        }
    }

    // Health check endpoint
    app.get('/health', (_req: Request, res: Response) => {
        res.json({ status: 'ok', timestamp: new Date().toISOString() })
    })

    app.post('/mcp', mcpPostHandler)
    app.get('/mcp', mcpGetHandler)
    app.delete('/mcp', mcpDeleteHandler)

    app.listen(PORT, () => {
        console.log(`HTTP Server running on http://localhost:${PORT}/mcp`)
        console.log(`Health check available at http://localhost:${PORT}/health`)
    })

    // Handle server shutdown
    process.on('SIGINT', async () => {
        console.log('Shutting down server...')
        for (const sessionId in transports) {
            const transport = transports[sessionId]
            if (transport) {
                try {
                    await transport.close()
                    delete transports[sessionId]
                } catch (error) {
                    console.error(`Error closing transport for session ${sessionId}:`, error)
                }
            }
        }
        console.log('Server shutdown complete')
        process.exit(0)
    })
}

main()
