// Read File System - Example of async
import fs from 'fs';
// What files are in the support folder ?
fs.readdir(`${__dirname}/support/`, (err, files) => {
  files.forEach((file) => {
    require(`${__dirname}/support/${file}`);
  });
});

// Request Http with "request" (without promises)
import request from 'request';

//Get request for a website
request.get('https://www.google.com', (error, response) => {
  // Uncomment to see the html in google.com
  // console.log(response);
});

//Get request for an API
const reservamosEndpoint = 'https://www.reservamos.mx/api/v1/cities.json?prefetch=true';
request.get(reservamosEndpoint, (error, response) => {
  const cities = JSON.parse(response.body);
  console.log(`Respuesta tiene ${cities.length} ciudades`);
});

// Promises
// Fetch - Create an http Request
import rp from 'request-promise';

// Using then
const requestPromise = rp.get(reservamosEndpoint);
requestPromise.then((response) => {
  const cities = JSON.parse(response);
  console.log(`Respuesta tiene ${cities.length} ciudades`)
});

// Creating a custom promise
const promise = new Promise((resolve) => {
  console.log("Some expensive operation here");
  setTimeout(() => resolve(), 3000);
});
promise.then(() => console.log("Operation done!"));

// Functions and promises
function reservamosCityNames () {
  const reservamosCitiesPromise = rp.get(reservamosEndpoint);
  return reservamosCitiesPromise.then((response) => {
    return JSON.parse(response);
  }).then((cities) => {
    return cities.map((city) => {
      return city.name;
    });
  });
}

// Using simpler functions
reservamosCityNames().then((cityNames) => {
  console.log(cityNames);
});

// Refactor function :) 
