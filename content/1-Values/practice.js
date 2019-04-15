// Best representation in Javascript for:
// - The tax percentage for purchases in Mexico
// - A terms && conditions document
// - Houses in Game of thrones
// - The simplest to-do list you can think of
// - Teams in the world cup
// - The list of students in the class with name, age and favorite programming language.

//Ejercicio #6

//Lista de estudiantes

console.log("Escuela Profecional de Programacion")

console.log(`       `)

const alumnos = [
    { name: 'Joel', edad: 24 , lenguaje: 'Python'},
    { name: 'Adrian', edad: 25 , lenguaje: 'Javascript'},
    { name: 'Fernando', edad: 26 , lenguaje: 'Java'},
    { name: 'Juliana', edad: 27 , lenguaje: 'Goland'},
];


console.log(alumnos)


console.log(`       `)

//Ejercicio #1

//Calcular el impuesto


let valor = 200;

const precioIva = valor * 16 / 100;

console.log(`Tu precio es ${valor} y tu impuesto a pagar seria ${precioIva}`)


console.log(`       `)

//Ejercicio #3

//Naciones de Avatar

const fuego = {
    habilidad: `Fuego control`,
    habitantes: 220,
    jefe: `Señor del Fuego`,
    posicion: `Archipiélago de islas volcánicas`
};

const tierra = {
    habilidad: `Tierra control`,
    habitantes: 410,
    jefe: `Rey Tierra Wu`,
    posicion: `Ba Sing Se`
};


const aire = {
    habilidad: `Aire control`,
    habitantes: 320,
    jefe: `Consejo de Ancianos`,
    posicion: `Residencias de los Nómadas Aire`
};


const agua = {
    habilidad: `Agua control`,
    habitantes: 180,
    jefe: `Jefe Tribal`,
    posicion: `Polos Norte y Sur, Pantano Brumoso`
};


console.log(tierra)



console.log(`       `)


//Ejercicio #2

//Terminos y condiciones

