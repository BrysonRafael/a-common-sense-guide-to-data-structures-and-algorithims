// For Loop Implementation
// function factorial(num) {
//   let prod = 1;

//   for (let i = num; i > 1; i--) {
//     prod *= num;
//   }

//   return prod;
// }

// Recursive Implementation
const factorial = num => (num === 1 ? num : num * factorial(num - 1));

console.log(factorial(5));
