function swapFirstAndLast(inputArray) {
    if (!Array.isArray(inputArray) || inputArray.length < 2) {
        return 'Invalid input';
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