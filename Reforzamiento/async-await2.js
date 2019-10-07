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
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
      throw new Error (`No existe el empleado con el id ${id}`);
    } else {
      return (empleadoDB);
    }
};

let getSalario = async (empleado) => {
    let salarioDB = salarios.find((salario) => salario.id === empleado.id);
    if (!salarioDB) {
      throw new Error (`No se conoce el salario de ${empleado.nombre}`);
    } else {
      return (salarioDB);
    }
}

let getInformation = async (id) => {
  let empleado = await getEmpleado(id);
  let salario = await getSalario(empleado);
  return (`${empleado.nombre} tiene un salario de ${salario.salario}`);
};

getInformation(6)
  .then(mensaje => console.log(mensaje))
  .catch(err => console.log(`${err}`));
