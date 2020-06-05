const express = require("express");
const router = express.Router();
const render =require("./../../../utils/renderTpl");
const fetchRecord = require("./../../../data/fetchRecord");
const tpl = require("./tpl");
const view = require("./view");

router.get("/fb/record/:id", async (req, res) => {
    const id = +req.params.id;
    if(!id || isNaN(id)){
        res.redirect("/404");
    }
    try{
        const response = await fetchRecord(id);
        if(!response || response.errors){
            res.redirect("/404");
        }
        const output = await render({tpl, view : view(response.data)});
        res.header("Content-Type", "text/html; charset=UTF-8");
        res.send(output)
    } catch(err){
        res.redirect("/404");
    }
   // res.send("hellow")
})


module.exports = router;