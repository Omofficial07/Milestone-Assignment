function countVowels(name) {
    // Define a string of vowels (both lowercase and uppercase)
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;

    // Iterate through each character in the name
    for (let i = 0; i < name.length; i++) {
        // Check if the character is a vowel
        if (vowels.includes(name[i])) {
            vowelCount++;
        }
    }

    // Return the total count of vowels
    return vowelCount;
}

// Example usage
let userName = "John Doe";  // You can change this input to test with different names
let vowelCount = countVowels(userName);

console.log("Number of vowels in the name:", vowelCount);  // Output: 3
