function removeDuplicates(cart) {
    // Use a Set to automatically remove duplicates
    return [...new Set(cart)];
}

// Example usage
let cart = ["apple", "banana", "orange", "apple", "grapes", "banana", "pear"];
let uniqueCart = removeDuplicates(cart);

console.log("Cart without duplicates:", uniqueCart);  // Output: ["apple", "banana", "orange", "grapes", "pear"]
