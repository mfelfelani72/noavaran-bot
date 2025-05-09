configures = require("../configures/botConfigures.js");
const { Telegraf } = require("telegraf");

const TOKEN = configures.tokenBot;
const bot = new Telegraf(TOKEN);

const web_link = "https://aimoonhub.imoonex.ir/dashboard/home";


bot.start((ctx) =>
  ctx.reply("salam mohammad aziz :)))))", {
    reply_markup: {
      keyboard: 
      [
        [
          { text: "select order", web_app: { url: web_link } },
          { text: "our shop", web_app: { url: "https://mfcloner.am/eshop-blade/public/" } },
        ],
        [
          { text: "about me", web_app: { url: "https://mfcloner.am/" } },
          { text: "our restaurant", web_app: { url: "https://mfcloner.am/restaurant/" } },
        ],
      ],
    },
  })
);

bot.launch();
