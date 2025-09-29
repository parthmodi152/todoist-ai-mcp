import { getMcpServer } from './mcp-server.js'
// Comment management tools
import { addComments } from './tools/add-comments.js'
// Project management tools
import { addProjects } from './tools/add-projects.js'
// Section management tools
import { addSections } from './tools/add-sections.js'
// Task management tools
import { addTasks } from './tools/add-tasks.js'
import { completeTasks } from './tools/complete-tasks.js'
// General tools
import { deleteObject } from './tools/delete-object.js'
import { findComments } from './tools/find-comments.js'
import { findCompletedTasks } from './tools/find-completed-tasks.js'
// Assignment and collaboration tools
import { findProjectCollaborators } from './tools/find-project-collaborators.js'
import { findProjects } from './tools/find-projects.js'
import { findSections } from './tools/find-sections.js'
import { findTasks } from './tools/find-tasks.js'
import { findTasksByDate } from './tools/find-tasks-by-date.js'
import { getOverview } from './tools/get-overview.js'
import { manageAssignments } from './tools/manage-assignments.js'
import { updateComments } from './tools/update-comments.js'
import { updateProjects } from './tools/update-projects.js'
import { updateSections } from './tools/update-sections.js'
import { updateTasks } from './tools/update-tasks.js'
import { userInfo } from './tools/user-info.js'

const tools = {
    // Task management tools
    addTasks,
    completeTasks,
    updateTasks,
    findTasks,
    findTasksByDate,
    findCompletedTasks,
    // Project management tools
    addProjects,
    updateProjects,
    findProjects,
    // Section management tools
    addSections,
    updateSections,
    findSections,
    // Comment management tools
    addComments,
    updateComments,
    findComments,
    // General tools
    getOverview,
    deleteObject,
    userInfo,
    // Assignment and collaboration tools
    findProjectCollaborators,
    manageAssignments,
}

// Smithery-compatible export
export default function createServer({
    config,
}: {
    config?: { todoistApiKey?: string; baseUrl?: string }
}) {
    const todoistApiKey = config?.todoistApiKey || process.env.TODOIST_API_KEY
    const baseUrl = config?.baseUrl || process.env.TODOIST_BASE_URL

    if (!todoistApiKey) {
        throw new Error(
            'TODOIST_API_KEY is required. Provide it via config or environment variable.',
        )
    }

    const server = getMcpServer({ todoistApiKey, baseUrl })
    return server.server
}

export { tools, getMcpServer }

export {
    // Task management tools
    addTasks,
    completeTasks,
    updateTasks,
    findTasks,
    findTasksByDate,
    findCompletedTasks,
    // Project management tools
    addProjects,
    updateProjects,
    findProjects,
    // Section management tools
    addSections,
    updateSections,
    findSections,
    // Comment management tools
    addComments,
    updateComments,
    findComments,
    // General tools
    getOverview,
    deleteObject,
    userInfo,
    // Assignment and collaboration tools
    findProjectCollaborators,
    manageAssignments,
}
