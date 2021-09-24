let num1 = parseInt(prompt('INGRESA UN NUMERO'));
const num_secreto = 23;
let intentos = 1;
while (num1 !== num_secreto) {
    alert("ingresa un numero");
    console.log(`intento: ${intentos+intentos}`);
    intentos++;
    num1 = parseInt(prompt("Ingresa un numero"));

}
alert("Felicidades, encontraste el numero.");