const $btn = document.querySelector('#btn');
const $list = document.querySelector('#list');

$btn.addEventListener('click', () =>{
    const listItem = document.createElement('li');
    listItem.textContent = 'Nuevo elemento';
    $list.appendChild(listItem);
});