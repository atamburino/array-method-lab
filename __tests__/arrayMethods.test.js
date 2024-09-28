const {
    isValidArray,
    swapFirstAndLast,
    squareFirstIndex,
    getLongerArray,
    arrayHasValue,
    getLastIndexOf,
    getNumberOfTimes,
    findAboveFreezing,
    returnString,
    sortArrayBasedOnNumber,
    concatArrays,
    popAndShift,
    oddValuesAtEvenIndex,
    // getUpperCase,
    // deleteAllOddValues,
    // getCatNumber,
    // getPaginationArray,
    // sparseToDense,
    // findAndConvertTemp
} = require('../src/arrayMethods');

describe('JavaScript Array Methods Tests', () => {

        test('should return "Invalid input: array is empty" for an empty array', () => {
          expect(isValidArray([])).toBe("Invalid input: array is empty");
        });

        test('should return "Invalid input" for an array with only one element', () => {
          expect(isValidArray([1])).toBe("Invalid input");
        });

        test('should return "Invalid input" for non-array inputs', () => {
          expect(isValidArray("not an array")).toBe("Invalid input");
          expect(isValidArray(123)).toBe("Invalid input");
          expect(isValidArray({ key: "value" })).toBe("Invalid input");
          expect(isValidArray(null)).toBe("Invalid input");
          expect(isValidArray(undefined)).toBe("Invalid input");
        });

        test("should return true for valid arrays with 2 or more elements", () => {
          expect(isValidArray([1, 2])).toBe(true);
          expect(isValidArray(["a", "b", "c"])).toBe(true);
          expect(isValidArray([true, false, true])).toBe(true);
        });

    // Test for swapFirstAndLast
    test('swapFirstAndLast should swap the first and last elements of the array', () => {
        expect(swapFirstAndLast([1, 2, 3])).toEqual([3, 2, 1]);
        expect(swapFirstAndLast(['a', 'b'])).toEqual(['b', 'a']);
        expect(swapFirstAndLast([1])).toBe('Invalid input');
        expect(swapFirstAndLast('not an array')).toBe('Invalid input');
    });

    // Test for squareFirstIndex
    test('squareFirstIndex should return the square of the first element in the array', () => {
        expect(squareFirstIndex([4, 2, 3])).toBe(16);
        expect(squareFirstIndex(['a', 2])).toBe('Invalid input');
        expect(squareFirstIndex([])).toBe('Invalid input');
        expect(squareFirstIndex([true])).toBe('Invalid input');
    });

    // Test for getLongerArray
    test('getLongerArray should return the longer array', () => {
        expect(getLongerArray([1, 2], [1, 2, 3])).toEqual([1, 2, 3]);
        expect(getLongerArray([5, 4, 3], [1])).toEqual([5, 4, 3]);
        expect(getLongerArray([1], [])).toEqual([1]);
        expect(getLongerArray('not an array', [1])).toBe('Invalid input');
    });

    // Test for arrayHasValue
    test('arrayHasValue should return true if value exists in the array', () => {
        expect(arrayHasValue(2, [1, 2, 3])).toBe(true);
        expect(arrayHasValue(4, [1, 2, 3])).toBe(false);
        expect(arrayHasValue(2, 'not an array')).toBe('Invalid input');
    });

    // Test for getLastIndexOf
    test('getLastIndexOf should return the last index of a value', () => {
        expect(getLastIndexOf([1, 2, 3, 2], 2)).toBe(3);
        expect(getLastIndexOf([1, 2, 3], 4)).toBe(-1);
        expect(getLastIndexOf('not an array', 2)).toBe('Invalid input');
    });

    // Test for getNumberOfTimes
    test('getNumberOfTimes should return the count of how many times a string appears', () => {
        expect(getNumberOfTimes(['cat', 'dog', 'cat'], 'cat')).toBe(2);
        expect(getNumberOfTimes(['cat', 'dog', 'bird'], 'fish')).toBe(0);
        expect(getNumberOfTimes([1, 2, 3], 'cat')).toBe(0);
        expect(getNumberOfTimes('not an array', 'cat')).toBe('Invalid input');
    });

    // Test for findAboveFreezing
    test('findAboveFreezing should return the first temperature above freezing', () => {
        expect(findAboveFreezing([30, 32, 35, 40])).toBe(35);
        expect(findAboveFreezing([20, 10, 5])).toBe(undefined);
        expect(findAboveFreezing('not an array')).toBe('Invalid input');
    });

    // Test for returnString
    test('returnString should return the array as a string with an ampersand as the separator', () => {
        expect(returnString([1, 2, 3])).toBe('1&2&3');
        expect(returnString(['a', 'b', 'c'])).toBe('a&b&c');
        expect(returnString([])).toBe('');
        expect(returnString('Potato')).toBe('Invalid input');
    });


    // Test for sortArrayBasedOnNumber
    test('sortArrayBasedOnNumber should return the array sorted in ascending order if the number is even or descending order if the number is odd', () => {
        expect(sortArrayBasedOnNumber([3, 1, 4, 1, 5], 2)).toEqual([1, 1, 3, 4, 5]);
        expect(sortArrayBasedOnNumber([3, 1, 4, 1, 5], 3)).toEqual([5, 4, 3, 1, 1]);
        expect(sortArrayBasedOnNumber([3, "a", 4, "b"], 3)).toBe('Invalid input');
        expect(sortArrayBasedOnNumber(["b", "a", "c"], 0)).toEqual(["a", "b", "c"]);
        expect(sortArrayBasedOnNumber(["a", "c", "b"], 1)).toEqual(["c", "b", "a"]);
        expect(sortArrayBasedOnNumber("not an array", 2)).toBe('Invalid input');
        expect(sortArrayBasedOnNumber([10, 2, 8, 4], 4)).toEqual([2, 4, 8, 10]);
        expect(sortArrayBasedOnNumber([10, 2, 8, 4], 7)).toEqual([10, 8, 4, 2]);
    });


    // Test for concatArrays
    test('concatArrays should concatenate two arrays as long as they do not contain strings', () => {
        expect(concatArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
        expect(concatArrays([1, '2'], [3, 4])).toBe('Cannot concatenate arrays with strings');
        expect(concatArrays('Potato', [3, 4])).toBe('Invalid input');
    });

    // Test for popAndShift
    test('popAndShift should pop the last element and shift it to the front', () => {
        expect(popAndShift(['yellow', '5', 6, 'blue'])).toEqual(['blue', 'yellow', '5', 6]);
        expect(popAndShift([1])).toEqual([1]);
        expect(popAndShift('not an array')).toBe('Invalid input');
    });

    // Test for oddValuesAtEvenIndex
    test('oddValuesAtEvenIndex should return odd values at even indices', () => {
        expect(oddValuesAtEvenIndex([7, 2, 5, 11])).toEqual([7, 5]);
        expect(oddValuesAtEvenIndex([9, 1, 6, 7, 7, 2, 13])).toEqual([9, 7, 13]);
        expect(oddValuesAtEvenIndex([1, 2, "cat", 3])).toEqual([1]);
        expect(oddValuesAtEvenIndex([5])).toEqual([5]);
        expect(oddValuesAtEvenIndex('not an array')).toBe('Invalid input');
    });

    // // Test for getUpperCase
    // test('getUpperCase should return all strings in uppercase', () => {
    //     expect(getUpperCase(['hello', 'world'])).toEqual(['HELLO', 'WORLD']);
    //     expect(getUpperCase([1, 2, 3])).toEqual([]);
    //     expect(getUpperCase('not an array')).toBe('Invalid input');
    // });

    // // Test for deleteAllOddValues
    // test('deleteAllOddValues should delete all odd numbers from the array', () => {
    //     let arr = [1, 2, 3, 4];
    //     deleteAllOddValues(arr);
    //     expect(arr).toEqual([, 2, , 4]);
    //     expect(deleteAllOddValues('not an array')).toBe('Invalid input');
    // });

    // // Test for sortArrayBasedOnNumber
    // test('sortArrayBasedOnNumber should return the array sorted in ascending order if the number is even or descending order if the number is odd', () => {
        


    // })

    // // Test for getCatNumber
    // test('getCatNumber should return the age of the first cat with the given name', () => {
    //     let cats = [["Tigger", 8], ["Nancy", 6]];
    //     expect(getCatNumber(cats, "Tigger")).toBe(8);
    //     expect(getCatNumber(cats, "Nancy")).toBe(6);
    //     expect(getCatNumber(cats, "Whiskers")).toBe('Cat not found');
    //     expect(getCatNumber('not an array', 'Tigger')).toBe('Invalid input');
    // });

    // // Test for getPaginationArray
    // test('getPaginationArray should return the correct page of items (5 per page)', () => {
    //     let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //     expect(getPaginationArray(items, 1)).toEqual([1, 2, 3, 4, 5]);
    //     expect(getPaginationArray(items, 2)).toEqual([6, 7, 8, 9, 10]);
    //     expect(getPaginationArray(items, 3)).toBe('Page not found');
    //     expect(getPaginationArray('not an array', 1)).toBe('Invalid input');
    // });

    // // Test for sparseToDense
    // test('sparseToDense should convert sparse arrays to dense arrays', () => {
    //     let sparseArray = [1, , 3, , 5];
    //     let sparseArray2 = [1, , 2, null, 5];
    //     expect(sparseToDense(sparseArray)).toEqual([1, 3, 5]);
    //     expect(sparseToDense([1, null, 3])).toEqual([1, null, 3]);
    //     expect(sparseToDense(sparseArray2)).toEqual([1, 2, null, 5])
    //     expect(sparseToDense('not an array')).toBe('Invalid input');
    // });

    // // Test for findAndConvertTemp
    // test('findAndConvertTemp should find the first temperature above the given value and convert it to Celsius', () => {
    //     let temperatures = [
    //         [75, "2023-09-21"],
    //         [82, "2023-09-22"],
    //         [90, "2023-09-23"]
    //     ];
    //     expect(findAndConvertTemp(temperatures, 80)).toBe('Temperature was 27.78 degrees Celsius on date 2023-09-22.');
    //     expect(findAndConvertTemp(temperatures, 100)).toBe('No temperature exceeded the input value.');
    //     expect(findAndConvertTemp('not an array', 80)).toBe('Invalid input');
    // });

});
