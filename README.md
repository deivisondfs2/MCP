**MCP Projects (Workspace Root)**

This folder contains example projects that use the Model Context Protocol (MCP).

**What is MCP?**
- **MCP (Model Context Protocol):** A lightweight protocol and accompanying SDK for exchanging structured context and metadata between tools and models. MCP-enabled libraries make it easier to build composable integrations where models and external systems share well-defined context.

**This Workspace**
- **Purpose:** A small collection of example projects demonstrating how to use MCP-related SDKs and validation libraries in real codebases.
- **Included project:** `upside-down/` — a minimal TypeScript example that compiles to `build/index.js` and uses `@modelcontextprotocol/sdk` and `zod` for validation.

**Quick Links**
- Project folder: `./upside-down/`
- Project README: `./upside-down/README.md`

**Quick Start (for `upside-down`)**
1. Change into the project folder:

```bash
cd upside-down
```

2. Install dependencies:

```bash
npm install
```

3. Build the TypeScript sources:

```bash
npm run build
```

4. Run the compiled output:

```bash
node build/index.js
```

**Notes**
- Many projects in this workspace use ESM (`type: "module"`). Use Node v18+ for best compatibility.
- If you want a development workflow, add `dev` and `start` scripts to the individual project's `package.json` and update that project's README accordingly.

**Contributing / Support**
- Open an issue or PR in this repository for questions, improvements, or additional example projects.
