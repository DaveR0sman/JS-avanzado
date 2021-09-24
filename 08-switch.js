/*estructura de control de flujo, nos ayuda a tomar
decisiones mediante la evaluacion de la condicion
const edad = parseInt(prompt("Ingresa tu edad"));
let mensaje = "";

switch (edad) {
    case 18:
        mensaje = "Acaba de cumplir la mayoria de edad"
        break;
    case 25:
        mensaje = "ya eres una dulto";
        break;
    case 70:
        mensaje = "eres un anciano"
        break;
}
document.write(`<p>${mensaje}</p>`);*/
const nombre = prompt("Ingresa tu nombre");

switch (nombre) {
    case 'carlos':
        mensaje = "Hola eres admin"
        break;
    case 'David':
        mensaje = "hola eres usuario normal"
        break;
        default:
            mensaje = "no tienes permisos para usar el sistema"
            break;
}

document.write(`<p>${mensaje}</p>`)