import type { Task } from "@doist/todoist-api-typescript";
import { z } from "zod";
import type { TodoistTool } from "../todoist-tool.js";
import { mapTasks } from "./shared.js";

const SubtaskSchema = z.object({
	content: z.string().min(1).describe("The content of the subtask to add."),
	description: z
		.string()
		.optional()
		.describe("The description of the subtask."),
	priority: z
		.number()
		.int()
		.min(1)
		.max(4)
		.optional()
		.describe("The priority of the subtask (1-4)."),
	dueString: z
		.string()
		.optional()
		.describe("The due date for the subtask, in natural language."),
});

const ArgsSchema = {
	parentId: z
		.string()
		.min(1)
		.describe("The parent task ID for the subtasks."),
	tasks: z
		.array(SubtaskSchema)
		.min(1)
		.describe("The array of subtasks to add."),
};

const subtasksAddMultiple = {
	name: "subtasks-add-multiple",
	description: "Add one or more subtasks to a parent task.",
	parameters: ArgsSchema,
	async execute(args, client) {
		const { parentId, tasks } = args;
		const newTasks: Task[] = [];
		for (const task of tasks) {
			const taskArgs = { ...task, parentId };
			newTasks.push(await client.addTask(taskArgs));
		}
		return mapTasks(newTasks);
	},
} satisfies TodoistTool<typeof ArgsSchema>;

export { subtasksAddMultiple };
