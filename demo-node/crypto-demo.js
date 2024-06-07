const crypto = require('crypto');

const password = "1111";

// 비밀번호 암호화
const salt = crypto.randomBytes(10).toString('base64');
// 값을 다른 문자로 바꾸고 싶을 때
const hashPassword = crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('base64');

console.log(hashPassword);

// 회원가입 시 비밀번호를 암호화 후, 암호화 된 비밀번호와 salt 값을 같이 저장
// 로그인 시, 이메일 & 비밀번호 (암호화 전)-> salt값 꺼내서 비밀번호 암호화 -> 디비 비밀번호 비교
