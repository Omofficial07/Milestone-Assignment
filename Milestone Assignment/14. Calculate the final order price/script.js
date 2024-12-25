const calculateCartTotal = (cartItems) => {
    /**
     * Calculate the total cost of items in the customer's cart.
     *
     * @param {Array} cartItems - Array of objects with unit price and quantity.
     * @returns {number} - The total cost of items in the cart.
     */

    return cartItems.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
};

// Example usage
const cartItems = [
    { unitPrice: 100, quantity: 2 },
    { unitPrice: 200, quantity: 1 },
    { unitPrice: 50, quantity: 4 }
];

const totalCost = calculateCartTotal(cartItems);

console.log(`Total Cart Cost: Rs. ${totalCost}/-`);
