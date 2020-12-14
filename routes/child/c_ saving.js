const express = require("express")
const fs = require("fs")
const ejs = require("ejs")
const router = express.Router()
const api = require("../../Activity")

const GetMain = (req, res) => {
    let i = 0
    let htmlstream = ""
    let data_one
    let data_two
    let data_three
    htmlstream = fs.readFileSync(__dirname + "/../../views/navBar.ejs", "utf8")
    htmlstream = fs.readFileSync(__dirname + "/../../views/navBar.ejs", "utf8")
    htmlstream =
        htmlstream +
        fs.readFileSync(__dirname + "/../../views/c_saving.ejs", "utf8")

    api.balance({
        FinAcno: "00820100005370000000000001067",
    }).then((data) => {
        data_one = data.data.Ldbl
        if (data_one == data.data.Ldbl) {
            data_one = data.data.Ldbl
            api.balance({
                FinAcno: "00820100005370000000000007205",
            }).then((data) => {
                data_two = data.data.Ldbl
                if (data_two == data.data.Ldbl) {
                    data_two = data.data.Ldbl
                    api.balance({
                        FinAcno: "00820100005370000000000007151",
                    }).then((data) => {
                        data_three = data.data.Ldbl
                        console.log(data_one, data_two, data_three)
                        if(data_one === undefined){
                            data_one = 10000
                        }
                        if(data_two === undefined){
                            data_two = 20000
                        }
                        if(data_three === undefined){
                            data_three = 30000
                        }
                        res.end(
                            ejs.render(htmlstream, {
                                one: data_one,
                                two: data_two,
                                three: data_three,
                                four: (
                                    parseInt(data_one) +
                                    parseInt(data_two) +
                                    parseInt(data_three)
                                ).toLocaleString(),
                                type: "saving",
                            })
                        )
                    })
                }
            })
        }
    })
}

router.get("/", GetMain)
module.exports = router
