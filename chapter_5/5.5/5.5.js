//задание 1
function camelize(str) {
    let arr = str.split('-');
    let tmp;

    for (let i = 1; i < arr.length; i++) {
        tmp = arr[i];
        arr[i] = tmp[0].toUpperCase() + tmp.slice(1);
    }
    tmp = arr.join('');

    return tmp;
}

alert(camelize("border-left-width"));

//задание 2
function filterRange(arr, a, b) {

    return arr.filter(item => item >= a && item <= b);
}

let arr = [45, 23, 12, 5, 62, 6345, 2, 8, 13];
let arr2 = filterRange(arr, 10, 100);

//задание 3
function filterRangeInPlace(arr, a, b) {
    let res = arr.filter(item => item >= a && item <= b);
    arr.length = res.length;
    for(let i = 0; i < arr.length; i++) {
        arr[i] = res[i];
    }
    return arr;
}

let arr = [45, 23, 12, 5, 62, 6345, 2, 8, 13];
alert( filterRangeInPlace(arr, 40, 100) );

//задание 4
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert(arr);

//задание 5
function copySorted(arr) {
    let res = arr.slice(0, arr.length);

    return res.sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

//задание 6
function Calculator() {
    this.methods = {
      "+": (a, b) => a + b
    };

    this.calculate = function(str) {
      let exp = str.split(' ');
      a = +exp[0];
      op = exp[1];
      b = +exp[2];

      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
    }

    this.addMethod = function(name, f) {
    this.methods[name] = f;
  };
}

let calc = new Calculator();
calc.addMethod("-", (a, b) => a - b);
alert(calc.calculate("56 - 21"));

//задание 7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name)

alert( names ); // Вася, Петя, Маша

//задание 8
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин

//задание 9
function sortByAge(users) {
    return users.sort((a, b) => a.age-b.age);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

//задание 10
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

//задание 11
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) );

//задание 12
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) );

//задание 13
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}
