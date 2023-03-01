function A() {}
function B() {}

A.prototype = B.prototype = {};
/*потому что мы приравниваем прототипы А и В
 * к единому значению, а в процессе проверки
 * участвуют именно прототипы
*/
let a = new A();

alert( a instanceof A );

