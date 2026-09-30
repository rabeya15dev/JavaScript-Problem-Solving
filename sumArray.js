
function sumArray(numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}
 
// Test inputs
const tests = [
  [1, 2, 3, 4, 5],
  [10, -4, 6],
  [2.5, 3.5],
  [],
];
 
for (const arr of tests) {
  console.log(`sumArray([${arr.join(", ")}]) -> ${sumArray(arr)}`);
}
