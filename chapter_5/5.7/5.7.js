//задание 1
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) );

//задание 2
function aclean(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase().split('').sort().join('');
    }
    return Array.from(new Set(arr));
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );

//задание 3
let map = new Map();
map.set("name", "John");

let keys = [map.keys()];
keys.push("more");

