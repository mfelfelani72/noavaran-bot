configures = require("../configures/botConfigures.js");
const { Telegraf } = require("telegraf");

const TOKEN = configures.tokenBot;
const bot = new Telegraf(TOKEN);

const web_link_aimoonhub = "https://aimoonhub.imoonex.ir";
const web_link_aimoonhub_dashboard = "https://aimoonhub.imoonex.ir/dashboard/home";

bot.start((ctx) =>
  ctx.reply("welcom to the Noavran bot", {
    reply_markup: {
      keyboard: [
        [
          { text: "Aimoonhub", web_app: { url: web_link_aimoonhub } },
          { text: "Dashboard", web_app: { url: web_link_aimoonhub_dashboard } },
        ],
        [
          { text: "Coins", web_app: { url: "https://aimoonhub.imoonex.ir/dashboard/coin-list" } },
          { text: "Authors", web_app: { url: "https://aimoonhub.imoonex.ir/dashboard/author-list" } },
          { text: "Providers", web_app: { url: "https://aimoonhub.imoonex.ir/dashboard/provider-list" } },
        ],
      ],
    },
  })
);

bot.launch();
