function findHighestMarks(marks) {
    // Initialize the highest marks to the first student's marks
    let highestMarks = marks[0];

    // Iterate through the array to find the highest marks
    for (let i = 1; i < marks.length; i++) {
        highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }

    // Output the highest marks
    console.log("The highest marks scored by a student are:", highestMarks);
}

// Example usage
let marks = [85, 92, 78, 95, 88];  // Marks of five students
findHighestMarks(marks);  // Output: The highest marks scored by a student are: 95
