import { getMcpServer } from "./mcp-server.js";

import { projectsAddOne } from "./tools/projects-add-one.js";
import { projectsDeleteOne } from "./tools/projects-delete-one.js";
import { projectsList } from "./tools/projects-list.js";
import { projectsSearch } from "./tools/projects-search.js";
import { projectsUpdateOne } from "./tools/projects-update-one.js";

import { sectionsAddOne } from "./tools/sections-add-one.js";
import { sectionsDeleteOne } from "./tools/sections-delete-one.js";
import { sectionsSearch } from "./tools/sections-search.js";
import { sectionsUpdateOne } from "./tools/sections-update-one.js";

import { tasksAddMultiple } from "./tools/tasks-add-multiple.js";
import { tasksListByDate } from "./tools/tasks-by-date-range.js";
import { tasksListForProject } from "./tools/tasks-by-project.js";
import { tasksCompleteMultiple } from "./tools/tasks-complete-multiple.js";
import { tasksDeleteOne } from "./tools/tasks-delete-one.js";
import { tasksListForSection } from "./tools/tasks-list-for-section.js";
import { tasksListOverdue } from "./tools/tasks-list-overdue.js";
import { tasksOrganizeMultiple } from "./tools/tasks-organize-multiple.js";
import { tasksSearch } from "./tools/tasks-search.js";
import { tasksUpdateOne } from "./tools/tasks-update-one.js";

import { subtasksListForParentTask } from "./tools/subtasks-list-for-parent-task.js";

import { accountOverview } from "./tools/account-overview.js";
import { projectOverview } from "./tools/project-overview.js";

const tools = {
	projectsList,
	projectsSearch,
	projectsAddOne,
	projectsUpdateOne,
	projectsDeleteOne,
	sectionsSearch,
	sectionsAddOne,
	sectionsUpdateOne,
	sectionsDeleteOne,
	tasksListByDate,
	tasksDeleteOne,
	tasksCompleteMultiple,
	tasksListForProject,
	tasksListOverdue,
	tasksSearch,
	tasksAddMultiple,
	tasksUpdateOne,
	tasksOrganizeMultiple,
	tasksListForSection,
	subtasksListForParentTask,
	accountOverview,
	projectOverview,
};

export { tools, getMcpServer };

export {
	projectsList,
	projectsSearch,
	projectsAddOne,
	projectsUpdateOne,
	projectsDeleteOne,
	sectionsSearch,
	sectionsAddOne,
	sectionsUpdateOne,
	sectionsDeleteOne,
	tasksListByDate,
	tasksDeleteOne,
	tasksCompleteMultiple,
	tasksListForProject,
	tasksListOverdue,
	tasksSearch,
	tasksAddMultiple,
	tasksUpdateOne,
	tasksOrganizeMultiple,
	tasksListForSection,
	subtasksListForParentTask,
	accountOverview,
	projectOverview,
};
