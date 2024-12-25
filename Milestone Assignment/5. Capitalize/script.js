function capitalizeFirstLetter(name) {
    // Check if the first letter is lowercase and capitalize it if necessary
    return name.charAt(0) === name.charAt(0).toLowerCase() 
        ? name.charAt(0).toUpperCase() + name.slice(1) 
        : name;
}

// Example usage
let userName = "john";  // Change this input to test with different names
let modifiedName = capitalizeFirstLetter(userName);

console.log(modifiedName);  // Output: John
