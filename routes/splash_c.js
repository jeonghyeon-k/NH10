const express = require("express")
const fs = require("fs")
const ejs = require("ejs")
const router = express.Router()

const GetMain = (req, res) => {
    let htmlstream = ""
    htmlstream =
        htmlstream +
        fs.readFileSync(__dirname + "/../views/splash_c.ejs", "utf8")
    res.end(ejs.render(htmlstream, { type: "saving" }))
}

router.get("/", GetMain)
module.exports = router
