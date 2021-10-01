//se recomienda utilziar el $ para indicar que hacemos referencia a un elemento html
const $btn = document.querySelector("#btn");

$btn.addEventListener("click", ()=>{
    console.log("Me presionaste");
});

const $inpText = document.querySelector("#text");

$inpText.addEventListener("keydown" ,()=>{ // Para este tipo de funciones entran dos parametros ("palabra reservada del tipo de evente que va a escuchar" , ()=>{})  el segundo parametro es una funcion anonima de flecha
    console.log("Excribiste algo");
});

//para seber que esta escribiendo el usuario
$inpText.addEventListener("keydown" ,(e)=>{ // Para este tipo de funciones entran dos parametros ("palabra reservada del tipo de evente que va a escuchar" , ()=>{})  el segundo parametro es una funcion anonima de flecha
    console.log(e.target.value);
});

