// b();
// console.log(a);
// var a = 'Hello World!'; ///hoisting

// function b() {
//     console.log('called b function');
// }
// b();

// var c; //never let any thing be set to undefined

// if (c === undefined) {
//   console.log('this variable is not defined');
// } else{
//   console.log('this is defined');
// }
var dog = 'big dog 1';
function b() {
  console.log(myVar); //1
}

function a() {
  var myVar = 2;
  console.log(myVar + 'a'); //2
  b();
}

let c = 'dad';
console.log(c);
var myVar = 1;
// console.log(myVar);
a();

var ms = new Date().getFullYear();
// var year= new date();

console.log(ms);
// console.log(dog)
