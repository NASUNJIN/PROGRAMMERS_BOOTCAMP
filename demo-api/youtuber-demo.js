// express 모듈 셋팅
const express = require('express')
const app = express()
app.listen(3000)

// 데이터 셋팅
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

let db = new Map()  // key-value
var id = 1
db.set(id++, youtuber1) // id++를 해줘야지 다음것도 숫자 증가됨
db.set(id++, youtuber2)
db.set(id++, youtuber3)

// REST API 설계
// 전체조회
app.get('/youtubers', function(req, res) {
    res.json({
        message : "test"
    })
})
// 개별조회
app.get('/youtuber/:id', function(req, res) {
    let {id} = req.params
    id = parseInt(id) // id문자열을 숫자로 바꿔줌
    
    const youtuber = db.get(id)
    if(youtuber == undefined) {
        res.json({
            message : "유튜버 정보를 찾을 수 없습니다."
        })
    } else {
        res.json(youtuber)
    }
})

app.use(express.json())
app.post('/youtuber', (req, res) => {
    console.log(req.body)
    // 등록 해야함 Map(db)에 저장
    db.set(id++, req.body)

    // "channelTitle님 환영합니다"
    // id-1 : id에 플러스된 값이 나오기 때문에 4로 등록을 하면 5로 조회해서
    res.json({
        messae: `${db.get(id-1).channelTitle}님, 유튜버 생활을 환영합니다.`
    })
})