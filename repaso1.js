// COSNTANTE
const NOMBRE = 'Marcos';
// VARIABLE DE SCOPE
let edad = 38;
// VARIABLE GLOBAL
var pais = 'Argentina';

console.log(`${NOMBRE} tiene ${edad} y vive en ${pais}`);

edad = 20;
console.log(`${NOMBRE} tiene ${edad} y vive en ${pais}`);


const persona = {
    nombre : 'Paula',
    sexo : 'Femenino',
    edad : 30,

    hobbies: [
        {
            nombreH: 'Gimnasio',
            aniosPracticado : 1,
        },

        {
            nombreH: 'Running',
            aniosPracticado: 2,
        },
    ],

    deportes: ['Tenis', 'padle'],
}

var personaHobbies = persona.hobbies;
console.log( personaHobbies );

const listaHobbies = () =>
 personaHobbies.forEach( hobbie => {
    console.log( hobbie.nombreH );
});


listaHobbies(persona);



const verificarEdad = (edad) => {
    let verif = false;

    if (edad < 18) {
        verif = false;
    } else {
        verif = true;
    }
}