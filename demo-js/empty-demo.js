const obj1 = {}
const obj2 = { message : "안 빔" }
const num = 1
const str1 = "one"
const str2 = ""    // 문자열도 객체임

console.log(Object.keys(obj1))   // length === 0
console.log(Object.keys(obj2))   // length === 1
console.log(Object.keys(obj1).length === 0)   // ture
console.log(Object.keys(obj2).length === 0)   // false

console.log(Object.keys(num))     // length === 0
console.log(Object.keys(str1))    // length === 1
console.log(Object.keys(num).length === 0)     // ture   >>  말이 안됨
console.log(Object.keys(str1).length === 0)    // false  
console.log(Object.keys(str2).length === 0)    // ture

function isEmpty(obj) {
    if (obj.constructor === Object)  // 객체가 맞는지
    if (Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEmpty(str1))    // false  
console.log(isEmpty(str2))    // ture