import { z } from "zod";
import type { TodoistTool } from "../todoist-tool.js";
import { mapProject } from "./shared.js";

const ArgsSchema = {
	name: z.string().min(1).describe("The name of the project to add."),
};

const projectsAddOne = {
	name: "projects-add-one",
	description: "Add a new project.",
	parameters: ArgsSchema,
	async execute(args, client) {
		const project = await client.addProject({ name: args.name });
		return mapProject(project);
	},
} satisfies TodoistTool<typeof ArgsSchema>;

export { projectsAddOne };
