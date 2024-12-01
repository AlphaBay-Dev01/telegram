const { Telegraf } = require("telegraf");
const TOKEN = "7552269908:AAGC7_FaVCbKal1mkBE9R48axMTVofE7rLY";
const bot = new Telegraf(TOKEN);

const web_link = "https://celebrated-torte-184681.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
