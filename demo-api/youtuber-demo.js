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

    db.forEach(function(youtuber) {
        console.log(youtuber)
    })

    var youtubers = {}
    db.forEach(function(value, key) {
        youtubers[key] = value // key값으로 value를 넣겠다.
    });

    res.json(youtubers)
})
// 개별조회
app.get('/youtubers/:id', function(req, res) {
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
app.post('/youtubers', (req, res) => {
    console.log(req.body)
    // 등록 해야함 Map(db)에 저장
    db.set(id++, req.body)

    // "channelTitle님 환영합니다"
    // id-1 : id에 플러스된 값이 나오기 때문에 4로 등록을 하면 5로 조회해서
    res.json({
        messae: `${db.get(id-1).channelTitle}님, 유튜버 생활을 환영합니다.`
    })
})

app.delete('/youtubers/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id) // id문자열을 숫자로 바꿔줌

    // 예외처리
    var youtuber = db.get(id)
    if (youtuber == undefined) {
        res.json({
            message : `요청하신 ${id}번은 없는 유튜버입니다.`
        })
    } else {
        const channelTitle = youtuber.channelTitle
        db.delete(id)
    
        res.json({
            message : `${channelTitle}님, 아쉽지만 우리 인연은 여기서 끝입니다.`
        })
    }
    
})

// 전체 삭제
app.delete('/youtubers', (req, res) => {
    var msg = ""
    // db에 값이 1개 이상일 경우 전체 삭제
    if(db.size > 0) {
        db.clear()
        msg = "전체 유튜버가 삭제되었습니다."
    } else {   // 값이 없을 경우 
        msg = "삭제할 유튜버가 없습니다."
    }
    res.json({
        message : msg
    })
})

// 개별 수정
app.put('/youtubers/:id', function(req, res) {
    let {id} = req.params
    id = parseInt(id) // id문자열을 숫자로 바꿔줌

    // 예외처리
    var youtuber = db.get(id)
    var oldTitle = youtuber.channelTitle
    if (youtuber == undefined) {
        res.json({
            message : `요청하신 ${id}번은 없는 유튜버입니다.`
        })
    } else {
        var newTitle = req.body.channelTitle

        youtuber.channelTitle = newTitle  // 기존에 있는 채널 이름을 새로운 이름으로 바꾸기
        db.set(id, youtuber)

        res.json({
            message : `${oldTitle}님이 채널명이 ${newTitle}로 수정되었습니다.`
        })
    }
})