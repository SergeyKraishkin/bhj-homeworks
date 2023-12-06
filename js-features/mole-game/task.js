const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let counterDead = 0;
let counterLost = 0;
const allHole = document.querySelectorAll(".hole")
let notDoubleClick = true;

setInterval(function() {
    notDoubleClick = true;
}, 800);

for (holeIndex = 0; holeIndex < allHole.length; holeIndex++) {
    allHole[holeIndex].addEventListener('click', checkClick);
}

function checkClick() {

    if (this.classList.contains('hole_has-mole') && notDoubleClick) {
        counterDead++;
        dead.textContent = counterDead;
        notDoubleClick = false;

    } else if (notDoubleClick) {
        counterLost++;
        lost.textContent = counterLost;
        notDoubleClick = false;
    }
    if (counterDead === 10) {
        alert('Победа, давайте попробуем еще раз');
        dead.textContent = 0;
        counterDead = 0;
        lost.textContent = 0;
        counterLost = 0;
    }
    if (counterLost === 5) {
        alert("Вы проиграли, попробуйте еще раз");
        dead.textContent = 0;
        counterDead = 0;
        lost.textContent = 0;
        counterLost = 0;
    }
};