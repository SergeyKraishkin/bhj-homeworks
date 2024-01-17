
document.querySelector('form').addEventListener ('submit', function(e) {
       e.preventDefault();
        let taskDescription = document.getElementById('task__input').value;
       
            let divTask = document.createElement ('div');
            divTask.className ='task';
            
            let divTaskTitle = document.createElement ('div');
            divTaskTitle.className ='task__title';
            divTaskTitle.innerHTML = taskDescription;

            let a = document.createElement ('a');
            a.className = 'task__remove';
            a.href = '#';
            a.innerHTML = '&times;';
        
            divTask.appendChild(divTaskTitle);
            divTask.appendChild(a);
            document.getElementsByClassName('tasks__list')[0].appendChild(divTask);  
            document.getElementsByClassName('tasks__list')[0].lastChild.childNodes[1].addEventListener ('click', function(e) {
                 e.preventDefault();
                 this.parentElement.remove ();   
             }); 
    });
