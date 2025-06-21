//Theme: Array & Object Destructuring

/* Instructions
Elyse, magician-to-be, continues her training.
She has a deck of cards she wants to manipulate.

To make things easier, she usually only starts with cards numbered 2 to 10, 
although some of the tricks may involve additional (face) cards.
*/ 

//Task 1:
/* Elyse will summon the first card in the deck without using the array[index], 
.at(index), or .shift(). It's just like magic. */

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard([first]) {
    return first;
};

console.log(getFirstCard([1,2]));


//Task 2:
/* Elyse performs sleight of hand and summons the second card in the deck without 
using the array[index] or .shift().
*/
/**
 * Get the second card in the given deck
*
* @param {Card[]} deck
*
* @returns {Card} the second card in the deck
*/
export function getSecondCard([first, second]) {
    return second;
}
console.log(getSecondCard([1,2]));

//Task 3:
/* Elyse will make the two cards of the deck switch places. She doesn't need to call a single function. */


/**
 * Switch the position of the two cards
 *
 * @param {[Card, Card]} deck
 *
 * @returns {[Card, Card]} new deck with the 2 cards swapped
 */
export function swapTwoCards([first, second]) {
    return [second, first];
}

console.log(swapTwoCards([2, 1]));


//Task 4:
/* 
In order to perform some more sleight of hand, Elyse takes three cards
and quickly moves the top card to the back, making the middle card the first card
and the old bottom card the middle card.
She doesn't need to call a single function.

 */
/**
 * Rotate (shift) the position of the three cards (by one place)
 *
 * @param {[Card, Card, Card]} deck
 *
 * @returns {[Card, Card, Card]} new deck with the 3 cards shifted by one position
 */
export function shiftThreeCardsAround([first, second, third]) {
    return [second, third, first];
}

console.log(shiftThreeCardsAround([1,2,3]));

//Task 5:
/* 
Elyse will separate the deck into two piles. 
She then asks the observer to pick one of the two piles, which we'll name chosen. 
The disregarded pile is no longer relevant, which she makes disappear. 
She doesn't need to call a single function.
 */

/**
 * Grab the chosen pile from the available piles
 *
 * @param {{ chosen: Card[], disregarded: Card[] }} piles
 *
 * @returns {Card[]} the pile named chosen
 */
export function pickNamedPile({chosen}) {
  // 🚨 Do NOT use piles.chosen or piles.disregarded.
    return chosen;
}
console.log(pickNamedPile({choosen: [1, 2], disregarded: ['a', 'b']}));


//Task 6:
/* 
Unfortunately the observer keeps picking the "wrong" pile, 
but with some clever fast magic, Elyse renames the chosen pile to be disregarded and the disregarded pile 
to be the chosen pile. 
She doesn't need to call a single function.

 */
/**
 * Swap the chosen pile for the disregarded pile and the disregarded pile for the chosen pile
 *
 * @param {{ chosen: Card[], disregarded: Card[] }} piles
 * @returns {{ chosen: Card[], disregarded: Card[] }} new piles where the two piles are swapped
 */
export function swapNamedPile({chosen: disregarded, disregarded: chosen}) {
  // 🪄 Don't break the magic.
  // 🚨 Do NOT use piles.chosen or piles.disregarded.
  // 🚨 Do NOT touch the next line or Elyse will accidentally reveal the trick.
    return { chosen, disregarded };
}


