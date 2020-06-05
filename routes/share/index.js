const router = require("express").Router();

const fb = require("./fb");

router.use("/share/", fb)

module.exports = router;