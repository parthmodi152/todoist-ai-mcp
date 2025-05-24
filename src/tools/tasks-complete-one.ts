import { z } from "zod";
import type { TodoistTool } from "../todoist-tool.js";

const ArgsSchema = {
	id: z.string().min(1).describe("The ID of the task to complete."),
};

const tasksCompleteOne = {
	name: "tasksCompleteOne",
	description: "Complete a task by its ID.",
	parameters: ArgsSchema,
	async execute(args, client) {
		await client.closeTask(args.id);
		return { success: true };
	},
} satisfies TodoistTool<typeof ArgsSchema>;

export { tasksCompleteOne };
