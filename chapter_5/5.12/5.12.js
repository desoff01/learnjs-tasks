//задание 1
let user = {
  name: "Василий Иванович",
  age: 35
};

let json = JSON.parse(JSON.stringify(user));
alert(json);

//заданиe 2
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (value == meetup && key != "") ? undefined : value;
}));
