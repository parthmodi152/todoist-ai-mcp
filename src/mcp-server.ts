import { TodoistApi } from "@doist/todoist-api-typescript";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import type { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
import { registerTool } from "./mcp-helpers.js";

import { projectsAddOne } from "./tools/projects-add-one.js";
import { projectsDeleteOne } from "./tools/projects-delete-one.js";
import { projectsList } from "./tools/projects-list.js";
import { projectsSearch } from "./tools/projects-search.js";
import { projectsUpdateOne } from "./tools/projects-update-one.js";

import { sectionsAddOne } from "./tools/sections-add-one.js";
import { sectionsDeleteOne } from "./tools/sections-delete-one.js";
import { sectionsSearch } from "./tools/sections-search.js";
import { sectionsUpdateOne } from "./tools/sections-update-one.js";

import { subtasksAddMultiple } from "./tools/subtasks-add-multiple.js";
import { subtasksListForParentTask } from "./tools/subtasks-list-for-parent-task.js";

import { accountOverview } from "./tools/account-overview.js";
import { tasksAddMultiple } from "./tools/tasks-add-multiple.js";
import { tasksListByDate } from "./tools/tasks-by-date-range.js";
import { tasksListForProject } from "./tools/tasks-by-project.js";
import { tasksCompleteOne } from "./tools/tasks-complete-one.js";
import { tasksDeleteOne } from "./tools/tasks-delete-one.js";
import { tasksListForSection } from "./tools/tasks-list-for-section.js";
import { tasksListOverdue } from "./tools/tasks-list-overdue.js";
import { tasksOrganizeMultiple } from "./tools/tasks-organize-multiple.js";
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
	registerTool(tasksOrganizeMultiple, server, todoist);
	registerTool(subtasksListForParentTask, server, todoist);
	registerTool(tasksListForSection, server, todoist);
	registerTool(subtasksAddMultiple, server, todoist);
	registerTool(projectsDeleteOne, server, todoist);
	registerTool(projectsSearch, server, todoist);
	registerTool(sectionsDeleteOne, server, todoist);
	registerTool(sectionsSearch, server, todoist);
	registerTool(accountOverview, server, todoist);

	await server.connect(transport ?? new StdioServerTransport());
}
