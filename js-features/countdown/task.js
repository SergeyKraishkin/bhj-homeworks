const elem = document.getElementById('timer');

const intervalId = setInterval(function() {
    elem.innerText -= 1;
    //debugger;
    if (elem.innerText === "0") {
        alert("Вы победили в конкурсе!");
        clearInterval(intervalId);
    }
}, 1000);