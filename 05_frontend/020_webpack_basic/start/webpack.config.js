const path = require("path");

module.exports = {
    mode : "development", // or production
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bandle.js"
    }
}