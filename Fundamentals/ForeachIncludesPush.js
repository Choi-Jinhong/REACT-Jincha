let posts = ["Hi", "Hello", "Bye"];

posts.forEach(post => console.log(post));

posts.push("new");

console.log(posts);

let greetings = ["Hi", "Hello", "Howdy", "Suup"];

if(greetings.includes("Hello")) { // 배열에서 해당 문자열을 확인해 true, false로 결과를 도출
    greetings.push("Hello");
}

console.log(greetings);

console.log(greetings.reverse()); // 배열을 뒤집기