const { channel } = require('diagnostics_channel')
const express = require('express')
const app = express()

app.listen(3000) // 순서 상관없음 포트 넘버 세팅

// products/__ 빈칸에 오는 값을 n이라는 변수에 담아줘
// : URL로 매개변수를 전달해주나보다
app.get('/products/:n', function (req, res) {
    // console.log(req.params.n)

    let number = parseInt(req.params.n) - 10
        console.log(number)  // 숫자 "숫자"

    res.json({
        num : number
    })
})

// 채널 주소 : https://www.youtube.com/@15ya.fullmoon
// 채널 주소 : https://www.youtube.com/@woowakgood
// 채널 주소 : https://www.youtube.com/@yo-nam

// app.get('/:nickname', function (req, res) {
    
//     const param = req.params
    
//     res.json({
//         channel : param.nickname
//     })
// })

// ? 뒤부터 : querystring
// 영상 클릭 주소 : https://www.youtube.com/watch?v=ZklBBCO0I1E
// 영상 클릭 주소 : https://www.youtube.com/watch?v=ThaPYoTFbsg
// 타임라인 주소 : https://www.youtube.com/watch?v=KMhf4ex3d-E&t=291s    //t = 291s

app.get('/watch', function (req, res) {
    const q = req.query  // q = {v:___, t:___}
    // console.log(q.v)
    // console.log(q.t)

    // JS객체(JSON)의 비구조화
    const {v1, t1} = req.query
    console.log(v1)
    console.log(t1)

    res.json({
        video : v1,
        timeline : t1
    })
})
