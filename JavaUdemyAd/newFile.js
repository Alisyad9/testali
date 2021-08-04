// console.log(dog);

// var year = new Date().getFullYear();

// console.log(year);

// var int= '123'

// console.log(parseInt(int));
// function numberToString(num) {
//   let newNumber=num.toString()
//   return newNumber;

//   }
// console.log(numberToString(123));

//   const  numberToString = num =>  num.toString;
// numberToString('123')
//   console.log(numberToString);

function repeatStr(n, s) {
  if (n < 1) {
    return '';
  } else {
    return s + repeatStr(n - 1, s);
  }
}
console.log(repeatStr(3, ' 123'));

// function repeat(n, s) {
//  var newString="";
//  for (var i=0; i<n; i++){
//    console.log(i+' '+s);
// //  newString=s+newString;

//  }
//  return newString;
// }
// console.log(repeat(5,'123'));
// re =(n, s)=>s.slice(0,1,).repeat(n)

//   console.log(re(2, '123'));
// let p1='dog',p2='dog1'

// const rps = (p1, p2) => {
//   if (p1===p2) return 'draw'

// };

// console.log(rps('dog', 'dog'));

// v
// compare('rock','paper');

// console.log(compare);
// let p1 =['rock','paper','scissors'];
// let p2 =['rock','paper','scissors'];
// const rps = (p1, p2) => {
//  if (p1==='rock' && p2==='scissors') {
//    return console.log('Player 1 Won!');
//  }else if(p1==='scissors' && p2==='paper'){
//   return console.log('Player 1 Won!');
//  }else if(p1==='paper' && p2==='rock'){
//   return console.log('Player 1 Won!');

// }else if(p1==='scissors' && p2==='rock'){
//   return console.log('Player 2 Won!');
// }else if(p1==='paper' && p2==='scissors'){
//   return console.log('Player 2 Won!');
// }else if(p1==='rock' && p2==='paper'){
//   return console.log('Player 2 Won!');
// }else if (p1===p2){return  console.log('Draw') }

// };
// rps('rock','scissors');
// rps('scissors','paper');
// rps('pap','pap');

//  def rps(p1, p2):
//     if p1 == 'rock' and p2 == 'scissors':
//         return "Player 1 won!"
//     elif p1 == 'scissors' and p2 == 'paper':
//         return "Player 1 won!"
//     elif p1 == 'paper' and p2 == 'rock':
//         return "Player 1 won!"
//     elif p2 == 'rock' and p1 == 'scissors':
//         return "Player 2 won!"
//     elif p2 == 'scissors' and p1 == 'paper':
//         return "Player 2 won!"
//     elif p2 == 'paper' and p1 == 'rock':
//         return "Player 2 won!"
//     else:
//         return "Draw!"
// function rockPaperScissors(p1, p2) {
//   if (p1 === p2) {
//     return `Draw!`;
//   }
//   const rules = {
//     rock: 'scissors',
//     paper: 'rock',
//     scissors: 'paper'

//   };
//   if (rules[p1] === p2) {

//     return `Player 1 won!`;
//   } else {
//     return `Player 2 won!`;
//   }
// }
// console.log(rockPaperScissors('',''));
//      // Draw!
// rockPaperScissors('scissors', 'rock');  // Player 2 won!
// rockPaperScissors('paper', 'rock');     // Player 1 won!
// rockPaperScissors('paper', 'paper');    // Draw!

// function getVowels(str) {

//   return  str.match(/[aeiou]/gi).length;
// }

function recrusion(n) {
  if (n === 0) {
    return [];
  } else {
    return n + recrusion(n - 1);
  }
}
let lop = ['rock', 'paper', 'scissors'];

function loopName(lop) {
  lop.forEach((element) => {
    return element;
  });
}
loopName(['dog1', 'dog2', 'paper']);

let objectNew = {
  name: 'john',
  age: 32,
  favourite: 'aziza',
};
function objectLop(obs) {}

console.log(recrusion(4));
