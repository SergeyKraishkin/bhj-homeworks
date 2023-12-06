const elem = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');


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