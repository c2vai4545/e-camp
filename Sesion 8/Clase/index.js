var array = [1, 2, 3, 'si', 'no'];
var variable = 0;

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(array[i]);
}

while (array.length < 10) {
    array.push(variable);
    variable ++;
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(array[i]);
}

// para crear objetos:
var clase = [
    {
    id: 0,
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
    ramo: 'Matematicas'
},
    {
    id: 1,
    nombre: 'Pepe',
    apellido: 'Perez',
    edad: 24,
    ramo: 'Fisica'
},
    {
    id: 2,
    nombre: 'Marta',
    apellido: 'Kent',
    edad: 64,
    ramo: 'Literatura'
},
    {
    id: 3,
    nombre: 'Marta',
    apellido: 'Waine',
    edad: 67,
    ramo: 'Matematicas'
},
];
console.table(clase);

for (const alumno of clase) {
    document.writeln(alumno.nombre) 
    document.writeln(alumno.apellido)
    document.writeln(alumno.edad)
    document.writeln(alumno.ramo)
}