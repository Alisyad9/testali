var score= 100;

score=30;

var complex= ((4+3)*5) + (3);

let tempInFahrenheit=20;

let celsius= (tempInFahrenheit- 32 )*5/9;



console.log(celsius);
//let recursion = n=> n(n-1); 

//console.log(recursion(3));

function countdown(n, newArr=[]) {
  if (n <= 0) {
      return newArr;
  }
  newArr.push(n);
  return countdown(n - 1, newArr)
}

console.log(countdown(5));
 