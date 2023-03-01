//задание 1
let a = +prompt("Введите 1 число");
let b = +prompt("Введите 2 число");
alert(a + b);

//задание 2
alert(Math.round(6.35 * 10) / 10);

//задание 3
function readNumber() {
    let num;
    do {
        num = +prompt("Введите число");
    } while (!isFinite(num))

    if(num == null) return null;
    return num;
}

//задание 4
let i = 0;
while (i != 10) {
  i += 0.2;
}
/*
 * цикл никогда не завершится потому, что
 * i никогда не будет равен именно 10,
 * останется небольшое дробное значение
*/

//задание 5
function random(min, max) {
    return Math.random() * (max - min) + min;
}
alert(random(1, 10));

//задание 6
function random(min, max) {
    return Math.trunc( Math.random() * (max - min) ) + min;
}
alert(random(6, 25));
