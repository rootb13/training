// Anonymous Functions
const trainers = [
  { name: 'Ash', pokemon: 5, wins: 240, defeats: 5 },
  { name: 'Brock', pokemon: 3, wins: 50, defeats: 40 },
  { name: 'Misty', pokemon: 2, wins: 120, defeats: 30},
  { name: 'Jessie', pokemon: 1, wins: 0, defeats: 100 }
];

// Pure functions

// Filter. All trainers with more than two pokemon
const packedTrainers = trainers.filter((trainer) => {
  return trainer.pokemon > 2;
});
console.log(packedTrainers);

// Find. First trainer with no wins.
const winlessTrainer = trainers.find((trainer) => {
  return trainer.wins === 0;
});
console.log(winlessTrainer);

// Slice. Get first two trainers
const firstTwo = trainers.slice(0, 2);
console.log(firstTwo);

// Methods that modify the array itselt

// Sort. Trainers by defeats
const trainersByDefeat = trainers.slice().sort((trainerA, trainerB) => {
  return trainerB.defeats >= trainerA.defeats;
});
console.log(trainersByDefeat);

// Shift. Get and remove first trainer from the list
const firstTrainer = trainers.slice().shift();
console.log(firstTrainer, trainers);

// pop. Get last trainer in the list.
const lastTrainer = trainers.slice().pop();
console.log(lastTrainer, trainers);

// Strategy - Easy problem first
// Get a list of each trainers success ratio: Success / Total Battles

// 1. Solve it for 1 trainer
const successRatio = function (trainer) {
  const totalBattles = trainer.wins + trainer.defeats;
  return trainer.wins / totalBattles;
};

// 2. Apply it to every trainer
const successRatioList = trainers.map(successRatio);
console.log(successRatioList);

// Footnotes:
// * Array Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// * Cloning an array doc: https://www.briangonzalez.org/post/copying-array-javascript
