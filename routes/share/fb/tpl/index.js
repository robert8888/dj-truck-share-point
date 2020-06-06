const path = require("path");

module.exports = {
    html : __dirname + "/tpl.mst",
    js : [
        __dirname + "/../../../common/scripts/redirect.js",
        __dirname + "/script.js",
    ],
    css : [
        __dirname + "/../../../common/style/default.css",
        __dirname + "/main.css"
    ]
}