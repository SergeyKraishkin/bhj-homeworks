rotator = document.querySelector('.rotator__case');

setInterval(function() {
    rotator.classList.remove('rotator__case_active');
    if (rotator.nextElementSibling) {
        rotator.nextElementSibling.classList.add('rotator__case_active');
        rotator = rotator.nextElementSibling;
    }
    else {
        rotator = document.querySelector('.rotator__case');
        rotator.classList.add('rotator__case_active');
    }
  }, 1000);
