const express = require("express");
const router = express.Router();
const render =require("./../../utils/renderTpl");
const tpl = require("./tpl")

router.get("*", async (req, res) => {
    const output = await render({tpl, view : {}})
    res.header("Content-Type", "text/html; charset=UTF-8");
    res.send(output)
})


module.exports = router;