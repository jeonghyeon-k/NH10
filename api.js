const Axios = require("axios")

const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1 // 0부터 시작하므로 1더함 더함
const day = date.getDate()
//let hours = date.getHours()
//const minutes = date.getDate.getMinutes()
if (("" + month).length == 1) {
    month = "0" + month
}
if (("" + day).length == 1) {
    day = "0" + day
}

const gettimestamp = () => {
    let settime = new Date().getUTCMilliseconds()
    if (settime < 100) {
        settime = "00" + settime
    } else if (99 < settime && settime < 1000) {
        settime = "0" + settime
    } else {
        gettimestamp()
    }
    return settime
}
const timestamp = gettimestamp()
const tsymd = year + "" + month + "" + day
const iscd = "000530" //기관코드
const accessToKen =
    "74608b853a7178ab3b779ea5a44c2a3826dd8af687e4811d6362e934c5983ad0" //인증키

exports.api = ({ url, type, param, apiNm }) => {
    param.Header = {
        ApiNm: apiNm,
        Tsymd: tsymd,
        Trtm: "112428",
        Iscd: iscd,
        FintechApsno: "001",
        ApiSvcCd: "DrawingTransferA",
        IsTuno: timestamp, // 카운트로 변경 해야함
        AccessToken: accessToKen,
    }

    return Axios({
        method: type,
        url: `https://developers.nonghyup.com/${url}`,
        data: param,
    })
}
