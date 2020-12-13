const express = require("express")
const fs = require("fs")
const ejs = require("ejs")
const api = require("../../../Activity")
const router = express.Router()

const GetMain = (req, res) => {
    let htmlstream = ""
    htmlstream = fs.readFileSync(
        __dirname + "/../../../views/c_goal_main.ejs",
        "utf8"
    )

    console.log(
        api
            .accout({
                Bncd: "011",
                Acno: "3020000002202",
            })
            .then((data) => {
                console.log(data.data)
                res.end(ejs.render(htmlstream, {}))
            })
    )
}

router.get("/", GetMain)
module.exports = router
