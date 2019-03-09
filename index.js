// Code your solutions in this file
// function printBadges (names) {
//   for (let i = 0; i < names.length; i++) {
//     console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
//   }
//
//   return names;
// }

function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);
  }
  return array;
}


printBadges(['Ada', 'Brendan', 'Ali']);

function tailsNeverFails() {
  let tails = 0;

  while(Math.random() >= 0.5) {
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}
