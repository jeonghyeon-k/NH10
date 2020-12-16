//========추가================
// 기관코드
const iscd = "" 
//임시 : 000537

// 인증키 
const accessToKen = ""
// 임시 : 238489426e54540b1cee32c5a2066c0c9e9f25166bebdc9696fa76e4657c11e8
//===================================

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

const tsymd = year + "" + month + "" + day


exports.api = ({ url, type, param, apiNm, isTuno }) => {
    param.Header = {
        ApiNm: apiNm,
        Tsymd: tsymd,
        Trtm: "112428",
        Iscd: iscd,
        FintechApsno: "001",
        ApiSvcCd: "DrawingTransferA",
        IsTuno: isTuno,
        AccessToken: accessToKen,
    }

    return Axios({
        method: type,
        url: `https://developers.nonghyup.com/${url}`,
        data: param,
    })
}
