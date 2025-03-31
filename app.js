console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
  return function (plusNumber) {
    return number + plusNumber;
  };
}

const plus15 = plus(15);
console.log(plus15(10)); // Outputs 25

// Exercise 2 Section
console.log("\nEXERCISE 2:\n==========\n");

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

// Print names using forEach
users.forEach((user) => console.log(user.name));

// Exercise 3 Section
console.log("\nEXERCISE 3:\n==========\n");

// Create new array with just names and scores using map
const namesAndScores = users.map((user) => ({
  name: user.name,
  score: user.score,
}));

console.log(namesAndScores);

// Exercise 4 Section
console.log("\nEXERCISE 4:\n==========\n");

// Create new array with only active users using filter
const activeUsers = users.filter((user) => user.isActive);

console.log(activeUsers);

// Exercise 5 Section
console.log("\nEXERCISE 5:\n==========\n");

// Sort users array by score in descending order
users.sort((a, b) => b.score - a.score);

console.log(users);

// Exercise 6 Section
console.log("\nEXERCISE 6:\n==========\n");

// Calculate sum of all scores using reduce
const totalScore = users.reduce((sum, user) => sum + user.score, 0);

// Calculate average score
const averageScore = totalScore / users.length;

console.log(`Total Score: ${totalScore}`);
console.log(`Average Score: ${averageScore}`);
