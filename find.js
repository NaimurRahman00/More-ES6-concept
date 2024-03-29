/*
You are given an array say: [33, 50, 79, 78, 90, 101, 30].
Now return/get all the elements which are divisible by 10 using array.filter() method.

Now do the same task of question 2. But do this using array.find() method. Then compare the output of question 2 & 3.
*/

const array = [33, 50, 79, 78, 90, 101, 30];

const filter = array.filter(n => n % 10 === 0);
const find = array.find(n => n % 10 === 0);

console.log('filter: ',filter,'find: ', find);