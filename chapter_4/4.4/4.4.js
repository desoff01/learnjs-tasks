//задание 1
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name );
/*
 * выведется пустое окно alert
 * свойство объекта ref будет 'Window'
 *
 * если добавить "use strict", то будет ошибка
 * user.ref is undefined
*/

//задание 2
let calculator = {
    read() {
        this.a = prompt("Введите 1 значение");
        this.b = prompt("Введите 2 значение");
    },
    sum() {return Number(this.a) + Number(this.b);},
    mul() {return this.a * this.b;}
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//задание 3
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();
