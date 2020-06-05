require("dotenv").config();
const express = require("express")
const cors = require("cors")

const PORT = process.env.PORT;

const app = express();
app.use(cors());

//routes
app.use(require("./routes/share"));
app.use(require("./routes/404"))


app.listen(PORT || 9000, () => {
    console.log("server started on port : " + PORT)
})