// Function to count vowels in a string
function countVowels(text) {
  const vowels = "aeiou";
  let count = 0;
 
  // Convert to lowercase so both 'A' and 'a' are counted
  for (const char of text.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
 
// Test cases
console.log(`"Software Quality Assurance" has ${countVowels("Software Quality Assurance")} vowels`);
console.log(`"JavaScript" has ${countVowels("JavaScript")} vowels`);
console.log(`"rhythm" has ${countVowels("rhythm")} vowels`);
console.log(`"Rabeya Bosri" has ${countVowels("Rabeya Bosri")} vowels`);
