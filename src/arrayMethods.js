// Helper isValidArray function to validate input
function isValidArray(inputArray) {
  if (!Array.isArray(inputArray)) {
    return "Invalid input";
  }
  if (inputArray.length === 0) {
    return "Invalid input: array is empty";
  }
  if (inputArray.length < 2) {
    return "Invalid input";
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
  isValidArray,
  swapFirstAndLast,
};
