"use strict";
// task 1
Object.defineProperty(exports, "__esModule", { value: true });
//  5 > 4 → true
console.log(5 > 4);
// "apple" > "pineapple" → false
console.log("apple" > "pineapple");
// "2" > "12" → true
console.log("2" > "12");
// undefined == null → true
console.log(undefined == null);
// undefined === null → false
console.log(undefined === null);
// null == "\n0\n" → false
console.log(null == "\n0\n");
// null === +"\n0\n" → false
console.log(null === +"\n0\n");
// task 2
// if ("0") {
//     alert( 'Hello' );
//   }
if ("0") {
    console.log(`Hello`);
}
// task 3
// let value = prompt('Type a number', 0);
// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );
// }
let value = 0;
if (value > 0) {
    console.log(1);
}
else if (value < 0) {
    console.log(-1);
}
else {
    console.log(0);
}
// task 4      
// let result;
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
let a = 2;
let b = 3;
let result;
if (a + b < 4) {
    console.log('Below');
}
else {
    console.log('Over');
}
// task 5
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
let login = `Employee`;
let message;
if (login == 'Employee') {
    console.log('Hello');
}
else if (login == 'Director') {
    console.log('Greetings');
}
else if (login == '') {
    console.log('No login');
}
else {
    console.log('');
}
