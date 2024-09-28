// NOTE: If an input is invalid, simply return the string "Invalid input"

// Helper isValidArray function to validate input // This helper looks for a least two values in the array
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

// Helper function to validate input // This helper does not look at array length -- TODO: Look into a way to simplify this into one helper
function isValidArraySecondRules(inputArray) {
  if (!Array.isArray(inputArray)) {
    return "Invalid input";
  }
  if (inputArray.length === '') {
    return "Invalid input";
  }
  return true;
}

// Write a function called swapFirstAndLast that takes in an array as a parameter.
// Swap the values of the first and last index without using array destructuring.
// Return the updated array
  
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
  
  
// Write a function called squareFirstIndex that takes in an array as a parameter.
// Return the square of a number held at the first index.

function squareFirstIndex (inputArray) {
    let firstElement = inputArray[0];
    const validationResult = isValidArray(inputArray);

    if ( isNaN(firstElement) ) {
        return "Invalid input"    
    }
    if (validationResult !== true) {
      return validationResult; // Returns Invalid Input
    }
    let squareOfFirstIndex = firstElement * firstElement;
    return squareOfFirstIndex;
}


// Write a function called getLongerArray that takes in two arrays as parameters.
// Use a ternary operator and return the array that is longer.

function getLongerArray (firstArray, secondArray) {
  const validationResult = isValidArraySecondRules(firstArray);
  const validationResult2 = isValidArraySecondRules(secondArray);
  if (validationResult !== true) {
    return validationResult; // Returns Invalid Input
  }
  if (validationResult2 !== true) {
    return validationResult2; // Returns Invalid Input
  }
  let longerArray = firstArray.length > secondArray.length ? firstArray : secondArray;
  return longerArray;
}


// Write a function called arrayHasValue that takes in a value and an array.
// Return a boolean if the value exists in the array.

function arrayHasValue(searchKey, inputArray) {
  const validationResult = isValidArraySecondRules(inputArray);
  if (validationResult !== true) {
    return validationResult; // Returns Invalid Input
  }
  if (searchKey === '') {
    return 'Invalid Input';
  }
  return inputArray.includes(searchKey);
}

// Write a function called getLastIndexOf that takes an array and a value as parameters.
// Return the highest index number where that value was found (ie the furthest point it exists in the array)


function getLastIndexOf(inputArray, searchValue) {
  const validationResult = isValidArraySecondRules(inputArray);
  if (validationResult !== true) {
    return validationResult; // Returns 'Invalid Input'
  }
  
  if (inputArray.length === 0) {
    return -1; 
  }
  
  if (typeof(searchValue) !== 'number' || Number.isNaN(searchValue)) {
    return 'Invalid Input';
  }

  if (!Number.isInteger(searchValue)) {
    return 'Invalid Input';
  }
  
  let lastIndex = inputArray.lastIndexOf(searchValue);
  return lastIndex;
}


// Write a function called getNumberOfTimes that takes in an array and a string.
// Return a count of how many times the string exists in the array.

function getNumberOfTimes(inputArray, searchString) {
  const validationResult = isValidArraySecondRules(inputArray);
  if (validationResult !== true) {
    return validationResult; // Returns 'Invalid Input'
  }
  
  if (typeof(searchString) !== 'string') {
    return 'Invalid Input';
  }

  let count = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === searchString) {
      count++;
    }
  }
  return count;
}



// Write a function called findAboveFreezing that takes in an array
// Return a string literal that says "Temperature found was ---- degrees Farenheit."
// Did a quick search freezing is 32 degrees Farenheit


function findAboveFreezing(inputArray) {
  const validationResult = isValidArraySecondRules(inputArray);
  if (validationResult !== true) {
    return validationResult; // Returns 'Invalid Input'
  }

  let freezing = 32;
  let firstTemp

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > freezing) {
      firstTemp = inputArray[i];
      break
    }
  }
  return firstTemp;
}


// Write a function called returnString that takes an array as a parameter.
// Return the array as a string with an ampersand as the separator.


function returnString(inputArray) {
  if (inputArray == null) {
    return 'Invalid input';
  }

  const validationResult = isValidArraySecondRules(inputArray);
  if (validationResult !== true) {
    return validationResult; // Returns 'Invalid Input'
  }

  // Added for loop to handle unexpected element types -- This prevents the function from attempting to process elements that cannot be reliably converted to a string.
  for (let i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i] !== 'string' && typeof inputArray[i] !== 'number') {
      return 'Invalid input'; 
    }
  }

  return inputArray.join('&');
}




// Write a function called sortArrayBasedOnNumber that takes in an array and a number.
// Arrays must only contain one data type.
// If the number is odd, return the array sorted in descending order.
// If the number is even, return the array sorted in ascending order






// Write a function called concatArrays that takes in two arrays as parameters.
// Return the concatonation of the two arrays in order as long as neither holds a string as a value at any index.








// Write a function called popAndShift that takes in an array as a parameter.
// Example input versus output:
// Original input array: ["yelow", "green", "blue", "red"]
// Intended output array: ["red", "yellow", "green", "blue"]







// Write a function called oddValuesAtEvenIndex that takes an array as a parameter
// Return a new array that contains all the odd values of the original array that were located at an even index.







// Write a function called getUpperCase that takes in an array as a parameter.
// Translate all strings in the array to upper case.
// Return only an array of only the string values.








// Write a function called deleteAllOddValues that takes in an array.
// Use the delete() array method to delete any odd numbers from the array, including any values that can be coerced into numbers.
// Return the updated array.









// Write a function called getCatNumber that takes in an array of nested arrays as a first parameter, and a string of a cat's name a the second parameter.
// Return the age of the first cat found with that name.







// Stretch Goal #1:
// Write a function called getPaginationArray that takes in an array and a page number as parameters.
// Only five items from the array can be shown on a given web page when pagination is clicked. They must be grouped in their original order.
// Return a new array. At each index of the new array will be the five items shown for each page of pagination.







// Stretch Goal #2:
// Write a function called sparseToDense that takes in an array.
// If the array is sparse, return a dense version of the array.
// If the array is already dense, return the original array.







// Stretch Goal #3:
// Write a function called findAndConvertTemp that takes in an array of arrays, as well as a temperature as parameters. Both the array and the temperature are in Farenheit.
// Find the first temperature in the array that exceeds the input parameter.
// Return the string literal `Temperature was ----- degrees Celcius on date ------."




module.exports = {
  swapFirstAndLast,
  isValidArray,
  squareFirstIndex,
  getLongerArray,
  arrayHasValue,
  getLastIndexOf,
  getNumberOfTimes,
  findAboveFreezing,
  returnString,
};