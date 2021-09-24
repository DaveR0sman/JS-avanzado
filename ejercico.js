var num1 = parseInt(prompt('Ingrese el primer numero:'));
let suma = 0;
let intentos = 0;
        while(num1 >= 0) {
            suma = suma + num1;
            intentos++
            num1 = prompt('introduce un numero ');
            
        } 

        prom= suma/intentos;
        document.write("Numeros introducidos " +intentos);
        document.write("<br> la suma es " +suma);
        document.write("el promedio es " +prom);