function celsiusToFahrenheit(celsius) {
    // Convert Celsius to Fahrenheit using the formula
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Example usage:
let celsiusTemperature = 25;  // Example input in Celsius
let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);  // Output: 25°C is equal to 77°F
