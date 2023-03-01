//задание 1
function A() {
  this.name = "John";
}
function B() {
  return a;
}

let a = new A();
let b = new B();

alert( a == b ); // true

//задание 2
function Calculator() {
    this.read = function() {
        this.a = prompt("Введите 1 значение");
        this.b = prompt("Введите 2 значение");
    }
    this.sum = function() {
        return Number(this.a) + Number(this.b);
    }
    this.mul = function() {
        return this.a * this.b;
    }
}

let calc = new Calculator();
calc.read();

alert("sum = " + calc.sum());
alert("mul = " + calc.mul());

//задание 3
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt("Введите число:");
    }
}

let acc = new Accumulator(13);

acc.read();
acc.read();

alert(acc.value);
