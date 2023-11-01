/*scripts ECMaScripts isomórfico 
 Estos son los comentarios google v8
Java es un lenguaje interpretado 

Como defino una variable?
Darle un identificador y un nombre 


Siemrpre debo declarar las variables con _ , $ o  sin nada

$name
_name 

let numero = 1;

Tipos de variables: Las mismas de cualquier lenguaje de programacion

string -  let nombre = 'Natalia';  Aqui si toma diferente mayusculas de minusculas 
bool - let miVariable = true;
array - miVariable = [0,1,23,9]; / tambien puede ser string

let se utiliza para declarar variables gobales y generales, para decirle que lo que viene es una variable 

let suma = num1+num2

pi = 3.1416

const pi  (siempre va a tener este valor constante cada que la utilice)
console.log(${num1})  //quiero que me muestre este numero 

console.log(`el numero 1 ${num1} es muy bonito`)




*/

let a = 5;
let b = 10;
console.log(`la suma de a + b es  ${a+b} `)



/*
Operadores 
Aritmeticos: me permiten hacer operaciones matematicas 

Logicos: And && or || no !

comparacion: igual == identico === (mira hasta el tipo de dato) != diferente !== (totalmente diferente)
< > <= >=
console.info()
console.warn()  - mensaje como si fuera una warning 

console.error()  - mensaje como si fuera un error 
console.clear() v crtl+l  - limpiar la consola 

Tarea, haver una función que haga la suma de dos numeros 

*/

let num1 =  parseInt(prompt("Digite el primer numero"))
let num2 =  parseInt(prompt("Digite el segundo numero"))

console.log(`la suma de los numeros es  ${num1+num2} `)