import { bot } from "./bot.js";

bot.start({
  onStart: (info) => {
    console.log(`Bot @${info.username} đang chạy`);
  },
});

function shutdown() {
  bot.stop();
}
process.once("SIGINT", shutdown);
process.once("SIGTERM", shutdown);
