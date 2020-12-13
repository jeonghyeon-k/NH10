const express = require("express")
const fs = require("fs")
const ejs = require("ejs")
const api = require("../../../Activity")
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
    res.end(ejs.render(htmlstream, {}))

    console.log(
        api
            .card({
                FinCard: "00829101234560000112345678919",
                IousDsnc: "1",
                Insymd: "20191105",
                Ineymd: "20191109",
                PageNo: "1",
                Dmcnt: "15"
            })
            .then((data) => {
                console.log(data.data)
                res.end(ejs.render(htmlstream, {}))
            })
    )
}

router.get("/", GetMain)
module.exports = router
