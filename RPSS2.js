//The sum function has a high numbers of parameters.
//How can we improve the code in order to make it accept any amount of numbers to sum as its argument?

function sum(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}
console.log(sum(1, 2, 3, 4, 5));


function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
console.log(sum(1, 2, 3, 4, 5));

/*reduce:

let sum =[1,2,3,4,5];
const newsum = sum.reduce ((total, rest) => {return total + rest;
},0);

console.log(newsum);
*/
