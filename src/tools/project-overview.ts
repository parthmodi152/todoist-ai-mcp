import type {
	Project,
	Section,
	TodoistApi,
} from "@doist/todoist-api-typescript";
import { z } from "zod";
import type { TodoistTool } from "../todoist-tool.js";
import { mapTask } from "./shared.js";

const ArgsSchema = {
	projectId: z
		.string()
		.min(1)
		.describe("The ID of the project to get an overview for."),
};

type MappedTask = ReturnType<typeof mapTask>;

async function getAllTasksForProject(
	client: TodoistApi,
	projectId: string,
): Promise<MappedTask[]> {
	// Fetch all tasks for the project (handle pagination)
	let allTasks: MappedTask[] = [];
	let cursor: string | undefined = undefined;
	do {
		const { results, nextCursor } = await client.getTasks({
			projectId,
			limit: 50,
			cursor: cursor ?? undefined,
		});
		allTasks = allTasks.concat(results.map(mapTask));
		cursor = nextCursor ?? undefined;
	} while (cursor);
	return allTasks;
}

async function getProjectSections(
	client: TodoistApi,
	projectId: string,
): Promise<Section[]> {
	const { results } = await client.getSections({ projectId });
	return results;
}

function renderTaskMarkdown(task: MappedTask): string {
	const idPart = `id=${task.id}`;
	const duePart = task.dueDate ? `; due=${task.dueDate}` : "";
	const contentPart = `; content=${task.content}`;
	return `- ${idPart}${duePart}${contentPart}`;
}

const projectOverview = {
	name: "project-overview",
	description:
		"Get a Markdown overview of a single project, including its sections and all tasks. Tasks are grouped by section, with tasks not in any section listed first. Each task is listed as '- id=TASKID; due=YYYY-MM-DD; content=TASK CONTENT' (omit due if not present).",
	parameters: ArgsSchema,
	async execute(args, client) {
		const { projectId } = args;
		const project: Project = await client.getProject(projectId);
		const sections = await getProjectSections(client, projectId);
		const allTasks = await getAllTasksForProject(client, projectId);

		const tasksBySection: Record<string, MappedTask[]> = {};
		for (const section of sections) {
			tasksBySection[section.id] = [];
		}
		const tasksWithoutSection: MappedTask[] = [];
		for (const task of allTasks) {
			if (
				task.sectionId &&
				typeof task.sectionId === "string" &&
				tasksBySection[task.sectionId]
			) {
				// biome-ignore lint/style/noNonNullAssertion: the "if" above ensures that it is defined
				tasksBySection[task.sectionId]!.push(task);
			} else {
				tasksWithoutSection.push(task);
			}
		}

		// Render markdown
		const lines: string[] = [`# ${project.name}`];
		if (tasksWithoutSection.length > 0) {
			lines.push("");
			for (const task of tasksWithoutSection) {
				lines.push(renderTaskMarkdown(task));
			}
		}
		for (const section of sections) {
			lines.push("");
			lines.push(`## ${section.name}`);
			const sectionTasks = tasksBySection[section.id] ?? [];
			if (sectionTasks.length > 0) {
				for (const task of sectionTasks) {
					lines.push(renderTaskMarkdown(task));
				}
			}
		}
		return lines.join("\n");
	},
} satisfies TodoistTool<typeof ArgsSchema>;

export { projectOverview };
