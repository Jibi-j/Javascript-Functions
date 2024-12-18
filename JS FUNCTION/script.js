
const sumOfEvens = (n) => {
  let sum = 0; 
  
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {  
      sum += i;  
    }
  }
  return sum;  // Return the sum of even numbers
};

let n = parseInt(prompt("Enter a number:"));

let result = sumOfEvens(n);

document.write("The sum of even numbers up to " + n + " is: " + result);