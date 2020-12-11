const express = require("express")
const app = express()
const path = require("path")
/*import {
    InquireDepositorAccountNumber,
    InquireTransactionHistory,
    InquireBalance,
    InquireCreditCardAuthorizationHistory,
} from "./Activity.js"*/

const c_consumption = require("./routes/child/c_ consumption")
const c_saving = require("./routes/child/c_ saving")

const c_goal_main = require("./routes/child/goal/c_ goal_main")
const c_goal_complete = require("./routes/child/goal/c_goal_complete")
const c_goal_ing = require("./routes/child/goal/c_goal_ing")

const c_goal_add_calendar = require("./routes/child/goal/add/c_goal_add_calendar")
const c_goal_add_complete = require("./routes/child/goal/add/c_goal_add_complete")
const c_goal_add_set = require("./routes/child/goal/add/c_goal_add_set")
const c_goal_add_terms = require("./routes/child/goal/add/c_goal_add_terms")

const p_consumption = require("./routes/parent/p_consumption")
const p_saving = require("./routes/parent/p_saving")
const p_goal_complete = require("./routes/parent/goal/p_goal_complete")
const p_goal_edit = require("./routes/parent/goal/p_goal_edit")
const p_goal_main = require("./routes/parent/goal/p_goal_main")

const PORT = 3000

//app.set("views", path.join(__dirname, "views")) // views경로 설정
app.set("view engine", "ejs") // view엔진 지정

// URI와 핸들러를 매핑
app.use("/", c_consumption)
app.use("/c", c_consumption)
app.use("/c/consumption", c_consumption)
app.use("/c/saving", c_saving)
app.use("/c/goal", c_goal_main)
app.use("/c/goal/main", c_goal_main)
app.use("/c/goal/complete", c_goal_complete)
app.use("/c/goal/ing", c_goal_ing)

app.use("/c/goal/add", c_goal_add_terms)
app.use("/c/goal/add/term", c_goal_add_terms)
app.use("/c/goal/add/calendar", c_goal_add_calendar)
app.use("/c/goal/add/complete", c_goal_add_complete)
app.use("/c/goal/add/set", c_goal_add_set)

app.use("/p", p_consumption)
app.use("/p/consumption", p_consumption)
app.use("/p/saving", p_saving)
app.use("/p/goal", p_goal_main)
app.use("/p/goal/main", p_goal_main)
app.use("/p/goal/complete", p_goal_complete)
app.use("/p/goal/edit", p_goal_edit)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}!`)
})

// ================================================================================
/*
    //예금주 조회
    InquireDepositorAccountNumber({
        "Bncd": "011",
        "Acno": "3020000002202"
        }).then(data => {
            console.log(data.data)
    });
    
    //거래내역조회
    InquireTransactionHistory({
        "Bncd": "011",
        "Acno": "3020000002202",
        "Insymd": "20201208",
        "Ineymd": "20201208",
        "TrnsDsnc": "A",
        "Lnsq": "DESC",
        "PageNo": "1",
        "Dmcnt": "100"
        }).then(data => {
            console.log(data.data)
    });

    //잔액 조회
    InquireBalance({
        "FinAcno": "핀어카운트"
           }).then(data => {
            console.log(data.data)
     });
         
    //개인카드 승앤내역 조회
    InquireCreditCardAuthorizationHistory({
        "FinCard": "00829101234560000112345678919",
        "IousDsnc": "1",
        "Insymd": "20191105",
        "Ineymd": "20191109",
        "PageNo": "1",
        "Dmcnt": "15"
           }).then(data => {
            console.log(data.data)
     });
     */
