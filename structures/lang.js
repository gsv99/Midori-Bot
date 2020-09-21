const { readdirSync } = require("fs");
const { join } = require("path");
const filePath = join(__dirname, "..", "locales");
var colors = require('colors');

module.exports.run = (bot) => {
    for (const cmd of readdirSync(filePath).filter(cmd => cmd.endsWith(".js"))){
        const prop = require(`${filePath}/${cmd}`);
        bot.locales.set(prop.name, prop);
    }

    console.log(`[Lang]`.bgWhite + ` ${bot.locales.size} langs carregadas`.blue);
}