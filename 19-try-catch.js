/*try nos permite ejecutar codifo propenso a fallar de una manera
segura*/

const gravedad = 9.8;
console.log(gravedad);

try{
    gravedad = 10.1;

} catch(e){
    console.log(e);
} finally {
    console.log('soy el finally');
}

console.log(gravedad);