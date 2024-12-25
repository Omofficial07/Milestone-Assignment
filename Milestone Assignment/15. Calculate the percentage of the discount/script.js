const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice <= 0 || discountedPrice < 0 || discountedPrice > originalPrice) {
        throw new Error("Invalid price values.");
    }
    const discount = originalPrice - discountedPrice;
    const discountPercentage = (discount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
};

// Example usage:
try {
    const originalPrice = 100;
    const discountedPrice = 75;
    console.log(`Discount: ${calculateDiscountPercentage(originalPrice, discountedPrice)}%`);
} catch (error) {
    console.error(error.message);
}
