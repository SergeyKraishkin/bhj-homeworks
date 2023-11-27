let elem = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');

//let newspan = document.getElementsByClassName('clicker__status');
//newspan[0].innerHTML = newspan[0].innerHTML + "Скорость нажатия клика" + "< span id =" + "clicker__counter " + " > 0 < /span>";


elem.onclick = function() {

    counter.textContent = Number(counter.textContent) + 1;
    if (elem.width === 200) {
        elem.width *= 0.9;
        elem.hight *= 0.9;
    } else {
        elem.width /= 0.9;
        elem.hight /= 0.9;
    }

};