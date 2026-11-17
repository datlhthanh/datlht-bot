import { getTokenCommand } from "./get-token.command.js";

export function registerCommands(bot) {
  getTokenCommand(bot);
}
