//задание 1
let user = { name: "John", years: 30 };

let {name: name, years: age, isAdmin: isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

//задание 2
function topSalary(salaries) {
    let tmp = 0, tmpName;
    for (let [name, sal] of Object.entries(salaries)) {
        if(sal > tmp) {
            tmp = sal;
            tmpName = name;
        }
    }
    return tmpName;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( topSalary(salaries));
