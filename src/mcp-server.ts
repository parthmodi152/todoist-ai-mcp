import { TodoistApi } from "@doist/todoist-api-typescript";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import type { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
import { registerTool } from "./mcp-helpers.js";
import { projectsAddOne } from "./tools/projects-add-one.js";
import { projectsList } from "./tools/projects-list.js";
import { projectsUpdateOne } from "./tools/projects-update-one.js";
import { sectionsAddOne } from "./tools/sections-add-one.js";
import { sectionsUpdateOne } from "./tools/sections-update-one.js";
import { tasksAddMultiple } from "./tools/tasks-add-multiple.js";
import { tasksListByDate } from "./tools/tasks-by-date-range.js";
import { tasksListForProject } from "./tools/tasks-by-project.js";
import { tasksCompleteOne } from "./tools/tasks-complete-one.js";
import { tasksDeleteOne } from "./tools/tasks-delete-one.js";
import { tasksListOverdue } from "./tools/tasks-list-overdue.js";
import { tasksSearch } from "./tools/tasks-search.js";
import { tasksUpdateOne } from "./tools/tasks-update-one.js";

const instructions = `
Tools to help you manage your todoist tasks.
`;

/**
 * Start the MCP server.
 * @param todoistApiKey - The API key for the todoist account.
 * @param transport - The transport to use for communication. Defaults to standard input/output.
 * @returns A promise that resolves when the server is started.
 */
export async function startMcpServer({
	todoistApiKey,
	transport,
}: {
	todoistApiKey: string;
	transport?: Transport;
}) {
	const server = new McpServer(
		{ name: "todoist-mcp-server", version: "0.1.0" },
		{ instructions },
	);

	const todoist = new TodoistApi(todoistApiKey);

	registerTool(tasksListByDate, server, todoist);
	registerTool(tasksListOverdue, server, todoist);
	registerTool(tasksListForProject, server, todoist);
	registerTool(tasksSearch, server, todoist);
	registerTool(projectsList, server, todoist);
	registerTool(tasksAddMultiple, server, todoist);
	registerTool(tasksUpdateOne, server, todoist);
	registerTool(tasksDeleteOne, server, todoist);
	registerTool(tasksCompleteOne, server, todoist);
	registerTool(projectsAddOne, server, todoist);
	registerTool(projectsUpdateOne, server, todoist);
	registerTool(sectionsAddOne, server, todoist);
	registerTool(sectionsUpdateOne, server, todoist);

	await server.connect(transport ?? new StdioServerTransport());
}
