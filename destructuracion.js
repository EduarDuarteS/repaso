// Destructuración

let SuperMan = {
  alias: 'SuperMan',
  nombre: 'Clark',
  apellido: 'Kend',
  poder: 'volar',
  getDescripcion: function(){
  // getDescripcion(){
    return `soy ${this.alias} y puedo ${this.poder} `
  }
}

console.log(SuperMan.getDescripcion());

// let alias = SuperMan.alias;
//     nombre = SuperMan.nombre; //no se pueden volver a declarar
//     apellido = SuperMan.apellido; //no se pueden volver a declarar
// console.log(alias,nombre,apellido);

let {alias,nombre:nomb,apellido} = SuperMan;
console.log(alias,nomb,apellido);
