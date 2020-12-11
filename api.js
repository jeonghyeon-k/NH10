import Axios from 'axios'

const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1 // 0부터 시작하므로 1더함 더함
const day = date.getDate()
if (('' + month).length == 1) {
    month = '0' + month
}
if (('' + day).length == 1) {
    day = '0' + day
}

const tsymd = year + '' + month + '' + day
const iscd = '000530' //기관코드
const accessToKen =
    '74608b853a7178ab3b779ea5a44c2a3826dd8af687e4811d6362e934c5983ad0' //인증키

export const api = ({ url, type, param, apiNm }) => {
    param.Header = {
        ApiNm: apiNm,
        Tsymd: tsymd,
        Trtm: '112428',
        Iscd: iscd,
        FintechApsno: '001',
        ApiSvcCd: 'DrawingTransferA',
        IsTuno: '0001', // 카운트로 변경 해야함
        AccessToken: accessToKen,
    }

    return Axios({
        method: type,
        url: `https://developers.nonghyup.com/${url}`,
        data: param,
    })
}
