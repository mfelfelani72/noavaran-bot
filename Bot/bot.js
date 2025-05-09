configures = require("../configures/botConfigures.js");
const { Telegraf } = require("telegraf");

const TOKEN = configures.tokenBot;
const bot = new Telegraf(TOKEN);

const web_link_aimoonhub = "https://aimoonhub.imoonex.ir/dashboard/home";
const web_link_imoonex = "http://79.175.177.113:24300/landing";

bot.start((ctx) =>
  ctx.reply("welcom to the Noavran bot", {
    reply_markup: {
      keyboard: [
        [
          { text: "Aimoonhub", web_app: { url: web_link_aimoonhub } },
          { text: "imoonex", web_app: { url: web_link_imoonex } },
        ],
        // [
        //   { text: "about me", web_app: { url: "https://mfcloner.am/" } },
        //   { text: "our restaurant", web_app: { url: "https://mfcloner.am/restaurant/" } },
        // ],
      ],
    },
  })
);

bot.launch();
