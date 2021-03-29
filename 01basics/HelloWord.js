console.log('hellow world,,,,,lets test this dddddd');
//C:\javascript tests\

function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
    }
  }

  // change code above this line
  return newArr;
}
// change code here to test different cases:
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// function filteredArray(arr, elem) {
//   let newArr = [];
// for(let i=0; 0<arr.length; i++){
//   if (arr[i].indexOf(elem) == -1){
//     newArr.push(arr[i]);
//   }
// }
// return newArr;
// }

// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];

// console.log(nestedArray[2][1][0][0][0]);

let myNestedArray = [
  // change code below this line
  ["unshift", false, 1, 2, 3, "complex", "nested"],                      //[0]
  ["loop", "shift", 6, 7, 1000, "method"],                               //[1]
  ["concat", false, true, "spread", "array", ["deep"]],                  //[2][5][0]
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],          //[3][5][0][0]
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]//[4][5][0][0][0]
  // change code above this line
];

console.log(myNestedArray[4][6][0][0][0]);
