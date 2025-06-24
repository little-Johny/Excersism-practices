//Theme: Rest and Spread

/* Instructions
Elyse, magician-to-be, continues her training.
She has a deck of cards she wants to manipulate.

To make things easier, she usually only starts with cards numbered 2 to 10, 
although some of the tricks may involve additional (face) cards.
*/ 

// Task 1:
/* 
Your friend has been keeping track of each wagon identifier (ID), but they are never sure how many wagons the system
is going to have to process at any given time. It would be much easier for the rest of the logistics program to have
this data packaged into a unified array.

Implement a function getListOfWagons that accepts an arbitrary number of wagon IDs which are the IDs of each wagon.
Each ID will be a positive integer. The function should then return the given IDs as a single array. */

/**
 * Return each wagon's id in form of an array.
 *
 * @param {...numbers} ids
 * @returns {number[]} wagon ids
 */
export function getListOfWagons(...wagons) {
  return wagons;
}

console.log(getListOfWagons(1,2,3,4))

// Task 2:

/* 
At this point, you are starting to get a feel for the data and how it's used in the logistics program. 
The ID system always assigns the locomotive an ID of 1, with the remainder of the wagons in the train 
assigned a randomly chosen ID greater than 1.

Your friend had to connect two new wagons to the train and forgot to update the system! 
Now, the first two wagons in the train array have to be moved to the end, or everything will be out of order.

Linus would be really grateful to you for fixing their mistakes.

Implement a function fixListOfWagons that accepts an array of the id of each wagon. 
It returns an array where the 2 first elements repositioned to the end of the array so 
that the locomotive can be in the front.
*/

/**
 * Reorder the array of wagons by moving the first 2 wagons to the end of the array.
 *
 * @param {Iterable<number>} ids
 * @returns {number[]} reordered list of wagons
 */
export function fixListOfWagons(ids) {
  const [first, second, ...rest] = ids;
  return [...rest, first, second]
}

console.log(fixListOfWagons([1,2,3,4]));

// Task 3:
/* 
Uh-oh. some wagons seem to have gone missing.

Fortunately, your friend just found another array which appears to contain the missing wagon IDs, 
and would like you to add them into the main wagon ID array. 
All they can remember is that the missing values should be placed directly after the designated locomotive.

Given this new information, write a function called correctListOfWagons 
that takes two arrays which have the IDs of each wagon as the arguments. 
The wagon IDs of the second array should be added into the first array directly after the locomotive (ID 1).
*/
/**
 * Fixes the array of wagons by inserting an array of wagons after the first element in eachWagonsID.
 *
 * @param {Iterable<number>} ids
 * @param {Iterable<number>} missingWagons
 * @returns {number[]} corrected list of wagons
 */
export function correctListOfWagons(ids, missingWagons) {
  const [locomotive, ...rest ] = ids;
  return [ locomotive, ...missingWagons, ...rest];
}

console.log(correctListOfWagons([1,2,3], [22,33,11]));


// Task 4:
/* 
Now that all the wagon data is correct, your friend would like you to update the systems routing information. 
Initial routing information has been constructed as an object, and you friend would like you to update it 
with the additions provided. Every route requires slightly different information, so your friend would really 
prefer a generic solution.

Implement a function extendRouteInformation that accepts two objects. 
The first object contains which cities the train route moves between.

The second object contains other routing details such as train speed or length. 
The function should return a consolidated object with all routing information.
*/

/**
 * Extend route information by adding another object
 *
 * @param {Record<string, string>} information
 * @param {Record<string, string>} additional
 * @returns {Record<string, string>} extended route information
 */
export function extendRouteInformation(information, additional) {
  return { information, ...additional };
}

const route = { from: 'Berlin', to: 'Hamburg' };
const moreRouteInformation = { length: '100', speed: '50' };

console.log(extendRouteInformation(route, moreRouteInformation));

// Task 5:
/* 
Your friend has noticed that they don't need the arrival time in the routing information. 
Therefore your friend would like you to separate the arrival time from the routing information.

Implement a function separateTimeOfArrival that accepts an object with the routing information. 
The function should return an array where the first element of the array 
is the arrival time and the second element is an object with the routing information without arrival time.
*/
/**
 * Separate arrival time from the route information object
 *
 * @param {Record<string, string>} information
 * @returns {[string, Record<string, string>]} array with arrival time and object without arrival time
 */
export function separateTimeOfArrival(information) {
  const {  timeOfArrival, ...rest } = information;
  return [ timeOfArrival, { ...rest }];
}

const routeInformation = {
  from: 'Berlin',
  to: 'Hamburg',
  length: '100',
  timeOfArrival: '10:10',
};
console.log(separateTimeOfArrival(routeInformation));
