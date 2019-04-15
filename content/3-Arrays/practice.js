
const worldCupTeams = [
  {country:"France",midAge:26,participations:15,aboardPercentage:69.6,market:916.65,midMarketValue:39.85},
  {country:"Spain",midAge:28.5,participations:15,aboardPercentage:26.1,market:909,midMarketValue:39.52},
  {country:"Germany",midAge:26.8,participations:19,aboardPercentage:33.3,market:897.75,midMarketValue:33.25},
  {country:"Brazil",midAge:28.6,participations:21,aboardPercentage:87,market:814.5,midMarketValue:35.41},
  {country:"Belgium",midAge:27.6,participations:13,aboardPercentage:92.9,market:675.68,midMarketValue:24.13},
  {country:"England",midAge:26,participations:15,aboardPercentage:0,market:648,midMarketValue:28.17},
  {country:"Argentina",midAge:29.2,participations:17,aboardPercentage:87,market:621.9,midMarketValue:27.04},
  {country:"Portugal",midAge:28.3,participations:7,aboardPercentage:73.9,market:435.56,midMarketValue:18.94},
  {country:"Uruguay",midAge:27.8,participations:13,aboardPercentage:92.3,market:347.4,midMarketValue:13.36},
  {country:"Croatia",midAge:27.7,participations:5,aboardPercentage:91.7,market:321.03,midMarketValue:13.38},
  {country:"Colombia",midAge:28,participations:6,aboardPercentage:82.9,market:277.65,midMarketValue:7.93},
  {country:"Poland",midAge:27.4,participations:8,aboardPercentage:75,market:251.73,midMarketValue:7.87},
  {country:"Senegal",midAge:27.1,participations:2,aboardPercentage:100,market:248.81,midMarketValue:10.82},
  {country:"Serbia",midAge:26.4,participations:2,aboardPercentage:88.9,market:234.77,midMarketValue:8.69},
  {country:"Denmark",midAge:27.5,participations:5,aboardPercentage:85.2,market:225.59,midMarketValue:8.35},
  {country:"Switzerland",midAge:26.6,participations:11,aboardPercentage:96.2,market:200.03,midMarketValue:7.69},
  {country:"Mexico",midAge:28.9,participations:16,aboardPercentage:53.6,market:147.96,midMarketValue:5.28},
  {country:"Russia",midAge:28.4,participations:4,aboardPercentage:10.7,market:134.57,midMarketValue:4.81},
  {country:"Egypt",midAge:28.4,participations:3,aboardPercentage:62.1,market:116.98,midMarketValue:4.03},
  {country:"Nigeria",midAge:25.5,participations:6,aboardPercentage:90,market:116.33,midMarketValue:3.88},
  {country:"Morocco",midAge:26.9,participations:5,aboardPercentage:88.5,market:109.67,midMarketValue:4.22},
  {country:"Sweden",midAge:28.2,participations:12,aboardPercentage:100,market:104.81,midMarketValue:4.56},
  {country:"South Korea",midAge:27.8,participations:10,aboardPercentage:50,market:69.53,midMarketValue:2.48},
  {country:"Japan",midAge:27.9,participations:6,aboardPercentage:65.4,market:65.88,midMarketValue:2.53},
  {country:"Iceland",midAge:28.6,participations:1,aboardPercentage:91.3,market:61.2,midMarketValue:2.66},
  {country:"Tunisia",midAge:27.1,participations:5,aboardPercentage:72.4,market:49.3,midMarketValue:1.7},
  {country:"Australia",midAge:28.1,participations:5,aboardPercentage:80.8,market:43.29,midMarketValue:1.67},
  {country:"Costa Rica",midAge:29.2,participations:5,aboardPercentage:63,market:40.12,midMarketValue:1.49},
  {country:"Iran",midAge:27,participations:5,aboardPercentage:58.3,market:38.66,midMarketValue:1.61},
  {country:"Peru",midAge:26.7,participations:5,aboardPercentage:79.2,market:31.37,midMarketValue:1.31},
  {country:"Saudi Arabia",midAge:28.6,participations:5,aboardPercentage:10.7,market:20.25,midMarketValue:723},
  {country:"Panama",midAge:28.2,participations:1,aboardPercentage:77.1,market:10.53,midMarketValue:301}
];

console.log(`La respuesta es    \n   `)




// 0. Get a list of all the team names

console.log(`Ejercicio #1

Realizar una lista con el nombre
de todos los equipos \n`)
//  [

//Mejora del codigo apartir de la linea 72

//function equipos(worldCupTeams){
//  console.log(worldCupTeams.country)
//}


//worldCupTeams.forEach(equipos)


//    ]

//for (var i = 1; i < 3; i++)
console.log(`Los equipos de este año son:`)

//console.log(i)

//Listado de todos los equipos i = i++

//Usamos funcion anonima

//worldCupTeams.forEach((worldCupTeams, index) => { 
//  console.log(`${index +1}.-${worldCupTeams.country}`)
//})




console.log(`            \n               `)


worldCupTeams.sort((a, b) => {
  if (a.country > b.country) {
    return 1;
  }
  if (a.country < b.country) {
    return -2;
  }
  // a must be equal to b
  return 0;
});
worldCupTeams.forEach((worldCupTeams, index) => {
  console.log(`${index +1}-${worldCupTeams.country}`)
});






// 1. What is the youngest team ?

