import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "upside-down-MCP",
  version: "1.0.0",
});

server.tool(
  "reverse-string",
  "Reverse String",
  {
    text: z.string().describe("Provide the text to be reverted"),
  },
  async ({ text }) => {
    const textFormated = reverseString(text);

    return {
      content: [
        {
          type: "text",
          text: `The reversed text is: ${textFormated}`,
        },
      ],
    };
  }
);

function reverseString(inputString: string): string {
  // 1. Split the string into an array of characters.
  const charArray: string[] = inputString.split("");

  // 2. Reverse the order of elements in the array.
  charArray.reverse();

  // 3. Join the characters back into a string.
  const reversedString: string = charArray.join("");

  return reversedString;
}

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Main Error", error);
  process.exit(1);
});
