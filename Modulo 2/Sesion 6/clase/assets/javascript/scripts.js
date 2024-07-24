alert('Hola mundito!!');
console.log('Hello World!!');

console.log(document.querySelector('h1'));


var num1 = 5;
var num2 = 10;
var nombre = 'Carlos';
var sumar = num1 + num2;

alert(sumar);
console.log(sumar);

console.log('Segun '+ nombre + ' el resultado de la suma es '+ sumar);

console.log('Metodo 2');

var num3, num4, resultado;

num3 = +prompt('ingresa el numero 1');
num4 = +prompt('ingresa el numero 2');
num5 = +prompt('Ingresa otro numero');
num6 = +prompt('... y otro');

resultado = num3 + num4;

console.log("El resultado con el metodo 2 es: " + resultado );

function suma(numero1, numero2){
    return numero1 + numero2;
};

alert('Metodo 3, ahora con funcion')

console.log('Los numeros ingresados son: ');
console.log('Numero 1= '+num1);
console.log('Numero 2= '+num2);
console.log('Numero 3= '+num3);
console.log('Numero 4= '+num4);
console.log('Numero 5= '+num5);
console.log('Numero 6= '+num6);

console.log('sumo numero 1 y 2 ');
console.log('suma: ' + suma(num1, num2));
console.log('sumo numero 1 y 3 ');
console.log('suma: ' + suma(num1, num3));
console.log('sumo numero 1 y 4 ');
console.log('suma: ' + suma(num1, num4));
console.log('sumo numero 1 y 5 ');
console.log('suma: ' + suma(num1, num5));
console.log('sumo numero 1 y 6 ');
console.log('suma: ' + suma(num1, num6));
