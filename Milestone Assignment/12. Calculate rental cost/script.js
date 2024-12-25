function calculateRentalCost(daysRented, carType) {
    /**
     * Calculate the rental cost based on the number of days rented and car type.
     *
     * @param {number} daysRented - The number of days the car is rented.
     * @param {string} carType - The type of car ("Economy", "Midsize", "Luxury").
     * @returns {number|null} - The total rental cost, or null if the car type is invalid.
     */
    
    // Rental costs per day for each car type
    const rentalRates = {
        "Economy": 4000,
        "Midsize": 10000,
        "Luxury": 20000
    };

    // Validate car type
    if (!rentalRates[carType]) {
        console.error(`Invalid car type: ${carType}`);
        return null;
    }

    // Calculate total rental cost
    const totalCost = rentalRates[carType] * daysRented;
    return totalCost;
}

// Example usage
const days = 7;
const car = "Luxury";
const totalCost = calculateRentalCost(days, car);

if (totalCost !== null) {
    console.log(`The total cost for renting a ${car} car for ${days} days is Rs. ${totalCost}/-`);
}
