const numbers = [2, 45, 6524, 22, 254, 295, 495, 299, 375, 53, 12, 68, 5, 4, 8, 1];

const testCondition = (number) => number < 100;

const biggerThan100 = numbers.filter(testCondition);

console.log(biggerThan100);

let posts = ["Hi", "Hello", "Bye"];

posts = posts.filter(post => post != "Bye");

console.log(posts);