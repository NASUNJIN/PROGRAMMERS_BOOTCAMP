const express = require('express')
const app = express()

app.listen(3000) // 순서 상관없음 포트 넘버 세팅

// API : GET + "http://localhost:3000/test"
// "TEST SUCCESS"
app.get('/test', function (req, res) {
    res.send('TEST SUCCESS')
})

// API : GET + "http://localhost:3000/test/1"
// "One!"
app.get('/test/1', function (req, res) {
    res.send('One!')
})