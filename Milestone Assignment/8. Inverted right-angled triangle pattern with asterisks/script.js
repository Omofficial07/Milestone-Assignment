function invertedTriangle(i) {
    // Loop through each row starting from i down to 1
    for (let row = i; row >= 1; row--) {
        // Print 'row' number of asterisks in each row
        let stars = '*'.repeat(row);
        console.log(stars);
    }
}

// Example usage
let i = 6;  // You can change the value of 'i' to test with different sizes
invertedTriangle(i);
