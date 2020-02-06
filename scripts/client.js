console.log('Hello Ursus');
const doggy = 'value'; // const or let
let kittyKat = 'Fluffy';
console.log(kittyKat);

kittyKat = 'Not so fluffy';
console.log(kittyKat);

// var elephant = 'Huge';
// string type as vlaue
kittyKat = 'meow';
console.log(kittyKat);
// number type as value
kittyKat = 2;
console.log(kittyKat);
// boolean type as value
kittyKat = true;
console.log(kittyKat);

const basketMaxFruit = 6;
const fruitPurchased = '6';

if (fruitPurchased < basketMaxFruit) {
  console.log('You can carry your fruit home.');
} else if (fruitPurchased === basketMaxFruit) {
  // == (evaluate value only) === (evaluates value and type)
  console.log('Your basket is full.');
} else {
  console.log('You need more baskets.');

}

// < less than
// > greater than
// <= less than or equal
// >= greater than or equal
// == evaluate value only
// === evaluates value and type
// != does not equal only value
// !== does not equal value and type
// ! checking for falsy value

let isSnowing;

// falsy values = false, null, undefined, ''
console.log(isSnowing);
if (!isSnowing) {
  console.log('Hey, I don\'t need my boots.');
} else {
  console.log('Shoot, I need boots.');
}
