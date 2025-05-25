// Theme: Type Conversion


/* Instructions
Your friend Kojo is a big fan of numbers. He has a small website called 'fun-with-numbers'. 
Kojo is not that good at programming so he asked you for help.

You will build two helper functions for new number games on Kojos' website 
and a third one to validate some input the user can enter.
*/

// Firts Point:
/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */

export function twoSum(array1, array2) {
    // Convert arrays in strings, after in numbers and after and then they add up 
    const number1 = Number(array1.map(n => String(n)).join(''));
    const number2 = Number(array2.map(n => String(n)).join(''));
    return number1 + number2;
};
console.log(twoSum([1, 2, 3], [0, 7]));

// Second point
/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
    const normal = Array.from(String(value), Number);
    const invested = [...normal].reverse();
    if (normal.join('') === invested.join('')) {
        return true
    }
    return false
}
console.log(luckyNumber(1441));

// Third point:
/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
    if ( input === null || input === undefined || input === '') {
        return 'Required field';
    }
    const number = Number(input);
    if(isNaN(number) || number === 0) {
        return 'Must be a number besides 0'
    }
    return ''
}
console.log(errorMessage('abc'));