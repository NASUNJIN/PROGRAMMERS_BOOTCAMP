var jwt = require('jsonwebtoken');  // jwt 모듈
// token 생성 = 서명해줌 (페이로드, 나만의 암호키) + SHA256
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

console.log(token);
