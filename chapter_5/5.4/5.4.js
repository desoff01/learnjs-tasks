//задание 1
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // 4

//задание 2
let genre = ["Джаз", "Блюз"];

genre.push("Рок-н-ролл");
genre[genre.length >> 1] = "Классика";
alert(genre.shift());
genre.unshift("Регги");
genre.unshift("Рэп");

//задание 3
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); /* вывод alert: a,b,function() {
           *   alert( this );
           * }
           * вызывается функция внутри массива, в этой функции
           * вызывается alert(this), которая выводит данные внутри массива
           * в виде строки
          */

//задание 4
function sumInput() {
    let arr = [];
    let input;

    while (true) {
        input = prompt("Введите число:");
        if(input == '' || !isFinite(input) || input == null)
            break;
        arr.push(+input);
    }
    let sum = 0;

    for (let s of arr) {
        sum += s;
    }
    return sum;
}

alert( sumInput() );

//задание 5
function getMaxSubSum(arr) {
  let max = 0;
  let tmp = 0;

  for (let item of arr) {
    tmp += item;
    max = Math.max(max, tmp);
    if (tmp < 0) tmp = 0;
  }
  return max;
}

getMaxSubSum([-1, 2, 3, -9]);
getMaxSubSum([2, -1, 2, 3, -9]);
getMaxSubSum([-1, 2, 3, -9, 11]);
getMaxSubSum([-2, -1, 1, 2]);
getMaxSubSum([100, -9, 2, -3, 5]);
getMaxSubSum([1, 2, 3]);
