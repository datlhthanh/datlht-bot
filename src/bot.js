import { Bot } from "grammy";
import { config } from "./app.config.js";
import { registerCommands } from "./commands/index.js";
import { printA5Handler } from "./handlers/print-a5.handler.js";

export const bot = new Bot(config.botToken);

registerCommands(bot);
printA5Handler(bot);

bot.catch((err) => console.error("Lỗi bot:", err.error));
