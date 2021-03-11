let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(1, 1, -1,2);

console.log(array);

function updateVegetablesCollection (veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
      veggies.push(veggie);
      console.log('New veggies collection is : ' + veggies);
  }else {
    console.log(veggie + ' already exists in the veggies collection.');
  } 

}
//   else if (veggies.indexOf(veggie) > -1) {
//       console.log(veggie + ' already exists in the veggies collection.');
//   }
// }

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'DOG');
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'tomato');
// spinach already exists in the veggies collection

