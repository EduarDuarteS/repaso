let empleados = [{
  id: 1,
  nombre: 'Eduard'
}, {
  id: 2,
  nombre: 'Laudice'
}, {
  id: 3,
  nombre: 'Eugenio'
}];

let salarios = [{
  id: 1,
  salario: 2500000
}, {
  id: 2,
  salario: 3200000
}];


let getEmpleado = (id, callback) => {
  let empleadoDB = empleados.find(empleado => empleado.id === id);
  // console.log(empleadoDB);
  if (!empleadoDB) {
    callback(`No existe empleado con el id ${id}`);
  } else {
    callback(null, empleadoDB);
  }

}


let getSalario = (empl, callback) => {
  let salarioDB = salarios.find((salario) => salario.id === empl.id);
  if (!salarioDB) {
    callback(`No se encontro salario para el usuario ${empl.nombre}`);
  } else {
    callback(null, salarioDB);
  }
}

getEmpleado(3, (err, empl) => {
      if (err) {
        console.log(err);
      } else {
        getSalario(empl, (err, salario) => {
          if (err) {
            console.log(`El salario de ${empl.nombre} es desconocido`);
          } else {
            console.log(`Es salario de ${empl.nombre} es de ${salario.salario}`);
          }
        });
      }
    });

    // getSalario({id:3, nombre:'pepito'},(err,salario)=>{
    //   if (err) {
    //     console.log(err);
    //   }else {
    //     console.log(salario);
    //   }
    // });
