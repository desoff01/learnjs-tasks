//задание 1
let date = new Date(2012, 1, 20, 3, 12);
alert(date);

//задание 2
function getWeekDay(date) {
    let arr = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return arr[date.getDay()];
}

let date = new Date(2012, 0, 3);
alert( getWeekDay(date) );

//задание 3
function getWeekDay(date) {
    let arr = [7, 1, 2, 3, 4, 5, 6];
    return arr[date.getDay()];
}

let date = new Date(2012, 0, 3);
alert( getWeekDay(date) );

//задание 4
function getDateAgo(date, days) {
    let date2 = new Date();
    let time = 24 * days * 60 * 60 * 1000;
    date2.setTime(date - time);
    return date2;
}

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) );
alert( getDateAgo(date, 2) );
alert( getDateAgo(date, 365) );

//задание 5
function getLastDayOfMonth(year, month) {
let date = new Date();
date.setFullYear(year);
date.setMonth(month);
date.setDate(0);

return date.getDate();
}

alert(getLastDayOfMonth(2013, 5));

//задание 6
function getSecondsToday() {
    let timestamp = Date.now();
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    return Math.round((timestamp - date) / 1000);
}

alert(getSecondsToday());

//задание 7
function getSecondsToTomorrow() {
    let date = new Date();

    return 86400 - (date.getHours() * 3600 +
    date.getMinutes() * 60 + date.getSeconds());
}

alert(getSecondsToTomorrow());

//задание 8
function formatDate(date) {
    let dateNow = Date.now();
    let subDate = dateNow - date;

    if(subDate < 1000)
        return "прямо сейчас";
    else if(subDate < 60000)
        return Math.round(subDate / 1000) + " сек. назад";
    else if(subDate < 60000 * 60)
        return Math.round(subDate / 60000) + " мин. назад";

    let tmpDate = date;
    tmpDate = [
        '0' + tmpDate.getDate(),
        '0' + tmpDate.getMonth(),
        '' + tmpDate.getFullYear(),
        '0' + tmpDate.getHours(),
        '0' + tmpDate.getMinutes()
    ].map(item => item.slice(-2));

    return tmpDate.slice(0, 3).join('.') + ' ' + tmpDate.slice(3).join(':');
}

alert( formatDate(new Date(new Date - 1)) );

alert( formatDate(new Date(new Date - 30 * 1000)) );

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) );

alert( formatDate(new Date(new Date - 86400 * 1000)) );
