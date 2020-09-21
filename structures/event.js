const { readdirSync } = require("fs");
const { join } = require("path");
const filePath = join(__dirname, "..", "events");
var colors = require('colors');

module.exports.run = (bot) => {
    const eventFiles = readdirSync(filePath);
    for (const eventFile of eventFiles){
        const event = require(`${filePath}/${eventFile}`);
        const eventName = eventFile.split(".").shift();
        bot.on(eventName, event.bind(null, bot));
    }

    console.log(`[Events]`.bgWhite + ` ${eventFiles.length} eventos carregados`.blue);
}