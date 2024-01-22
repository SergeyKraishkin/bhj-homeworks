
let task = document.getElementById('task__input');

document.querySelector('form').addEventListener ('submit', function(e) {
       e.preventDefault();       
            taskDescription = task.value.trim();
            if (taskDescription) {
                document.getElementsByClassName('tasks__list')[0].insertAdjacentHTML('afterbegin', `
                <div class="task">
                <div class="task__title">
                ${taskDescription}
                </div>
                <a href="#" class="task__remove">&times;</a>
                </div>
            `);
            }
            if (document.getElementsByClassName('tasks__list')[0].childNodes[1].childNodes[3]) {
                document.getElementsByClassName('tasks__list')[0].childNodes[1].childNodes[3].addEventListener ('click', function(e) { //remove
                    e.preventDefault();
                    this.parentElement.remove ();   
                 
                }); 
            }
             e.target.reset();
            
           
    });
