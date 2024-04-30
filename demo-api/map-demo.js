const express = require('express')
const app = express()
app.listen(3000) // 순서 상관없음 포트 넘버 세팅

app.get('/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id) // "숫자" -> 숫자

    // res.json(db.get(id))  //db.get(id) : json

    if (db.get(id) == undefined) {
        res.json({
            message: "없는 상품입니다."
        })
    } else {
        product = db.get(id)
        product["id"] = id  // product.id = id  id값 추가되어서 나옴

        res.json(product)
    }
})

// localhost:3000/1 => NoteBook
// localhost:3000/2 => Cup
// localhost:3000/3 => Chair

let db = new Map()

let notebook ={
    productName : "Notebook",
    price : 2000000
}

let cup ={
    productName : "Cup",
    price : 3000
}

let chair ={
    productName : "Chair",
    price : 100000
}

let poster ={
    productName : "Poster",
    price : 20000
}

db.set(1, notebook) // key로 value를 찾을 수 있는 한쌍을 저장
db.set(2, cup)
db.set(3, chair)
db.set(4, poster) // 문자열과 숫자를 구분함

console.log(db)
console.log(db.get(1))
console.log(db.get(2))
console.log(db.get(3))
console.log(db.get(4))
// console.log(db.get("1"))