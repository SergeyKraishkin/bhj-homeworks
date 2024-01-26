const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach((item) => {
      
    item.addEventListener('click', function(e) {
        e.preventDefault();

        if (!item.nextElementSibling.classList.contains('tooltip')) {
            let tooltip = document.createElement ('div');
            tooltip.className ='tooltip';
            tooltip.innerText = item.title;
            item.after(tooltip);
        }
      
        if (item.nextElementSibling.classList.contains('tooltip_active')) {
            item.nextElementSibling.classList.remove('tooltip_active');
        }
        else {
        let activeTooltip = document.querySelector('.tooltip_active'); //remove all tooltip_active
        if (activeTooltip) {
                 activeTooltip.classList.remove('tooltip_active');
        }
        let mouseCoordinate = item.getBoundingClientRect();
        item.nextElementSibling.style.left = parseInt (mouseCoordinate.left) +'px';
        item.nextElementSibling.style.top = parseInt(mouseCoordinate.top) + 20 +'px';
        item.nextElementSibling.classList.add ('tooltip_active');
        item.nextElementSibling.style.position = 'absolute';

        }
     });

    });