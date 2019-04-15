const clientName = `Antonio`


const products = [
  { name: 'Kindle', price: 199 },
  { name: 'iPad', price: 299 },
  { name: 'Fire', price: 89 },
];



// 1. Create a Cart object
//    - It can hold "products"

// Carro que contenga productos

const cart = {
  name:clientName,
  articles: 10,
  list: [
    {product: `Skullcandy Hesh 2`, departament: `Electronics`, quantity:    1, price:   44.99},
    {product: `ASUS ROG Strix`, departament: `Computer`,style: `SCAR II`, size: `32Gb` , quantity:   1, price:   2349.99},
    {product: `Kindle`, departament:  `Kindle`,style: `Oasis E-reader`, size: `7"` , quantity:   2, price:   299.99},
    {product: `Samsung Galaxy`, departament:  `Electronics`,style: `S10+`, size: `512GB` , quantity:    3, price:   1149.99 },
  ]
};

console.log(cart.list)



//    - It can list all the products inside 
//      it in the format "name" - "price"

//Listar todos los productos con "Nombre y Precio"


//worldCupTeams.sort((a, b) => {
//  if (a.country > b.country) {
//    return 1;
//  }
//  if (a.country < b.country) {
//    return -2;
//  }
//  // a must be equal to b
//  return 0;
//});
//worldCupTeams.forEach((worldCupTeams, index) => {
//  console.log(`${index +1}-${worldCupTeams.country}`)
//});

console.log(`\nNombre del producto         Precio\n`)


cart.list.forEach((cart, index) => {
  console.log(`${index +1} ${cart.product}-${cart.price}`)
});

//Realiza la suma de tus articulos


