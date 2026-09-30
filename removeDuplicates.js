
function removeDuplicates(arr) {
  // A Set stores only unique values; the spread operator converts it back to an array
  return [...new Set(arr)];
}
 
// Test cases
const numbers = [1, 2, 2, 3, 4, 4, 5, 1];
const testSteps = ["login", "logout", "login", "signup", "logout"];
 
console.log("Original numbers :", numbers);
console.log("Unique numbers   :", removeDuplicates(numbers));
 
console.log("Original steps   :", testSteps);
console.log("Unique steps     :", removeDuplicates(testSteps));





