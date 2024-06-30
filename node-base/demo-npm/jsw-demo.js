var jwt = require('jsonwebtoken');  // jwt 모듈
var dotenv = require('dotenv');

dotenv.config();

// token 생성 = 서명해줌 (페이로드, 나만의 암호키) + SHA256
var token = jwt.sign({ foo: 'bar' }, process.env.PRIVATE_KEY);

console.log(token);

// 검증
// 검증 성공 시, 페이로드 값 확인 가능
var decoded = jwt.verify(token, process.env.PRIVATE_KEY);
console.log(decoded)
