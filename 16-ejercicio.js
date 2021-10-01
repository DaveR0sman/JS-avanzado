const $btnDog = document.querySelector('#btnDog');
$btnDog.addEventListener('click', () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json()) .then(data =>{
        console.log(data);
        const imgDog = document.createElement('img');
        imgDog.src = data[0].url;
        document.body.append(imgDog);
    });
})