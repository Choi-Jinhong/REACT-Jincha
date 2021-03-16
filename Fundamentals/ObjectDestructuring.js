const human = {
    name:"gnong",
    lastName:"Choi",
    nationality: "I was Korean",
    favFood: {
        breackfast: "Sang",
        lunch: "Doncas",
        dinner: "Sang + Doncas"
    }
}

// const name = human.name;
// const lastName = human.lastName;
// const diffName = human.nationality;
// const dinner = human.favFood.dinner;
// ↓↓↓↓↓↓↓↓↓
const { name, lastName, nationality: diffName, favFood: { dinner, breackfast, lunch } } = human; 
// "nationality: diffName" -> nationality를 diffName에 입력
// "favFood: { dinner, breakfast, lunch }" -> favFood Object 내에 있는 변수들을 dinner, breackfast, lunch로 생성


console.log(name, lastName, diffName, dinner, breackfast, lunch);

// structuring
// object를 기반으로 variable을 만드는 과정