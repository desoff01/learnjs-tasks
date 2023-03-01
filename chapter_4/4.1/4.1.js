//задание 1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//задание 2
let schedule = {};
alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for(let k in obj) {
        return false
    }
    return true
}

//задание 3
const user = {
  name: "John"
};

// это будет работать
user.name = "Pete";

//задание 4
let sum = 0;

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

for (let k in salaries) {
  sum += salaries[k];
}

//задание 5
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
    for (let k in obj) {
        if(typeof obj[k] == "number")
          obj[k] *= 2;
    }
}

