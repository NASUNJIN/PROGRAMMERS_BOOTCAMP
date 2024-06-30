const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json()) // http 외에 사용할 모듈인 '미들웨어':json 설정
app.post('/test', function (req, res) {
  // body에 숨겨져서 들어온 데이터를 화면에 뿌려주기
  // body에 숨겨져서 들어온 데이터 : postman으로 확인 가능

  console.log(req.body.message)

  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})