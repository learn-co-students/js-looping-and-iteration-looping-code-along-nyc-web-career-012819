// Code your solutions in this file

function printBadges(array){
  for(let i = 0; i < array.length; i++){
      console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array;
}


// function testNeverFails() {
//   let i = 0;
//   while (Math.random() >= 0.5) {
//     i++;
//   }
//   return `You got ${i} tails in a row!`;
// }


function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}
