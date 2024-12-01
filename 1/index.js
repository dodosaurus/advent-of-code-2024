const fs = require('fs');

// Read the input file
const input = fs.readFileSync('1/input.txt', 'utf8');

// Split the input into lines and create two arrays
const [firstColumn, secondColumn] = input
    .trim()
    .split('\n')
    .reduce((acc, line) => {
        const [num1, num2] = line.split(/\s+/).map(Number);
        acc[0].push(num1);
        acc[1].push(num2);
        return acc;
    }, [[], []]);

console.log('First column:', firstColumn);   // [3, 4, 2, 1, 3, 3]
console.log('Second column:', secondColumn);

// Sort both arrays from smallest to largest
const sortedFirstColumn = [...firstColumn].sort((a, b) => a - b);
const sortedSecondColumn = [...secondColumn].sort((a, b) => a - b);

console.log('Sorted first column:', sortedFirstColumn);
console.log('Sorted second column:', sortedSecondColumn);

// Compare numbers from both sorted arrays and calculate sum of differences
const sumOfDifferences = sortedFirstColumn.reduce((sum, currentNum, index) => {
    const num1 = currentNum;
    const num2 = sortedSecondColumn[index];
    const difference = Math.abs(num1 - num2);
    return sum + difference;
}, 0);

console.log('Sum of differences:', sumOfDifferences);

// Calculate similarity score
const similarityScore = firstColumn.reduce((total, leftNum) => {
    // Count how many times this number appears in the right list
    const occurrences = secondColumn.filter(rightNum => rightNum === leftNum).length;
    // Multiply the number by its occurrences and add to total
    return total + (leftNum * occurrences);
}, 0);

console.log('Similarity score:', similarityScore);
