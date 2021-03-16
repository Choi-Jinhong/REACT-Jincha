// function sayHello(name = "Human") { // 매개 변수에 default 값을 지정할 수 있음
//     return "Hello " + name;
// }

// Arrow Function
const sayHello = (name = "Human") => "Hello " + name;

const gnong = sayHello("Gnong");

console.log(gnong);