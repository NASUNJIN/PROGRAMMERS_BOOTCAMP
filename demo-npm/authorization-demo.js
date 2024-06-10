var jwt = require('jsonwebtoken');  // jwt 모듈
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config(); 
// 순서 상관없음 포트 넘버(3000) 세팅
app.listen(process.env.PORT);

// GET + '/jwt" : 토큰 발행
app.get('/jwt', function (req, res) {
    var token = jwt.sign({ foo: 'bar' }, process.env.PRIVATE_KEY);

    const token = jwt.sign({
        username : "sunjin"
    }, process.env.PRIVATE_KEY, {
        expiresIn : '5m',
        issuer : "admin"
    });
    
    res.cookie("jwt", token, {
        httpOnly : true
    });

    res.send("토큰 발행 완료!");
});

// GET + '/jwt/decoded' : 토큰 검증
app.get('/jwt/decoded', function (req, res) {
    let receivedJwt = req.headers["authorization"]
    console.log("우리가 req로 받은 jwt : ", jwt)
    var decoded = jwt.verify(receivedJwt, process.env.PRIVATE_KEY);

    // 유효기간 지남
    // 500 에러 (서버가 꺼지지 않음)
    // 예외 (개발자가 생각하지 못한 에러) 처리 해야함
    // 유효기간이 지난 토큰 -> '로그인(인증) 세션 만료'

    res.send(decoded);
});