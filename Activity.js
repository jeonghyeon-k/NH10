const get = require("./api.js")

const gettimestamp = () => {
    let settime = new Date().getUTCMilliseconds()
    if (settime < 100) {
        settime = "03" + settime
    } else if (99 < settime && settime < 1000) {
        settime = "3" + settime
    } else {
        gettimestamp()
    }
    return settime
}

//예금주 조회
exports.accout = async (param) => {
    let timestamp = gettimestamp()
    return await get.api({
        apiNm: "InquireDepositorAccountNumber",
        url: `InquireDepositorAccountNumber.nh`,
        type: "post",
        param,
        isTuno: timestamp,
    })
}

//거래내역조회
exports.transaction = async (param) => {
    let timestamp = gettimestamp()
    return await get.api({
        apiNm: "InquireTransactionHistory",
        url: `InquireTransactionHistory.nh`,
        type: "post",
        param,
        isTuno: timestamp,
    })
}

//잔액조회
exports.balance = async (param) => {
    let timestamp = gettimestamp()
    return await get.api({
        apiNm: "InquireBalance",
        url: `InquireBalance.nh`,
        type: "post",
        param,
        isTuno: timestamp,
    })
}

//개인카드 승인내역 조회
exports.card = async (param) => {
    let timestamp = gettimestamp()
    return await get.api({
        apiNm: "InquireCreditCardAuthorizationHistory",
        url: `InquireCreditCardAuthorizationHistory.nh`,
        type: "post",
        param,
        isTuno: timestamp,
    })
}
