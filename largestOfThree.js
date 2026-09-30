// Function to find the largest of three numbers
function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
 
// Test cases
console.log(`Largest of (12, 45, 27): ${findLargest(12, 45, 27)}`);
console.log(`Largest of (9, 9, 3): ${findLargest(9, 9, 3)}`);
console.log(`Largest of (-5, -2, -8): ${findLargest(-5, -2, -8)}`);
