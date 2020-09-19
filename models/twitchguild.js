const mongoose = require("mongoose");

const mapaSchema = mongoose.Schema({
    guildId: String,
    streamerId: String,
    name: String,
    config:{
        status: String,
        creator: String,
        text: String
    }
});

module.exports = mongoose.model("TwitchGuild", mapaSchema);