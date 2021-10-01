const $btnCat = document.querySelector('#btnCat');
const $divCats = document.querySelector('#cats');
$btnCat.addEventListener('click', () =>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json()) .then(data =>{
        console.log(data);
        conts [cat] = data;
        console.log(cat);
        const imgCat = document.createElement('img');
        imgCat.src = data[0].url;
        /*document.body.append(imgCat);*/
        $divCats.appendChild(imgCat);
    });
})