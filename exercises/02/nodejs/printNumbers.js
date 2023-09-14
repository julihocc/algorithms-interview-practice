/**
 * Function to print numbers from n to 100
 * @param {number} n - The starting number
 */
function printNumbers(n) {
    // Base case: If n is greater than 100, return
    if (n > 100) {
        return;
    }

    // Display the current number
    console.log(n);

    // Recursive call: Proceed to the next number
    printNumbers(n + 1);
}

// Start the recursion from number 1
printNumbers(1);

module.exports = {printNumbers}