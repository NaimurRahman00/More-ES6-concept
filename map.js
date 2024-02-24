/* You have an odd array (array with odd numbers). [1, 3, 5, 7, 9].
Now convert this array into an even array (array with even numbers). [2, 4, 6, 8, 10].
Do this using for loop and array.map() method.

Hints: add one to any odd number and it wil become an even number.
*/


// Using for loop
const oddNumber = [1, 3, 5, 7, 9];
const newEven = [];
for (let num of oddNumber) {
    const evenNumber = num + 1;
    newEven.push(evenNumber);
}
console.log(newEven);

// Using map method
const odd = [1, 3, 5, 7, 9];
const newArr = odd.map( n => n + 1);
console.log(newArr);
