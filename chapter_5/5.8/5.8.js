//задание 1
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let wset = new WeakSet();
wset.add(messages[0]);
wset.add(messages[2]);

alert(wset.has(messages[1]));

//задание 2
let wmap = new WeakMap();

wmap.set(messages[0], "30.12.2012");
wmap.set(messages[1], "03.01.2013");
