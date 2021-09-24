var num1 = parseInt(prompt('Ingrese el primer numero:'));
var num2 = parseInt(prompt('Ingrese el segundo numero:'));
        if (num1 > num2) {
            
            const suma = num1 + num2;
            const diferencia = num1 - num2;
            document.write('La suma es: ' + suma);
            document.write('<br>');
            document.write('La diferencia es: ' + diferencia);
        } else {
            const producto = num1 * num2;
            const division = num1 / num2;
            document.write('El producto es ' + producto);
            document.write('<br>');
            document.write('La división del primero respecto al segundo es: ' + division);
        }
