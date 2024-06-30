const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
app.listen(process.env.PORT)

const fruits = [
    { id : 1, name : 'apple' },
    { id : 2, name : 'orange' },
    { id : 3, name : 'strawberry' },
    { id : 4, name : 'blueberry' }
]

// 과일 전체 조회
app.get('/fruits', (req, res) => {
    res.json(fruits) // json array
})

// 과일 개별 조회
app.get('/fruits/:id', (req, res) => {
    let id = req.params.id

    // fruits array에 id값을 넘겨 json 객체를 받아옴
    // let fruit = fruits[id-1]   // id-1 하는 이유 : 배열의 인덱스는 0부터 시작하기 때문에

    // fruits 배열의 각 요소를 f로 받아와서 f.id가 주어진 id(params.id)와 일치하는지 확인
    var findFruit = fruits.find(f => (f.id == id))  
        
    if (findFruit) {  // findFruit가 있을 경우
        res.json(findFruit)
    } else {  // 없을 경우 예외를 터트릴 수 있음 == http status code 실패로 보내줌
        res.status(404).json({
            message : "전달주신 id로 저장된 과일이 없습니다."
        })
    }

    // forEach()문 (findFruit이랑 역할 똑같음)
    // fruits.forEach(function(fruit) {
    //     // fruit.id의 값이 req.params.id랑 같을 경우
    //     if (fruit.id == id) {
    //         findFruit = fruit
    //     }
    // })

    res.json(findFruit)
})