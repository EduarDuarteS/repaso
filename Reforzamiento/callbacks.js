setTimeout(function() {
  console.log('hola mundo');
}, 3000);


let getUsuarioById = (id, callback) => {
  let usuario = {
    nombre: 'Eduard',
    // id: id
    id
  }

  if (id == 22) {
    callback(`El usuario con id ${id} no existe`);
  } else {
    callback(null, usuario);
  }
}

getUsuarioById(21, (err, usuario) => {
  if (err) {
    console.log("Err:", err);
  } else
    console.log('usuarioDB: ', usuario);
});
