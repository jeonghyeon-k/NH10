const express = require("express")
const fs = require("fs")
const ejs = require("ejs")
const router = express.Router()

const GetMain = (req, res) => {
    let htmlstream = ""
    htmlstream =
        fs.readFileSync(__dirname + "/../../views/navBar.ejs", "utf8")
    htmlstream = htmlstream + fs.readFileSync(
        __dirname + "/../../views/c_saving.ejs",
        "utf8"
    )
    res.end(ejs.render(htmlstream, {
        one:100,
        two:200,
        three:300,
        type : "saving"
    }))
}

router.get("/", GetMain)
module.exports = router