const inicio = {
    terminos: 
`TÉRMINOS DE LICENCIA DEL SOFTWARE DE MICROSOFTMICROSOFT VISUAL STUDIO TEAM FOUNDATION SERVER 2017, VERSIÓN DE PRUEBA YEDICIÓN TEAM FOUNDATION SERVER VERSIÓN EXPRESSLos presentes términos de licencia constituyen un contrato entre Microsoft Corporation (o, en función de donde resida, una de sus filiales) y usted.Le rogamos que lo lea atentamente.Se aplican al software antes mencionado.Los términos también se aplican a cualquier servicio y actualización de Microsoft para el software, excepto en la medida que tengan términos diferentes.AL HACER USO DEL SOFTWARE, ESTARÁ ACEPTANDO ESTOS TÉRMINOS.SI NO LOS ACEPTA, NO UTILICE EL SOFTWARE.EN CAMBIO, DEVUÉLVALO AL DISTRIBUIDOR PARA OBTENER UN REEMBOLSO O CRÉDITO.Si no puede obtener un reembolso, póngase en contacto con Microsoft o la filial de Microsoft en su país para obtener información sobre las directivas de reembolso de Microsoft.Consulte http://www.microsoft.com/worldwide.En Estados Unidos y Canadá, llame a (800) MICROSOFT o consulte www.microsoft.com/info/nareturns.htm`,

    condiciones:
`USO DE LA VERSIÓN DE PRUEBA.Podrá utilizar la versión de prueba en los dispositivos únicamente con fines de evaluación interna.Por ejemplo, los derechos de prueba no incluyen el derecho de poner en uso de producción ninguno de los componentes de la versión de prueba.Usted puede utilizar la versión de prueba por noventa (90) días.La versión de prueba le presentará opciones de conversión sesenta (60) días después de la instalación de esta, y luego cada vez que un usuario inicie sesión en la consola de administración del servidor. Puede convertir, en cualquier momento, sus derechos de prueba en la versión Express (sin costo) o en los derechos de uso plenos descritos a continuación al adquirir una licencia de uso completo de Microsoft o de uno de sus distribuidores.No podrá acceder a los datos utilizados con la versión de prueba cuando deje de ejecutarse`,

    requerimietos:
`d.Licencias Adicionales Requeridas.Para utilizar estas características en el software:Administración de pruebasun usuario se debe licenciar para uno de los siguientes:Visual Studio Test Professional con MSDN, Visual Studio Enterprise con MSDN, Visual Studio Enterprise (suscripción mensual), Visual Studio Enterprise (suscripción anual),Plataformas MSDN, oUn plan de pago de Visual Studio Team Services Test Manager.Administración de Paquetesun usuario se debe licenciar para uno de los siguientes:Visual Studio Enterprise con MSDN, Visual Studio Enterprise (suscripción mensual), Visual Studio Enterprise (suscripción anual), o Un plan de pago de Administración de Paquetes de Visual Studio Team Services.Implementaciones Simultáneas con el Administrador de Lanzamiento (se incluye 1 por servidor)`,

    licencia:
`TÉRMINOS DE LICENCIA DE USO COMPLETO PARA EL SOFTWARE:Si adquiere el software, se aplicarán los siguientes términos de uso completo.1.INFORMACIÓN GENERAL.a.Software.El software incluye: software de servidor ysoftware adicional que solo se pueda utilizar con el software de servidor.b.Modelo de licencia.La licencia del software se concede de acuerdo con las siguientes condiciones:el número de instancias del software de servidor que ejecute y el número de dispositivos y usuarios con acceso a instancias del software de servidor.c.Términos de Licencia para Uso con el Servidor Virtual y Otras Tecnologías Parecidas. i.Instancia.Usted crea una “instancia”del software al ejecutar el procedimiento de instalación del software o al duplicar una instancia existente.Cuando se hace referencia al software en el presente contrato, se incluyen las “instancias”del software.` ,

    contratacion:
` El presente contrato (incluida la garantía que aparece más abajo) y los términos aplicables a complementos, actualizaciones, servicios basados en Internet y servicios de soporte técnico que utilice constituyen el contratocompleto para el software y los servicios de soporte técnico`
}


console.log(inicio)


console.log(`       `)

//Ejercicio #4

//Hacer una lista de despensa

const despensa = 1;
let secos = [`nuez`, `cacahuate`,`pistache`,`pasas`];
let lacteos = [`leche`,`queso`,`crema`];
let enlatados = [`chiles`,`atun`];

console.log(`Lista de despensa`)

console.log(`Aticulos por comprar:

1.-${secos}
2-${lacteos}
3-${enlatados}`)

//En este punto se realizo la eliminacion de pasas en secos
//y el ingreso de aceitunas a enlatados

secos.pop(`pasas`);

enlatados.push(`aceitunas`)

console.log(`
/////////////////////////////////////

`)

console.log(`Lista de despensa`)

console.log(`Aticulos por comprar:

1.-${secos}
2-${lacteos}
3-${enlatados}`)


console.log(`       `)

//Desarrollo complejo de un impuesto

let base = 15
let altura = 30

function areatriangulo(base, altura) {
    return base * altura / 2
};


console.log(`El area de un triangulo con base ${base} y altura ${altura} es de ${areatriangulo(base, altura)}`)


//El desarrollo complejo de una impuesto con objetos

const ace = {
    brand : `Ardidas`,
    price : 1800,
    model : `Ace 1 pro`
}

function taxItem(ace) {
    return ace.price * 16 /100
};

console.log(`                               `)

console.log(`El impuesto de tus ${ace.model} es 
de ${taxItem(ace)} y tu total de ${taxItem(ace) + ace.price}`)


//Realizar un listado de generos de pelicula y 
//posteriormente mostrasr las peliculas que 
//unicamente pueden ver los mayores de edad


