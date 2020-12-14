const express = require("express")
const fs = require("fs")
const ejs = require("ejs")
const api = require("../../Activity")
const router = express.Router()

function delay(gap) {
    var then, now

    then = new Date().getTime()

    now = then

    while (now - then < gap) {
        now = new Date().getTime()
    }
}

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

    console.log(
        api
            .card({
                FinCard: "00829101234560000112345678919",
                IousDsnc: "1",
                Insymd: "20191105",
                Ineymd: "20191109",
                PageNo: "1",
                Dmcnt: "15",
            })
            .then((data) => {
                delay(800)
                res.end(
                    ejs.render(htmlstream, {
                        type: "consumption",
                        exList: data.data.REC,
                    })
                )
            })
    )
}

router.get("/", GetMain)
module.exports = router
