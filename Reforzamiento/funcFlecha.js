function sumar(a,b){
  return a+b;
}

let sumarFlecha = (a,b) =>{
  return a+b;
}

//si el retorno se puede escribir en una sola línea
let sumFlechaLess = (a,b) => a+b;

let saludar = _ => "hola Mundo";
let salNombre = nombre => `hola ${nombre}`
let salNombreP = (nombre) => `hola ${nombre}`

console.log('sumar',sumar(4,5));
console.log('sumarFlecha',sumarFlecha(8,2));
console.log('sumFlechaLess',sumFlechaLess(2,3));
console.log('saludar: ', saludar());
console.log('salNombre: ',salNombreP("Eduard"));
