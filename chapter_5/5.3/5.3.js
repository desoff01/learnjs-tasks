//задание 1
function ucFirst(str) {
    let tmp = str.toLowerCase();
    return tmp[0].toUpperCase() + tmp.slice(1);
}

let vas = "go0d StRiNg";
alert(ucFirst(vas))

//задание 2
function checkSpam(str) {
    let tmp = str.toLowerCase();
    return tmp.includes("viagra") || tmp.includes("xxx");
}
alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));

//задание 3
function truncate(str, maxlength) {
    if(str.length > maxlength) {
        return str.substr(0, maxlength-1) + '…';
    }
    return str;
}
alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
alert(truncate("Всем привет!", 20));

//задание 4
function extractCurrencyValue(str) {
    return +str.slice(1);
}
alert(extractCurrencyValue("$590"));

