//задание 1
let i = 3;

while (i) {
  alert( i-- );
}
/*
 * Выведет в конце 1, т.к. когда i == 0
 * цикл прекратит своё выполнение, ибо 0 == false
*/

//задание 2
i = 0;
while (++i < 5) alert( i );
//выведет значения от 1 до 4

i = 0;
while (i++ < 5) alert( i );
//выведет значения от 1 до 5

//задание 3
for (i = 0; i < 5; i++) alert( i );
//выведет значения от 0 до 4

for (i = 0; i < 5; ++i) alert( i );
//выведет значения от 0 до 4

//задание 4
for (i = 2; i <= 10; i+=2) alert(i);

//задание 5
i = 0;
while(i<3)
    alert(`number ${i++}!`);

let input;
//задание 6
while(true){
    input = prompt("Введите число большее 100:");
    if(input == null || input > 100)
        break;
}

//задание 7
let str = '';
let k = 0;
let n = prompt("Введите предел чисел:");
for(i = 2; i < n; i++){
    for(let j = 2; j <= i; j++){
        if(i % j == 0) k++;
    }
    if(k < 2)
        str += i + ', ';
    k = 0;
}
alert(str);
