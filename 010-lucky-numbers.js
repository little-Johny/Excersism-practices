// Theme: Type Conversion


/* Instructions
Your friend Kojo is a big fan of numbers. He has a small website called 'fun-with-numbers'. 
Kojo is not that good at programming so he asked you for help.

You will build two helper functions for new number games on Kojos' website 
and a third one to validate some input the user can enter.
*/

// Firts Point:  Calculate the sum for the numbers on the slot machine
/* One of the games on Kojos' website looks like a slot machine that shows 
two groups of wheels with digits on them. Each group of digits represents a number. 
For the game mechanics, Kojo needs to know the sum of those two numbers.

Write a function twoSum that accepts two arrays as parameters. 
Each array consists of one or more numbers between 0 and 9. 
The function should interpret each array as a number and return the sum of those two numbers.

twoSum([1, 2, 3], [0, 7]) => 130

- [1, 2, 3] represents 123 and [0, 7] represents 7.
123 + 7 = 130 
  */

export function twoSum(array1, array2) {
    // Convert arrays in strings, after in numbers and after and then they add up 
    const number1 = Number(array1.map(n => String(n)).join(''));
    const number2 = Number(array2.map(n => String(n)).join(''));
    return number1 + number2;
};
console.log(twoSum([1, 2, 3], [0, 7]));

