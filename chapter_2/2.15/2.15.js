//задание 1
function checkAge_1(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}

function checkAge_12(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
//отличий нет

//задание 2
function checkAge_2(age) {// 1 вариант
    return (age > 18) ? true : confirm('Родители разрешили?');
}
function checkAge_21(age) {// 2 вариант
    return (age > 18) || confirm('Родители разрешили?');
}

//задание 3
function min(a, b){
  return (a > b) ? b : a;
}

//задание 4
function pow(a, b){
  return a ** b;
}

num = prompt("Введите число:");
degree = prompt("Укажите степень числа:");
if(degree <= 0 || degree % 1 != 0)
  alert("Укажите натуральную степень числа!!!");
else{
  alert("Получившееся число: " + pow(num, degree));
}
