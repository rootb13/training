// Control Structures
// If - Else
const attack = { name: 'Water Gun', type: "Water", damage: 20 };

function attackCharmander (attack) {
  if (attack.type === "Water") {
    return attack.damage * 2;
  } else {
    return attack.damage;
  }
}
console.log(attackCharmander(attack));

// Ternary Operator
function smartAssAttackCharmander (attack) {
  return attack.type === "Water" ? attack.damage * 2 : atack.damage;
}
console.log(smartAssAttackCharmander(attack));

// Switch
function attackPikachu (attack) {
  switch (attack.type) {
    case 'Grass': return attack.damage * 0.5;
    case 'Water': return attack.damage * 2;
    default: return attack.damage;
  }
}
console.log(attackPikachu(attack));

// While
const charmander = { name: "Charmander", hp: 100 };
const punch = { name: "Punch", damage: 10 };
function attackRush (pokemon, attack) {
  while (pokemon.hp > 0) {
    console.log(`${pokemon.name} received ${attack.name} attack!`)
    pokemon.hp = pokemon.hp - attack.damage;
    console.log(`${pokemon.hp} HP Left!`);
  }
}
attackRush(charmander, punch);

// For
const pikachu = { name: "Pikachu", hp: 100 };
const kick = { name: "Kick", damage: 5 };
function attackNTimes (pokemon, attack, n) {
  for(let i = 0; i < n; i++) {
    console.log(`${pokemon.name} received ${attack.name} attack!`)
    pokemon.hp = pokemon.hp - attack.damage;
    console.log(`${pokemon.hp} HP Left!`);
  }
}
attackNTimes(pikachu, kick, 3);
