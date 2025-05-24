# Todoist AI Tools

A set of tools to connect to AI agents, to allow them to use Todoist on a user's behalf.

These tools can be used both through an MCP server, or imported directly in other projects to
integrate them to your own AI conversational interfaces.

## Using tools

### 1. Add this repository as a dependency

```sh
npm install github:doist/todoist-ai-tools
```

> [!NOTE]
>
> Ideally we should end up publishing this to NPM, so that we can install it in the regular way.
> Another consequence of installing it like this is that the `dist/` folder with the build will not
> be present inside `node_modules/todoist-ai-tools/`. You may need to do that manually, like this:
>
> ```sh
> cd node_modules/todoist-ai-tools
> npm install
> npm run build
> cd ../..
> ```

### 2. Import the tools and plug them to an AI

Here's an example using [Vercel's AI SDK](https://ai-sdk.dev/docs/ai-sdk-core/generating-text#streamtext).

```js
import { tasksByDateRange } from "todoist-ai-tools/tools";
import { streamText } from "ai";

const result = streamText({
    model: yourModel,
    system: "You are a helpful Todoist assistant",
    tools: {
        tasksByDateRange,
    },
});
```

## Features

A key feature of this project is that tools can be reused, and are not written specifically for use in an MCP server. They can be hooked up as tools to other conversational AI interfaces (e.g. Vercel's AI SDK).

This project is in its early stages. Expect more and/or better tools soon.

Nevertheless, our goal is to provide a small set of tools that enable complete workflows, rather than just atomic actions, striking a balance between flexibility and efficiency for LLMs.

### Available Tools

- **account-overview**: Get a Markdown overview of all projects (with hierarchy and sections) and the inbox project.
- **project-overview**: Get a Markdown overview of a single project, including its sections and all tasks. Tasks are grouped by section, with tasks not in any section listed first.
- **projects-list**: List all projects for the user.
- **projects-search**: Search for projects by name or other criteria.
- **projects-add-one**: Add a new project.
- **projects-update-one**: Update a project's name by its ID.
- **projects-delete-one**: Delete a project by its ID.
- **sections-search**: Search for sections by name or other criteria in a project.
- **sections-add-one**: Add a new section to a project.
- **sections-update-one**: Update a section's name by its ID.
- **sections-delete-one**: Delete a section by its ID.
- **tasks-list-by-date**: Get tasks by date range.
- **tasks-list-overdue**: Get overdue tasks.
- **tasks-list-for-project**: Get tasks by project ID.
- **tasks-list-for-section**: List tasks for a given section.
- **tasks-search**: Search tasks by text using Todoist's filter query.
- **tasks-add-multiple**: Add one or more tasks to a project, section, or parent.
- **tasks-update-one**: Update an existing task with new values.
- **tasks-delete-one**: Delete a task by its ID.
- **tasks-complete-multiple**: Complete one or multiple tasks by ID.
- **tasks-organize-multiple**: Organize multiple tasks (move, reorder, etc.) in bulk.
- **subtasks-list-for-parent-task**: List subtasks for a given parent task.
- **subtasks-add-multiple**: Add one or more subtasks to a parent task.

## Dependencies

-   MCP server using the official [@modelcontextprotocol/sdk](https://github.com/modelcontextprotocol/typescript-sdk?tab=readme-ov-file#installation)
-   Todoist Typescript API client [@doist/todoist-api-typescript](https://github.com/Doist/todoist-api-typescript)

## MCP Server Setup

See [docs/mcp-server.md](docs/mcp-server.md) for full instructions on setting up the MCP server.

## Local Development Setup

See [docs/dev-setup.md](docs/dev-setup.md) for full instructions on setting up this repository locally for development and contributing.
