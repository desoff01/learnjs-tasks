//задача 1
alert( null || 2 || undefined );// 2

//задача 2
alert( alert(1) || 2 || alert(3) );// 1, затем 2

//задача 3
alert( 1 && null && 2 );// null

//задача 4
alert( alert(1) && alert(2) );// 1 и потом undefined

//задача 5
alert( null || 2 && 3 || 4 );// 3

//задача 6
let age = 16;
if(age>=14 && age<=90)
    alert("Вам от 14 до 90 лет");

//задача 7
let age = 16;
if(!(age>=14 && age<=90))//1 вариант
    alert("Вам меньше 14 или больше 90");

if(age<14 || age>90)//2 вариант
    alert("Вам меньше 14 или больше 90");

//задача 8
if (-1 || 0) alert( 'first' );//выполняется, -1
if (-1 && 0) alert( 'second' );//не выполняется, 0
if (null || -1 && 1) alert( 'third' );//выполняется, 1

//задача 9
let login = prompt("Логин:");
if(login == "Админ"){
    let pass = prompt("Пароль:");
    if(pass == "Я Главный")
        alert("Здравствуйте");
    else if(pass == null)
        alert("Отменено");
    else
        alert("Неверный пароль");
}
else if(login == null)
    alert("Отменено");
else
    alert("Я вас не знаю");
