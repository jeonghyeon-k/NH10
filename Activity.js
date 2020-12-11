import { api } from "./api.js"

//예금주 조회
export const InquireDepositorAccountNumber = async (param) => {
    return await api({
        apiNm : "InquireDepositorAccountNumber",
        url: `InquireDepositorAccountNumber.nh`,
        type: "post",
        param
    });
}

//거래내역조회
export const InquireTransactionHistory = async (param) => {
    return await api({
        apiNm : "InquireTransactionHistory",
        url: `InquireTransactionHistory.nh`,
        type: "post",
        param
    });
}

//잔액조회
export const InquireBalance = async (param) => {
    return await api({
        apiNm : "InquireBalance",
        url: `InquireBalance.nh`,
        type: "post",
        param
    });
}

//개인카드 승앤내역 조회
export const InquireCreditCardAuthorizationHistory = async (param) => {
    return await api({
        apiNm : "InquireCreditCardAuthorizationHistory",
        url: `InquireCreditCardAuthorizationHistory.nh`,
        type: "post",
        param
    });
}