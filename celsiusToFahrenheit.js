// Convert Celsius to Fahrenheit: F = (C x 9/5) + 32
function celsiusToFahrenheit(celsius) {
  if (typeof celsius !== "number" || Number.isNaN(celsius)) {
    throw new TypeError("Input must be a valid number");
  }
  return (celsius * 9) / 5 + 32;
}
 
// Test inputs
const inputs = [0, 37, 100, -40];
 
for (const c of inputs) {
  console.log(`${c}°C = ${celsiusToFahrenheit(c).toFixed(1)}°F`);
}