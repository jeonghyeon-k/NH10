const express = require("express")
const fs = require("fs")
const ejs = require("ejs")
const router = express.Router()

const GetMain = (req, res) => {
    let htmlstream = ""
    htmlstream = fs.readFileSync(
        __dirname + "/../../../views/c_goal_main_add.ejs",
        "utf8"
    )
    res.end(ejs.render(htmlstream, {}))
}

router.get("/", GetMain)
module.exports = router