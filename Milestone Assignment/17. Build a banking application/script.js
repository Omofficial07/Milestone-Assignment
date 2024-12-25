// Customer account object
const customerAccount = {
    name: "John Doe",
    balance: 1000, // Initial balance

    // Method to deposit money
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than zero.");
            return;
        }
        this.balance += amount;
        console.log(`Deposit successful. New balance: $${this.balance.toFixed(2)}`);
    },

    // Method to withdraw money
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be greater than zero.");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds for this withdrawal.");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrawal successful. New balance: $${this.balance.toFixed(2)}`);
    },

    // Method to display account details
    displayAccountDetails() {
        console.log(`Name: ${this.name}, Balance: $${this.balance.toFixed(2)}`);
    }
};

// Example usage
customerAccount.displayAccountDetails(); // Display initial details
customerAccount.deposit(500); // Deposit $500
customerAccount.withdraw(300); // Withdraw $300
customerAccount.withdraw(1500); // Attempt to withdraw more than the balance
customerAccount.displayAccountDetails(); // Display final details
