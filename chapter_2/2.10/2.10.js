//задача 1
if ("0") {
  alert( 'Привет' );// выведется
}

//задача 2
let answer = prompt('Какое "официальное" название Javascript?');
if(answer == "ECMAScript")
    alert("Верно");
else
    alert("Не знаете? ECMAScript!");

//задача 3
let number = prompt("Введите число:");
if(number > 0)
    alert("1");
else if(number == 0)
    alert("0");
else
    alert("-1");

//задача 4
let result = (a+b<4) ? 'Мало' : 'Много';

//задача 5
let login = prompt("Введите логин:");

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' : '';

alert(message);
