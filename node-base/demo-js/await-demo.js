// async-await : Promise 객체를 좀 더 쉽고 편하게 사용하는 문법
// 즉, 비동기 처리가 쉬움

// await은 async 함수 안에서만 동작!
// await이.. Promise 객체.then() 이 메소드를 좀 더 쉽게 사용할 수 있는 방법

// async의 두번째 기능
// Promise 객체가 일이 끝날 때 까지 기다릴 수 있는 공간을 제공

async function f() {

    // Promise 객체 한개당 => query 하나
    let promise1 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("첫번째 쿼리"), 3000);
    });

    // promise 객체가 일 다 할 때 까지 기다려줌
    let result1 = await promise1;

    console.log(result1);

    // Promise 객체 한개당 => query 하나
    let promise2 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("두번째 쿼리 with " + result1 ), 3000);
    });

    let result2 = await promise2
    console.log(result2)

    // Promise 객체 한개당 => query 하나
    let promise3 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("세번째 쿼리 with " + result2), 3000);
    });

    let result3 = await promise3
    console.log(result3)
};

f();
