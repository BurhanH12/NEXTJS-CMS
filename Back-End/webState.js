const mongoose = require("mongoose");

const WebStateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
    },
    state: {
        type: String
    }

},
{
    collection: "WebStates",
});

mongoose.model("WebStates",WebStateSchema);