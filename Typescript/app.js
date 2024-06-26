"use strict";
// 변수의 데이터 타입 명시
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var stdId = 1111;
var stdName = 'na';
var age = 24;
var gender = 'female';
var course = 'Typescript';
var completed = false;
// 열거형 : 사용자 정의 타입 - 연관된 데이터 묶음
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Female"] = 1] = "Female";
    GenderType[GenderType["GenderNeutral"] = 2] = "GenderNeutral";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 9011;
        this.stdName = 'na';
        this.age = 24;
        this.gender = 'male'; // 리터럴로 선언 하고싶을 경우
        this.course = 'typescript';
        this.completed = true;
    }
    // 재정의
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        // console.log('이름 설정 : ' + this.stdName);
    };
    return MyStudent;
}());
// Mystudents 객체
var myInstance = new MyStudent();
myInstance.setName('엘리스');
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'na',
        // age : 24,
        gender: 'female',
        course: 'typescript',
        completed: true
    };
}
var std = {
    stdId: 1234,
    stdName: 'park',
    age: 30,
    gender: 'male',
    course: 'javascript',
    completed: true
};
function setInfo(student) {
    console.log(student);
}
// setInfo(std);
// console.log(getInfo(5678));
// function Plus(a : number, b? : number) : number {
//     return a + b;
// }
// any : 어떤 타입이든 ok -> 타입을 지정할 수 없는 제한적인 경우에만 any 타입 사용
// 타입 재정의
// type strOrNum = number | string   // number or string의 타입을 strOrNum으로 사용하겠다
// let numStr : strOrNum = '100';
// let item : number;
// function converToString(val : strOrNum) : string {
//     if (typeof val == 'string') {  // 타입 검사를 함
//         item = 0;
//     } else {
//         item = val;
//     }
//     return String(val);  // String이라는 생성자에 들어있는 val을 string으로 변환
// }
// function converToNumber(val : strOrNum) : number {
//     return Number(val);  // Number이라는 생성자에 들어있는 val을 숫자로 변환
// }
// console.log('converToString : ' + typeof(converToString(numStr)) + ' ' + converToString(numStr));
// console.log('converToNumber : ' + typeof(converToNumber(numStr)) + ' ' + converToNumber(numStr));
// 배열 기본 타입
// let numbers : number[] = ([1, 2, 3, 4, 5]);  // typescript 배열 선언방법
// let fruits : string[] = (['apple', 'banana', 'orange']);
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// 배열 유니온 타입
// let mixedArr : (number | string)[] = [1, 'two', 3, 'four'];
// for (let i = 0; i < mixedArr.length; i++) {
//     console.log(mixedArr[i]);
// }
// let infer = [1, 2, 3]  // 타입 추론으로 인해 배열인걸 인지
// for (let i = 0; i < infer.length; i++) {
//     console.log(infer[i]);
// }
// 읽기 전용 : 수정 안됨
// let readOnlyArr : ReadonlyArray<number> = [1, 2, 3];
// tuple : 타입의 순서가 정해져 있음
// let greeting : [number, string, boolean] = [1, 'hello', true];
// for (let i = 0; i < greeting.length; i++) {
//     console.log(greeting[i]);
// }
// Spread 연산자 : ...
var firstArr = [1, 2, 3];
var secondArr = [4, 5, 6];
var combineArr = __spreadArray(__spreadArray([], firstArr, true), secondArr, true);
for (var i = 0; i < combineArr.length; i++) {
    console.log(combineArr[i]);
}
console.log(combineArr);
console.log.apply(console, combineArr);
