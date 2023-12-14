
const value = document.querySelector('.dropdown__value');
value.addEventListener('click',open );
let listMenu = document.querySelectorAll('.dropdown__item');
listMenu.forEach((item) =>{
    item.onclick = close();
});

function open (){
    document.querySelector('.dropdown__list').classList.add('dropdown__list_active')  
}
function close (){
    document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')  
}