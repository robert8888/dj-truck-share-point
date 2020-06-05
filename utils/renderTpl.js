require("dotenv").config();
const Mustache = require("mustache");
const readFilePromise = require('fs-readfile-promise');

const jsGlobalVar = (vars) => {
    return  Object.entries({...process.env,  ...vars})
        .filter(([name, value])=> name.startsWith("JS_GLOBAL"))
        .map(([name, value]) => {
            name = name.substr(10, name.length)
                       .toLocaleLowerCase()
                       .replace(/_(\w)/g, ( _, $1) => $1.toUpperCase());
            return `${name}="${value}";\n`
        })
        .reduce((acc, cur) => cur + acc);
}

const render = async ({tpl, view}) => {
    tpl.js = tpl.js || [];
    tpl.css = tpl.css || [];
    
    const html = readFilePromise(tpl.html, "utf-8");

    const js = Promise.all(tpl.js.map( path => readFilePromise(path, "utf-8")));

    const css = Promise.all(tpl.css.map( path => readFilePromise(path, "utf-8")));

    const files = await Promise.all([html, js, css]);
    view.js = files[1];
    view.js.unshift(jsGlobalVar(view));

    view.css = files[2];

    return Mustache.render(files[0], view);
}


module.exports = render;