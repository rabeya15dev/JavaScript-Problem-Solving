// Function to check whether a number is even or odd
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
 
// Test cases (positive, negative, and zero)
const testNumbers = [10, 5, -4, 0];
 
for (const num of testNumbers) {
  console.log(`${num} is ${checkEvenOdd(num)}`);
}
