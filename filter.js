/*
You have an array of object: const instructor = [{Object}]
Your task is to display the instructor names that has the position senior using filter.
*/

const instructor = [
    { name: 'Tamim', age: 25, position: 'Senior' },
    { name: 'Mahfuj', age: 24, position: 'Junior' },
    { name: 'Tasfiq', age: 26, position: 'Senior' },
];

const seniorOfficer = instructor.filter(n => n.position === 'Senior').map(n => n.name);

console.log(seniorOfficer);

