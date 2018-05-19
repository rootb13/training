// 0. Output
console.log("Pokemon Playground");

// 1. Values && Bindings
const pokedexNumber = 4;
const pokemonType = 'Fire';
let pokemonName = 'Charmander';
let pokemonLevel = 1;
let pokemonHP = 39;
let pokemonHeight = 0.61;
let isFainted = false;
let owner = undefined;
// Simple Output
console.log(pokemonName);
// String Interpolation
console.log(`#${pokedexNumber} - ${pokemonName}`);

// 2. Arrays - List of values
let currentMoves = ['Growl', 'Scratch'];
let potentialMoves = ['Ember', 'Smokescreen', 'Dragon Rage'];
const evolutionLevels = [16, 36];

// Charmanders first move:
console.log(currentMoves[0]); // => Growl
// Charmanders total moves:
console.log(currentMoves.length); // => 2;
// Charmander learns a new move
currentMoves.push(potentialMoves[0]);
console.log(currentMoves.length); // => 3

// 3. Objects - Contextual values

const pikachu = {
  number: 25,
  name: 'Pikachu',
  level: 1,
  hp: 35,
  height: 0.41,
  isFainted: false
};

// Accessing Values
console.log(pikachu['name']); // Pikachu
console.log(pikachu.name); // Pikachu

// Modifyng Values
pikachu.hp = 0;
pikachu.isFainted = true;

// Adding new Values
pikachu.owner = {
  name: 'Ash Kethum',
  town: 'Pallet'
}

// Footnotes:
// - Eliminate use of var - https://wesbos.com/let-vs-const/
