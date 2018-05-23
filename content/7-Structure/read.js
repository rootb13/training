// Defining an app structure

// import Files or Classes
import Band from './support/models/Band';
import Song from './support/models/Song';
// import specific objects or functions
import { bandsData } from './support/config/seed';

// Just a simple object
console.log(bandsData);

// Populate bands from band data
const bands = bandsData.map((bandData) => {
  const songs = bandData.songs.map((songData) => {
    return new Song(songData.name, songData.played);
  });
  return new Band(bandData.name, bandData.bio, songs);
})
console.log(bands);

// Print all the band bio summaries
bands.forEach((band) => {
  console.log(`${band.name} - ${band.bioSummary()}`);
});
