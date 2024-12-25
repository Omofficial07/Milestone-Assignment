function printNumbersDivisibleBy3NotBy2(arr) {
    // Loop through each number in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the number is divisible by 3 but not by 2
        if (arr[i] % 3 === 0 && arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
}

// Example usage
let numbers = [1, 2, 3, 6, 9, 12, 15, 18, 21, 25];
printNumbersDivisibleBy3NotBy2(numbers);
