/*
Async Await
*/

let equivaGetNombre = () => {
  return new Promise(function(resolve, reject) {
    resolve('Eduard')
  });
}
let equivaGetNombreCorto = () => {
  return new Promise((resolve, reject) => resolve('Eduard'));
}
console.log(equivaGetNombre());
console.log(equivaGetNombreCorto());


//Lanzando errores en async
let getNombre = async _ => {
  throw new Error('No existe el nombre en la DB');
  return 'Eduard';
}

getNombre()
  .then(nombre => console.log(nombre))
  .catch(e => console.log('Error ASYNC: ', e));


//Utilizando el await para sincronizar una promesas
let getApellido = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(()=>{
      resolve('Duarte')
    },3000)
  });
}
//Al utilizar el await se frena la ejecución hasta que se resuelve la promesa
//Esto frena al ejecución se debe prestar atención al usar el await
let writeApellido = async _ => {
  let apellido = await getApellido();
  console.log(`El apellido es: ${apellido}`);
}

writeApellido();
