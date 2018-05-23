export default class Song {
  constructor (name) {
    this.name = name;
    this.played = 0;
    this.favorite = 0;
  }

  play () {
    this.played += 1;
  }

  favorite () {
    this.favorite += 1;
  }
}
