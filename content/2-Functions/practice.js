// CeroUno.io
// - 1. Send an acceptance e-mail to all students
// - 2. What are all the languages that students are interested in ?
// - 3. What is the average age of all the students ?

function sendEmail(student) {
  console.log(`Dear ${student.name}, you are accepted at CeroUno.io`);
  console.log(`Email sent to: ${student.email}\n`);
}

const students = [
  { name: 'Juan', age: 18, email: 'juan@cerouno.io', interest: 'ruby' },
  { name: 'Elizabeth', age: 22, email: 'elizabeth@cerouno.io', interest: 'js' },
  { name: 'Erika', age: 17, email: 'erika@cerouno.io', interest: 'go' },
  { name: 'Pedro', age: 30, email: 'pedro@cerounio.io', interest: 'elixir' },
  { name: 'Fernanda', age: 25, email: 'fernanda@cerouno.io', interest: 'java' }
];

//Genera un bucle
students.forEach(sendEmail)



//Entrega los lenguajes favoritos de cada estudiante
const interes = students.map((estu) => {
  return estu.interest  
});


//Se crea la plantilla en la cual se mostraran los datos del arreglo
function favlen(student){
  console.log(`A ${student.name} le interesa el lenguaje ${student.interest}.`)
}

console.log(`          \n             `)

//Ejecuta la plantilla con la informacion del arreglo
//students.forEach(favlen)



//Sumar la edad de cada estudiante dividida entre todos

const edadSuma = students.reduce((total, s) => {
  return total + s.age;
}, 0);


const promedio = `El promedio de edad es: ${edadSuma / students.length}`


console.log(promedio)

console.log(`          \n           `)

const textos = students.map((students) => 
` A ${students.name} le gusta el lenguaje ${students.interest}`)


//console.log(promedio)

textos.forEach(console.log)
