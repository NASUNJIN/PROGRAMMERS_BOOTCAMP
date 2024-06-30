// 배열
const arr = [1, 2, 3, 4, 5]

// 전달받은 객체 또는 배열에서 값(요소)을 꺼낸 다음
// 매개변수로 그 요소를 전달하여 호출되는 콜백함수
arr.forEach(function(a, b, c) {
    // a: 데이터값, b: 인덱스값, c: 객체 통째로
    // console.log(`a : ${a}, b: ${b}, c: ${c}`)
})

// Map
let map = new Map ()
map.set(7, "seven")
map.set(9, "nine")
map.set(8, "eight")

map.forEach(function(a, b, c) {
    // a: 데이터값, b: 인덱스값, c: 객체 통째로
    console.log(`a : ${a}, b: ${b}, c: ${c}`)
})