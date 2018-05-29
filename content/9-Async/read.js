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
  console.log(response);
});

//Get request for an API
const reservamosEndpoint = 'https://www.reservamos.mx/api/v1/cities.json?prefetch=true';
request.get(reservamosEndpoint, (error, response) => {
  console.log(response);
});
// Concept of a promise - Usefulness
// Fetch - Create an http Request
// setTimeout - Use a promise to exemplify database, report calculations
