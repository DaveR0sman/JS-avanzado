/*Ciclo while
nos permite repetir codigo mientras una condicion sea verdadera

let num1 = parseInt(prompt('INGRESA UN NUMERO'));
const num_secreto = 23;
let intentos = 1;
while (num1 !== num_secreto) {
    alert("Noa divinaste el numero, intenta denuevo");
    console.log(`intento: ${intentos}`);
    intentos++;
    num1 = parseInt(prompt("Ingresa un numero"));

}
alert("Felicidades, encontraste el numero.");*/

let num1 = parseInt(prompt('Ingresa un numero'));

do {
    document.write(`<p>El numero introducido es: ${num1}</p>`)
    num1 = parseInt(prompt('ingresa un numero'));

}
while(num1 > 5);