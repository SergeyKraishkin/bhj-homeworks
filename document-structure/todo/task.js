
let task = document.getElementById('task__input');

document.querySelector('form').addEventListener('submit', function(e) {
    //debugger;
    e.preventDefault();       
    let taskDescription = task.value.trim();
    let taskList = document.getElementsByClassName('tasks__list')[0];
        if (taskDescription) {
            taskList.insertAdjacentHTML('afterbegin', `
            <div class="task">
            <div class="task__title">
            ${taskDescription}
            </div>
            <a href="#" class="task__remove">&times;</a>
            </div>
            `);
        }
        if (taskList.querySelector('.task__remove')) {
            taskList.querySelector('.task__remove').addEventListener ('click', function(e) {
            //e.preventDefault();
                this.parentElement.remove();    
            }); 
        }
        e.target.reset();
    });
