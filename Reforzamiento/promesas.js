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


let getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
      reject(`No existe el empleado con el id ${id}`);
    } else {
      resolve(empleadoDB);
      // resolve(`El empleado se llama ${empleadoDB.nombre}`)
    }
  });
};

let getSalario = (empleado) => {
  return new Promise((resolve, reject) => {
    let salarioDB = salarios.find((salario) => salario.id === empleado.id);
    if (!salarioDB) {
      reject(`No se conoce el salario de ${empleado.nombre}`);
    } else {
      resolve(`El salario de ${empleado.nombre} es ${salarioDB.salario}`)
    }
  });
}

getEmpleado(2).then(empleado => {
  getSalario(empleado).then(salario => {
    console.log(salario);
  }, (err) => {
    console.log(err);
  });
}, (err) => {
  console.log(err);
});
