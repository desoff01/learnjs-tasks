//задание 1
function sumSalaries(salaries) {
    let sum = 0;

    for (sal of Object.values(salaries)) {
        sum += sal;
    }
    return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

//задание 2
function count(obj) {
    let i = 0;
    for (sal of Object.values(obj)) {
        i++;
    }
    return i;
}

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
