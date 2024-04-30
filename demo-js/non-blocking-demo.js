function first() {
    console.log("첫 번째")
}

function second() {
    console.log("두 번째")
}

function third() {
    console.log("세 번째")
}

first();
// 콜백 함수 : 함수의 매개변수로 변수 또는 값을 전달하는 것이 아니라 함수를 전달하는 것
setTimeout(second, 2000); // 2초뒤에 실행
third();