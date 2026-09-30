// Check whether a word or phrase is a palindrome
function isPalindrome(text) {
  // Lowercase and keep only letters and digits
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}
 
// Test inputs
const inputs = ["racecar", "hello", "Madam", "A man, a plan, a canal: Panama"];
 
for (const word of inputs) {
  console.log(`isPalindrome("${word}") -> ${isPalindrome(word)}`);
}
