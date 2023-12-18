const fontSize = [...document.querySelectorAll('.font-size')];
const bookContent = document.querySelector('.book');
fontSize.forEach((item, index) =>{
    item.addEventListener('click', function (e){
   for (i=0; i<fontSize.length; i++) {
    fontSize[i].classList.remove('font-size_active');
   }
    item.classList.add('font-size_active');
    switch (index) {
        case 0:
        bookContent.classList.remove('book_fs-big');
        bookContent.classList.add('book_fs-small')
          break;
        case 1:
            bookContent.classList.remove('book_fs-small');
            bookContent.classList.remove('book_fs-big');
          break;
        case 2:
            bookContent.classList.remove('book_fs-small');
            bookContent.classList.add('book_fs-big');
            break;
      }
      e.preventDefault();
        });;
});

