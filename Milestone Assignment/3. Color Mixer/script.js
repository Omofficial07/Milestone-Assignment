function mixColors(color1, color2) {
    // Convert both colors to lowercase to handle case sensitivity
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();

    switch (true) {
        case (color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red"):
            console.log("purple");
            break;
        case (color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red"):
            console.log("orange");
            break;
        case (color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue"):
            console.log("green");
            break;
        default:
            console.log("Invalid color combination");
            break;
    }
}

// Example usage
mixColors("red", "blue");  // Output: purple
mixColors("yellow", "red");  // Output: orange
mixColors("blue", "yellow");  // Output: green
mixColors("green", "red");  // Output: Invalid color combination
