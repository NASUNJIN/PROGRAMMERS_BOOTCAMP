const express = require('express')
const app = express()

app.listen(3000) // 순서 상관없음 포트 넘버 세팅

// '/'이 날라오면 매개변수로 콜백함수 호출
app.get('/', function (req, res) {
    res.send('Hello World')
})

let nodejsBook = {
	title : "Node.js를 공부해보자",
	price : 20000,
	description : "내가 만들어서 책 개쩜"
}

app.get('/products/1', function (req, res) {
    res.json(nodejsBook)
    // res.send('2000')
})