console.log(`\n

El equipo mas joven es: `)


const equipoJoven = worldCupTeams.sort((x,y) => {
  return x.midAge - y.midAge;
})


console.log( `Primer pais con la edad mas joven: \n`, equipoJoven[0],`\n`)
console.log( `Ultimo pais con la edad mas alta \n`, equipoJoven[equipoJoven.length-1])

console.log(`           \n                `)



// 2. What is the team that participated the most ?

//Cual es el equipo con mas participaciones


console.log(`¿Cuál es el equipo que más participó? `)


const participantes = worldCupTeams.sort((x,y) => {
  return y.participations - x.participations;
})


console.log({ Mayor: participantes[0]},`\n`)
console.log({ Menor: participantes[participantes.length-1]})

console.log(`           \n                `)




// 3. What is the average market value of all teams ?


//Cual es el marcador promedio de todos los equipos 
// tomar market de la copa del mundo

const sumaMarcador = worldCupTeams.reduce((total, w) => {
  return total + w.market
},0 );

const avr = sumaMarcador / worldCupTeams.length

console.log(`El valor de mercado promedio es de`, avr)


console.log(`                \n                 `)


// 4. Get a list of all the teams sorted from most participations to least.

//Obtener una lista de mayor a menor de los participantes


console.log(`¿Cuál es el equipo que más participó? \n`)


const participantes002 = worldCupTeams.sort((x,y) => {
  return y.participations > x.participations;
})


console.log(`Los  \n`,participantes002)


console.log(`           \n                `)



// Sample:
// {
//   country:"France",
//   midAge:26,
//   participations:15,
//   aboardPercentage:69.6,
//   market:916.65,
//   midMarketValue:39.85
// }






console.log(`            \n               `)



//Realizar un listado de generos de pelicula y 
//posteriormente mostrasr las peliculas que       
//unicamente pueden ver los mayores de edad

const peliculas = [
  { name: `Eso (El payaso asesino)`, genero: `Terror`, clasificacion: `B15`, rangoEdad: 15 },
  { name: `Alien, el octavo pasajero`, genero: `Terror`, clasificacion: `C`, rangoEdad: 18 },
  { name: `Amanecer de los muertos`, genero: `Terror`, clasificacion: `C`, rangoEdad: 18 },
  { name: `Avatar`, genero: `Ciencia ficcion`, clasificacion: `B15`, rangoEdad: 15 },
  { name: `Interestelar`, genero: `Ciencia ficcion`, clasificacion: `A`, rangoEdad: 6 },
  { name: `Transformers`, genero: `Ciencia ficcion`, clasificacion: `B15`, rangoEdad: 15 },
  { name: `Las crónicas de Spiderwick`, genero: `Infantil`, clasificacion: `AA`, rangoEdad: 0 },
  { name: `Up: Una aventura de altura`, genero: `Infantil`, clasificacion: `AA`, rangoEdad: 0 },
  { name: `WALL-E`, genero: `Infantil`, clasificacion: `AA`, rangoEdad: 0 },
  { name: `Avengers: Juego Final `, genero: `Accion`, clasificacion: `B15`, rangoEdad: 0 },
  { name: `Misión imposible: repercusión`, genero: `Accion`, clasificacion: `B15`, rangoEdad: 15 },
  { name: `Rápidos y Furiosos 8`, genero: `Accion`, clasificacion: `B15`, rangoEdad: 15 },
]

//AA  Todos los públicos pueden ver, aunque esta clasificación va dirigida a un público más pre-escolar; comprensible para niños de todas las edades.

//A  Mayores de 6 años. pueden ingresar infantes menores de 6 acompañados de un adulto .

//B  Para mayores de 12 años, menores requieren supervisión. Clasificados programas con temáticas más interesantes para mayores de 12 años o poco atractivas para menores de 12 años.

//B15  Para mayores de 15 años, menores requieren supervisión.

//C  Para adultos, apto para mayores de 18 años. Los cines requieren tarjeta de identificación (en México, la credencial de votar del INE) para su acceso.

//D  Exclusivamente adultos. Los cines no aceptan menores de 18 años. Esta clasificación es casi igual a la anterior, con la diferencia de que es aplicada a contenido con lenguaje soez sin censura, adicciones explícitas, mayor desnudez o violencia extrema.


const aptasMayores18 = peliculas.filter((peliculas) => {
  return peliculas.rangoEdad >= 18 
});

console.log(`Las peliculas para adultos son: \n`, aptasMayores18)


const aptasmenores = peliculas.filter((peliculas) => {
  return peliculas.rangoEdad <= 18 
});

console.log(`\n Las peliculas para chicos son: \n`, aptasmenores)

const filtroAA = peliculas.filter((peliculas) => {
  return peliculas.clasificacion === `AA`
});


console.log(`\nLas peliculas con la clasificacion AA son:\n`, filtroAA )


console.log(`                      \n                       `)





var frutas = ['xoconoztle', 'nuez', 'yuca', `arandano`, `cacahuate`];
console.log(frutas.sort())



//worldCupTeams.forEach((worldCupTeams, index) => { 
//  console.log(`${index +1}.-${worldCupTeams.country.sort}`)
//})


//worldCupTeams.forEach(worldCupTeams.country)

//console.log(organizado)


function equipos(worldCupTeams){
  console.log(worldCupTeams.country)
}


