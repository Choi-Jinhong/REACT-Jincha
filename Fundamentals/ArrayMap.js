const days = ["Mon", "Tue", "Wed", "Thurs", "Fri"];

const addNumber = (day, index) => `#${index + 1}: ${day}`;

const smilingDays = days.map(addNumber); // 배열에 있는 모든 요소들에 해당 function을 사용하는 것을 의미

console.log(smilingDays);