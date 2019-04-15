// Basic class: State + Behaviour
class Song {
  constructor (name) {
    this.name = name;
    this.played = 0;
  }

  play () {
    this.played += 1;
  }
}
const song = new Song('Teddy Picker');

// Basic composition: Objects referring other objects
class Album {
  constructor (name) {
    this.name = name;
    this.songs = [];
  }

  addSong (song) {
    this.songs.push(song);
  }

  listSongs () {
    console.log(`### ${this.name} ###`);
    this.songs.forEach((song, index) => {
      console.log(`${index +1} - ${song.name}`);
    });
  }
}
const album = new Album('Favorite Worst Nightmare');
const songNames = [
  'Brianstorm', 'Teddy Picker', 'D Is for Dangerous', 'Balaclava',
  'Fluorescent Adolescent', 'Only Ones Who Know', 'Do Me a Favour',
  'This House Is a Circus', 'If You Were There, Beware', 'The Bad Thing',
  'Old Yellow Bricks', '505'
]

songNames.forEach((songName) => { album.addSong(new Song(songName)); });
album.listSongs();


// Basic class structure
// Amazon Books
class Book {
  constructor (name, price) {
    this.name = name;
    this.price = price;
  }
}


const lotr1 = new Book("LOTR: The fellowship of the ring", 9.99);
const lotr2 = new Book("LOTR: The two towers", 9.99);
const lotr3 = new Book("LOTR: The return of the king", 13.99);

class Cart {
  constructor () {
    this.items = []
  }

  // Add product to cart
  addProduct (product) {

  }

  // product - quantity - price
  listProducts () {

  }

  // Cart total
  total () {

  }
}

// This should work
const cart = new Cart();
cart.addProduct(lotr1);
cart.addProduct(lotr2);
cart.addProduct(lotr3);
cart.listProducts();
console.log(cart.total());
