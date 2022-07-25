let x = prompt("enter a value");
const a = parseInt(x);
let y = prompt("enter b value");
const b = parseInt(y);

//regular function to Arrow Conversion
function regular(a, b) {
  return a + b;
}
const addArrow = (a, b) => regular(a + b);
console.log(regular(a,b));

//Arrow function to Regular Function Conversion
var sum = (a, b) => a + b;
//   console.log(sum(a, b));

function sum1(a, b) {
  return sum(a, b);
}
console.log(sum(a, b));
