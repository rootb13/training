// Useful Objects
const charmander = {
  name: 'Charmander',
  hp: 300,
  lvl: 1,
  vulnerabilities: ['water', 'rock'],
  attacks: [
    { name: 'Scratch', type: 'normal', damage: 40 },
    { name: 'Ember', type: 'fire', damage: 40 }
  ]
};

console.log(charmander);

// Objects with behaviour
const charmeleon = {
  name: 'Charmeleon',
  hp: 200,
  lvl: 16,
  vulnerabilities: ['water', 'rock'],
  attacks: [
    { name: 'Scratch', type: 'normal', damage: 40 },
    { name: 'Ember', type: 'fire', damage: 40 }
  ],

  attack (attackName) {
    const attack = this.attacks.find((attack) => {
      return attack.name === attackName;
    });
    console.log(`${this.name} used ${attack.name}!`);
    return attack;
  },

};
charmeleon.attack("Scratch");

// Objects with complex behaviour
const charizard = {
  name: 'Charizard',
  hp: 300,
  lvl: 32,
  vulnerabilities: ['water', 'rock'],
  attacks: [
    { name: 'Scratch', type: 'normal', damage: 40 },
    { name: 'Ember', type: 'fire', damage: 40 }
  ],

  attack (attackName) {
    const attack = this.attacks.find((attack) => {
      return attack.name === attackName;
    });
    console.log(`${this.name} used ${attack.name}!`);
    return attack;
  },

  // In class:
  // 1. Add vulnerability damage * 10
  // 2. Faint When HP < 0
  defend (attack) {
    this.hp -= attack.damage;
    console.log(`${this.name} received ${attack.name}. Current HP: ${this.hp}`);
  }
}

const tackle = { name: 'Tackle', type: 'normal', damage: 40 };
const hidroPump = { name: 'Tackle', type: 'water', damage: 100 };
charizard.defend(tackle);
charizard.defend(hidroPump);
