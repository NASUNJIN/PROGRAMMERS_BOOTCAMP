const { channel } = require('diagnostics_channel')
const express = require('express')
const app = express()

app.listen(3000) // 순서 상관없음 포트 넘버 세팅

// 채널 주소 : https://www.youtube.com/@15ya.fullmoon
// 채널 주소 : https://www.youtube.com/@woowakgood
// 채널 주소 : https://www.youtube.com/@yo-nam

let youtuber1 = {
    channelTitle : "십오야",
    sub : "구독자 633만명",
    videoNum : "1.1천개"
}

let youtuber2 = {
    channelTitle : "우왁굳의 게임방송",
    sub : "구독자 168만명",
    videoNum : "8천개"
}

let youtuber3 = {
    channelTitle : "취미로 요리하는 남자 Yonam",
    sub : "구독자 142만명",
    videoNum : "169개"
}

app.get('/:nickname', function (req, res) {
    
    const {nickname} = req.params
    
    if (nickname == "@15ya.fullmoon") {
        res.json(youtuber1)
    } else if (nickname == "@woowakgood") {
        res.json(youtuber2)
    } else if (nickname == "@yo-man") {
        res.json(youtuber3)
    } else {
        res.json({
            message : "저희가 모르는 유튜버입니다."
        })
    }
    // 개발자가 예상하지 못한 에러 = 예외 발생
    
})