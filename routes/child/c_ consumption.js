const express = require("express")
const fs = require("fs")
const ejs = require("ejs")
const router = express.Router()

const GetMain = (req, res) => {
    let htmlstream = ""
    htmlstream =
        htmlstream +
        fs.readFileSync(__dirname + "/../../views/header.ejs", "utf8")
    htmlstream =
        htmlstream +
        fs.readFileSync(__dirname + "/../../views/navbar.ejs", "utf8")
    htmlstream =
        htmlstream +
        fs.readFileSync(__dirname + "/../../views/c_consumption.ejs", "utf8")
    res.end(ejs.render(htmlstream, { type: "consumption" }))
}

router.get("/", GetMain)
module.exports = router
