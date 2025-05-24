import { randomUUID } from "node:crypto";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { isInitializeRequest } from "@modelcontextprotocol/sdk/types.js";
import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
import morgan from "morgan";
import { getMcpServer } from "./mcp-server.js";

dotenv.config();
const DEFAULT_PORT = 8080;
const PORT = process.env.PORT ? Number(process.env.PORT) : DEFAULT_PORT;
const TODOIST_API_KEY = process.env.TODOIST_API_KEY;

if (!TODOIST_API_KEY) {
	console.error("Missing TODOIST_API_KEY environment variable.");
	process.exit(1);
}

const app = express();
app.use(express.json());
app.use(morgan("dev"));

// Store transports by session ID
const transports: { [sessionId: string]: StreamableHTTPServerTransport } = {};

app.post("/mcp", async (req: Request, res: Response) => {
	try {
		const sessionId = req.headers["mcp-session-id"] as string | undefined;
		console.log("sessionId", sessionId);
		let transport: StreamableHTTPServerTransport;

		if (sessionId && transports[sessionId]) {
			// Reuse existing transport for this session
			transport = transports[sessionId];
			// Handle the request with existing transport - no need to reconnect
			await transport.handleRequest(req, res, req.body);
			return; // Already handled
		}

		if (!sessionId && isInitializeRequest(req.body)) {
			// New initialization request - create new transport and server
			transport = new StreamableHTTPServerTransport({
				sessionIdGenerator: () => randomUUID(),
				enableJsonResponse: true,
				onsessioninitialized: (newSessionId) => {
					console.log("onsessioninitialized", newSessionId);
					transports[newSessionId] = transport;
				},
			});
			const server = getMcpServer({ todoistApiKey: TODOIST_API_KEY });
			console.log("transport", transport != null);
			console.log("server", server != null);
			await server.connect(transport);
			console.log("connected");
			await transport.handleRequest(req, res, req.body);
			console.log("handled");
			return; // Already handled
		}

		// Invalid request - no session ID or not initialization request
		res.status(400).json({
			jsonrpc: "2.0",
			error: {
				code: -32000,
				message: "Bad Request: No valid session ID provided",
			},
			id: null,
		});
	} catch (error) {
		console.error("Error handling MCP request:", error);
		if (!res.headersSent) {
			res.status(500).json({
				jsonrpc: "2.0",
				error: {
					code: -32603,
					message: "Internal server error",
				},
				id: null,
			});
		}
	}
});

app.listen(PORT, () => {
	console.log(`HTTP MCP server listening on port ${PORT}`);
});
