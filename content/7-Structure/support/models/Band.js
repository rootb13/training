import { shortenString } from '../utils';

export default class Band {

  constructor (name, bio, songs = []) {
    this.name = name;
    this.bio = bio;
    this.songs = songs;
  }

  bioSummary () {
    return shortenString(this.bio);
  }

}
