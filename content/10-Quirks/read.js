// Some ES6 Quirks

// Copying Arrays
const redFruits = ['apple', 'strawberry', 'cherry'];
const bigFruits = ['watermelon', 'melon', 'papaya'];

const fruits = [...redFruits, ...bigFruits];
console.log(fruits);

// Cloning Arrays
const otherFruits = [...fruits];
fruits.pop();
console.log(fruits);
console.log(otherFruits);

// Destructuring Array parameters
function logPosition ([latitude, longitude]) {
  console.log('Latitude:', latitude);
  console.log('Longitude:', longitude);
}
const position = [25.6694468,-100.3105119];
logPosition(position);

// Copying Object Properties
const student = {
  interests: 'technology',
  languages: ['javascript']
};
const jorge = {
  ...student,
  name: 'Jorge'
};
console.log(jorge);

// Destructuring Object Parameters
function makeRequest ({ url, payload, method }) {
  console.log("Simulate Request to:", url);
}
// Makes method calls more readable in most cases
makeRequest({
  url: 'https://www.reservamos.mx',
  payload: { message: 'hello!' },
  method: 'POST'
});

// Function shortcuts

// Very useful short version
const sendSMS = ({number, message}) => {
  console.log("SMS:", number, message);
};
sendSMS({number: 1111111111, message: "Hi!"});

// Recommended only in some cases
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

// Like simple Filter, Find calls
const firstNegative = [4, 3, -1, 0, 1].find((number) => number < 0);
console.log(firstNegative);
