// SpreadOperator
// 배열, 객체, 함수 모두에서 사용가능하다.

// Array
const days = ["Mon", "Tues", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

let allDays = [...days, ...otherDays, "Sun"];

console.log(allDays);

// Object
const ob = {
    first: "hi",
    second: "hello"
}

const ab = {
    third: "bye bye"
}

const two = { ...ob, ...ab };

console.log(two);