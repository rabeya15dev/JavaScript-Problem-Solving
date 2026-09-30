
function reverseString(text) {
  return text
    .split("")  
    .reverse()   
    .join("");   
}
 
// Test cases
console.log(`Original: Hello World  -> Reversed: ${reverseString("Hello World")}`);
console.log(`Original: QA Engineer  -> Reversed: ${reverseString("QA Engineer")}`);
console.log(`Original: (empty)      -> Reversed: "${reverseString("")}"`);
