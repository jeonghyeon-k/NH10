const get = require("./api.js")

let Acitivity = ""
//예금주 조회
exports.accout = async (param) => {
    param.Header = ""
    console.log(param)
    return await get.api({
        apiNm: "InquireDepositorAccountNumber",
        url: `InquireDepositorAccountNumber.nh`,
        type: "post",
        param,
    })
}

//거래내역조회
exports.transaction = async (param) => {
    return await get.api({
        apiNm: "InquireTransactionHistory",
        url: `InquireTransactionHistory.nh`,
        type: "post",
        param,
    })
}

//잔액조회
exports.balance = async (param) => {
    return await get.api({
        apiNm: "InquireBalance",
        url: `InquireBalance.nh`,
        type: "post",
        param,
    })
}

//개인카드 승앤내역 조회
exports.Card = async (param) => {
    return await get.api({
        apiNm: "InquireCreditCardAuthorizationHistory",
        url: `InquireCreditCardAuthorizationHistory.nh`,
        type: "post",
        param,
    })
}
