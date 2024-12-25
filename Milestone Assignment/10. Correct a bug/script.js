function doubleCartQuantities(cart) {
    // Iterate over the cart array and double the quantity of each item
    for (let i = 0; i < cart.length; i++) {
        cart[i] *= 2;  // Double the quantity of the current item
    }
    return cart;  // Return the updated cart array
}

// Example usage:
let cart = [1, 2, 3, 4, 5];  // Initial quantities in the cart
let correctedCart = doubleCartQuantities(cart);

console.log("Corrected Cart Quantities:", correctedCart);  // Output: [2, 4, 6, 8, 10]
