// Helper function to validate input
function isValidArray(inputArray) {
    if (inputArray.length === 0) {
        console.log(`Array is empty:${inputArray}`)
        return 'Invalid input';
    }
    if (!Array.isArray(inputArray) || inputArray.length < 2) {
        return 'Invalid input';
    }
    return true;
}

function swapFirstAndLast(inputArray) {
    const validationResult = isValidArray(inputArray);
    if (validationResult !== true) {
        return validationResult; // Returns Invalid Input
    }

    let firstElement = inputArray[0];
    let lastIndex = inputArray.length - 1;
    inputArray[0] = inputArray[lastIndex];
    inputArray[lastIndex] = firstElement;

    return inputArray;
}









module.exports = {
    swapFirstAndLast,
};