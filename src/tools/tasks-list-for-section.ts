import { z } from "zod";
import type { TodoistTool } from "../todoist-tool.js";
import { mapTasks } from "./shared.js";

const ArgsSchema = {
	sectionId: z
		.string()
		.min(1)
		.describe("The ID of the section to get tasks for."),
	limit: z
		.number()
		.int()
		.min(1)
		.max(50)
		.default(10)
		.describe("The maximum number of tasks to return."),
	cursor: z
		.string()
		.optional()
		.describe(
			"The cursor to get the next page of tasks (from previous call).",
		),
};

const tasksListForSection = {
	name: "tasks-list-for-section",
	description: "List tasks for a given section.",
	parameters: ArgsSchema,
	async execute(args, client) {
		const { sectionId, limit, cursor } = args;
		const { results, nextCursor } = await client.getTasks({
			sectionId,
			limit,
			cursor: cursor ?? null,
		});
		return {
			tasks: mapTasks(results),
			nextCursor,
		};
	},
} satisfies TodoistTool<typeof ArgsSchema>;

export { tasksListForSection };
