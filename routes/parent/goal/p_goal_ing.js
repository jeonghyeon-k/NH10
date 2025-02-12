const express = require("express")
const fs = require("fs")
const ejs = require("ejs")
const router = express.Router()

const GetMain = (req, res) => {
    let htmlstream = ""
    htmlstream =
        htmlstream +
        fs.readFileSync(__dirname + "/../../../views/header.ejs", "utf8")
    htmlstream =
        htmlstream +
        fs.readFileSync(__dirname + "/../../../views/navbar_p.ejs", "utf8")
    htmlstream =
        htmlstream +
        fs.readFileSync(__dirname + "/../../../views/p_goal_ing.ejs", "utf8")
    res.end(ejs.render(htmlstream, { type: "goal" }))
}

router.get("/", GetMain)
module.exports = router
