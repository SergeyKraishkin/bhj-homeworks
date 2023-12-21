
const value = document.querySelector('.dropdown__value');
value.addEventListener('click', function (e){
    e.preventDefault();
    if (document.querySelector('.dropdown__list').classList.contains('dropdown__list_active'))  {
    close(e);
    }
    else {
        open(e);
    }
}
    );
let listMenu = document.querySelectorAll('.dropdown__item');
listMenu.forEach((item) => {
    item.onclick = close;
});

function open (e){
    e.preventDefault();
    document.querySelector('.dropdown__list').classList.add('dropdown__list_active')  
}
function close (e){
    e.preventDefault();
    document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')  
}