const express = require('express')
const app = express()

app.listen(3000) // 순서 상관없음 포트 넘버 세팅

// /hello, /bye, /nicetomeetyou
app.get('/hello', function (req, res) {
    res.json({
        say : '안녕하세요'
    })
})
app.get('/bye', function (req, res) {
    res.json({
        say : '안녕히가세요'
    })
})

app.get('/nicetomeetyou', function (req, res) {
    res.json({
        say : '만나서 반갑습니다'
    })
})