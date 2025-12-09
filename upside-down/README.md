**Upside-Down**

A small TypeScript project that compiles to `build/index.js`. This repository contains a minimal TypeScript app using the Model Context Protocol SDK and `zod` for validation.

**Highlights**
- **Language:** TypeScript
- **Entry point (source):** `src/index.ts`
- **Built output:** `build/index.js`
- **Build tool:** TypeScript compiler (`tsc`)

**Quick Start**

Prerequisites:
- Node.js (v18+ recommended)
- npm (or a compatible package manager)

Install dependencies:

```bash
npm install
```

Build the project:

```bash
npm run build
```

Run the built output:

```bash
node build/index.js
```

**Scripts**
- `npm run build` — compile TypeScript to JavaScript using `tsc`.

If you add runtime scripts (start, dev, test) to `package.json`, document them here.

**Project Structure**

- `src/` — TypeScript source files (main entry: `src/index.ts`).
- `build/` — Compiled JavaScript output (output of `tsc`).
- `package.json` — Project metadata and scripts.
- `tsconfig.json` — TypeScript configuration.

**Development Notes**

- The project uses `type: "module"` in `package.json`, so Node ESM rules apply.
- Dependencies installed:
  - `@modelcontextprotocol/sdk` — Model Context Protocol SDK used by the project.
  - `zod` — validation schema library.

Dev dependencies include `typescript` and `@types/node` for compilation and typing.

If you plan to add a development watch flow, consider adding a script like:

```bash
npm install -D nodemon ts-node
npm set-script dev "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
```

**Contributing**

Contributions are welcome. Please open issues or pull requests. For bigger changes, open an issue first to discuss the design.

**License**

This project currently lists `ISC` in `package.json` — update the `LICENSE` file if you need a different license.

**Contact / Support**

If this repo is part of a larger workspace, reference the workspace docs or the maintainer for help.

---

File created: `README.md` — placed at project root.
