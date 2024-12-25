function calculateTotalBill(dishCosts, numberOfPeople) {
    /**
     * Calculate the total bill and the amount each person pays.
     *
     * @param {number[]} dishCosts - Array of costs for each dish.
     * @param {number} numberOfPeople - The number of people sharing the bill.
     * @returns {object} - An object containing the total bill and bill per person.
     */

    // Calculate the total bill
    const totalBill = dishCosts.reduce((sum, cost) => sum + cost, 0);

    // Calculate the amount each person pays
    const billPerPerson = totalBill / numberOfPeople;

    // Return the result as an object
    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}

// Example usage
const dishCosts = [250, 300, 450]; // Costs of individual dishes
const numberOfPeople = 3;
const billDetails = calculateTotalBill(dishCosts, numberOfPeople);

console.log(`Total Bill: Rs. ${billDetails.totalBill}/-`);
console.log(`Each Person Pays: Rs. ${billDetails.billPerPerson.toFixed(2)}/-`);
