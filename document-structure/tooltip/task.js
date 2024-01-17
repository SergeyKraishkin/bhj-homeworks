const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach((item) => {
        let tooltip = document.createElement ('div');
        tooltip.className ='tooltip';
        
        tooltip.innerText = item.title;
        item.after(tooltip);
    item.addEventListener('click', function(e) {
        e.preventDefault();
        let mouseCoordinate = item.getBoundingClientRect();
        let activeTooltip = document.querySelector('.tooltip_active');
        if (activeTooltip) activeTooltip.classList.remove('tooltip_active');

        item.nextElementSibling.classList.add ('tooltip_active');
        item.nextElementSibling.style.position = 'absolute';

        item.nextElementSibling.style.left = parseInt (mouseCoordinate.left) +'px';
        item.nextElementSibling.style.top = parseInt(mouseCoordinate.top) + 20 +'px';
     });

    });