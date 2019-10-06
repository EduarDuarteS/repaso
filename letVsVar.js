//Let tiene scope local y solo se puede inicializar una vez
//Var es global, puede inicializarse varias veces

let nombre = 'Eduard';
let nomComplete = 'Eduard Duarte sepulveda';
let apellido = 'Duarte';

console.log("mi nombre es: " + nombre);
console.log(`nombre completo ${ nomComplete }`)

// Usando Templates literales

console.log(`Hola ${getNombre()}`);

function getNombre() {
  return `${nombre} ${apellido}`;
}
