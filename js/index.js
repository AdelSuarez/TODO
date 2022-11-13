import Task from './task.js'
import { showMessage } from './showMessage.js';

const formTask = document.getElementById('formTask');
const newTask = document.getElementById('new-task');

const formSearch = document.getElementById('formSearch')
const inputSearch = document.getElementById('search');

const containerTask = document.getElementById('all-task');
const empty = document.querySelector('#empty');
const search = document.querySelector('#search');
const btnAll = document.getElementById('all');


const listTask = [];

const searchCheck = (e) => {
    let isError = true;
    let searchListTask = [];
    if (search.value === '') {
        showMessage('Write a task', 'error');
    } else {
        if ( listTask.length != 0  ) {
            for (let i = 0; i < listTask.length; i++) {
                if ( inputSearch.value === listTask[i].name ) {
                    searchListTask.push(listTask[i]);
                    addTaskContainer(searchListTask);
                    isError = false;
                    btnAll.classList.remove('active');
                }
            }
            if (isError){
                showMessage('Not found', 'error')
            }
        } else {
            btnAll.classList.remove('active');
            showMessage('Empty list', 'error')
        }
    }

    formSearch.reset();
    e.preventDefault();
}


// revisar ya que tiene un error
function emptyContainer() {
    if (listTask.length == 0 ) {
        empty.classList.remove('empty-hide');
    } else {
        empty.classList.add('empty-hide');
    }
}

// SAVED TASK
const savedTask = (event) => {
    
    if (newTask.value === '') {
        showMessage('Write a task', 'error');
        
    } else if (newTask !== '') {
        listTask.push(new Task(newTask.value));
        showMessage('Task created successfully');
    }

    addTaskContainer(listTask);
    listStatusChecker();

    formTask.reset()
    event.preventDefault();
}



const addTaskContainer = (list) => {
    containerTask.innerHTML = '';
    for(let i = 0; i < list.length; i++) {
        containerTask.innerHTML += `<div class="task">
        <div class="task-name">
            <input type="checkbox">
            <p class="task-title">${list[i].name}</p>
        </div>
        <div class="container-task">
            <button class="btn-task btn-edit" onclick="remove()"><ion-icon name="pencil-outline"></ion-icon></button>

            <button class="btn-task btn-remove" onclick="remove()"><ion-icon name="trash-outline" ></ion-icon></button>
        </div>
    </div>`;
    }
}

const listStatusChecker = () => {

    if (listTask.length !== 0) {
        return btnAll.classList.add('active');
    } 
    btnAll.classList.remove('active');
    showMessage('Empty list', 'error')
    
    
}

function remove() {
    alert('hola');
}




window.onload = () => {
    formTask.addEventListener('submit', savedTask);
    formSearch.addEventListener('submit', searchCheck);
    
    
    btnAll.onclick = () => {
        inputSearch.value = '';
        addTaskContainer(listTask);
        listStatusChecker();
    }

    addTaskContainer(listTask);

}


