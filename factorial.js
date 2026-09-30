// Calculate the factorial of a non-negative integer
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
 
// Test inputs
const inputs = [5, 0, 1, 10];
 
for (const n of inputs) {
  console.log(`${n}! = ${factorial(n)}`);
}
 
// Invalid input test
try {
  factorial(-3);
} catch (error) {
  console.log(`-3! -> Error: ${error.message}`);
}
