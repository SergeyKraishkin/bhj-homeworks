const reveal = [...document.querySelectorAll('.reveal')];

document.addEventListener('scroll', function() {
    reveal.forEach ((item) => {
        let revealTop = item.getBoundingClientRect().top;
        let revealBottom = item.getBoundingClientRect().bottom;
        if ((revealTop >0) && (revealBottom < window.innerHeight)) {
            item.classList.add('reveal_active');
        }
    });
    });