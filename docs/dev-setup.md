# Development Setup

## 1. Install dependencies and set up environment

```sh
npm run setup
```

## 2. Configure environment variables

Update the `.env` file with your Todoist token:

```env
TODOIST_API_KEY=your-key-goes-here
```

## 3. Run the MCP server with inspector

```sh
npm run dev
```

This command will start a web server running the [MCP inspector](https://modelcontextprotocol.io/docs/tools/inspector), which allows you to try the tools manually, instead of through an AI.
