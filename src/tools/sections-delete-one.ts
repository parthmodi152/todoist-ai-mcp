import { z } from "zod";
import type { TodoistTool } from "../todoist-tool.js";

const ArgsSchema = {
	id: z.string().min(1).describe("The ID of the section to delete."),
};

const sectionsDeleteOne = {
	name: "sectionsDeleteOne",
	description: "Delete a section by its ID.",
	parameters: ArgsSchema,
	async execute(args, client) {
		await client.deleteSection(args.id);
		return { success: true };
	},
} satisfies TodoistTool<typeof ArgsSchema>;

export { sectionsDeleteOne };
