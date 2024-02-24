/*
const people = [
    {name: "Zukta", age: 20},
    {name: "Tahlil", age: 15},
    {name: "Ayesha", age: 22},
];

Follow above array of objects. So, you have 3 objects as array element. Can you find out the total sum from here?
20 + 15 + 22 = 57 . The output will be 57.

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait!! Wait!!! Do the same task using array.reduce() method.
*/
const peoples = [
    { name: "Zukta", age: 20 },
    { name: "Tahlil", age: 15 },
    { name: "Ayesha", age: 22 },
];

// Using loop
let totalAge = 0;
for (let people of peoples) {
    totalAge += people.age;
}
console.log(totalAge);

// Using reduce() method
const ageTotal = peoples.map(n => n.age).reduce((p, n) => p + n, 0);
console.log(ageTotal)