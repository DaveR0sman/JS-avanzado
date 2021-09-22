var numA = parseInt(prompt("Introduzca el primer número"));
var numB = parseInt(prompt("Introduzca el segundo número mayor que el primero"));

document.write("Los números impares que existen entre " + numA + " y " + numB + " son:");


if (numA > numB) {
    mayor = numA,
        menor = numB
} else {
    mayor = numB,
        menor = numA

} 
for (i = menor; i < mayor; i++) {
    if (i % 2 != 0) {
        document.write("<br>" +i);
    }
}



