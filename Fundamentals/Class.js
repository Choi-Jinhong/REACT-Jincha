class Human {
    constructor(name, lastName) {
        this.name = name; // this는 단순히 참고한다는 의미
        this.lastName = lastName;
    }
}

class Baby extends Human {
    cry() {
        console.log("Waaaaaa");
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

const myBaby = new Baby("mini", "me");

console.log(myBaby.cry(), myBaby.sayName());