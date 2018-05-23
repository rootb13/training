// Functions

// 1. Side effect functions
function speak () {
  console.log('Char!');
}
speak(); // => Char!

// Functions with arguments
function logPokemonInfo (pokedexNumber, pokemonName, pokemonType) {
  console.log(`#${pokedexNumber} - ${pokemonName} (${pokemonType})`);
}
logPokemonInfo(4, 'Charmander', 'Fire') // => #4 - Charmander (Fire)

// 2. Pure functions

// With return values
function levelUp (currentLevel) {
  return currentLevel + 1;
}
console.log(levelUp(1)); // => 2

function criticalHit (currentHealth) {
  return currentHealth * 0.9;
}
console.log(criticalHit(100)); // => 90.0

// 3. Functions as first class Citizens

// 3.1 Functions as values - Difference: Footnote 1
const hasFainted = function (currentHealth) {
  return currentHealth > 0;
};

// Short notation - Footnote 2
const isWaterType = (pokemon) => {
  return pokemon.type === 'water';
};

// 3.2 Anonymous functions

// Setup
const pokemonTeam = [
  { name: 'Charmander', type: 'fire', hp: 100, lvl: 2, fainted: false },
  { name: 'Wartortle', type: 'water', hp: 1000, lvl: 32, fainted: true },
  { name: 'Bulbasaur', type: 'plant', hp: 80, lvl: 1, fainted: false }
];

// Use of an anonymous function - Footnote 3
const fireTypePokemon = pokemonTeam.filter((pokemon) => {
  return pokemon.type === 'fire';
});

// 3.3 Functions as parameters
const waterTypePokemon = pokemonTeam.filter(isWaterType);

// 4. Useful functions

// 4.1 Map
// Get a list of my types of pokemon
const pokemonTypes = pokemonTeam.map((pokemon) => {
  return pokemon.type;
});

// Make all pokemon Ash's property
const ashsPokemont = pokemonTeam.map((pokemon) => {
  pokemon.owner = 'Ash';
  return pokemon;
});

// Give rare candy to all my pokemon
const levelUpPokemon = pokemonTeam.map((pokemon) => {
  pokemon.lvl = pokemon.lvl + 1;
  return pokemon;
});

// 4.2 Reduce
// Get a combined HP of all my Pokemon
const ashsHP = pokemonTeam.reduce((total, pokemon) => {
  total + pokemon.hp;
});

// Has any of ashs pokemons fainted ?
const ashHasFaintedPokemon = pokemonTeam.reduce((fainted, pokemon) => {
  fainted || pokemon.fainted;
}, false);

// 4.3 forEach
// Log all pokemon names to console
pokemonTeam.forEach((pokemon) => {
  console.log(pokemon.name);
});

// Footnotes:
// * Hoisting: https://codeburst.io/javascript-what-is-hoisting-dfa84512dd28
// * Functions short notations: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// * Never use ==: https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a
