const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');
const removeDoneTasks = document.querySelector('#removeDoneTasks');

let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((task) => renderTask(task))
}

checkEmptyList();

form.addEventListener('submit', addTask);

tasksList.addEventListener('click', dellTask);

tasksList.addEventListener('click', doneTask);

removeDoneTasks.addEventListener('click', removeDoneTasksFun);

function addTask(e) {
    
    e.preventDefault();

    const taskText = taskInput.value;

    const newTask = {
        id: Date.now(),
        text: taskText,
        done: false
    };

    tasks.push(newTask);

    saveToLocalStorage();

    renderTask(newTask);

    taskInput.value = '';

    taskInput.focus();  

    checkEmptyList();

    saveToLocalStorage()

}

function dellTask(e) {
    
    if (e.target.dataset.action !== 'delete') return; 

    const perentNode = e.target.closest('li');

    const id = Number(perentNode.id);

    tasks = tasks.filter((task) => task.id !== id);

    saveToLocalStorage();

    perentNode.remove();

    checkEmptyList()

}

function doneTask(e) {
    
    if (e.target.dataset.action !== 'done') return;

    const perentNone = e.target.closest('li');

    const id = Number(perentNone.id);

    const task = tasks.find((task) => task.id === id);

    task.done = !task.done;

    saveToLocalStorage();

    const taskTitle = perentNone.querySelector('.task-title');
    taskTitle.classList.toggle('task-title--done')

}

function removeDoneTasksFun() {

    
    if (tasks.length === 0) {

        alert('Список дел пуст!')

    } else {

        tasks.forEach((task) => {

            if (task.done === true) document.getElementById(task.id).remove()

        });

        tasks = tasks.filter((task) => task.done === false);

        saveToLocalStorage();

        checkEmptyList()

    }

}

function checkEmptyList() {
    if (tasks.length === 0) {
        const emptyListHTML = `<li id="emptyList" class="list-group-item empty-list">
                                <img src="./img/todo.svg" alt="Empty" width="48" class="mt-3">
                                <div class="empty-list__title">Список дел пуст</div>
                               </li>`;
        tasksList.insertAdjacentHTML('afterbegin', emptyListHTML)                      
    } 

    if (tasks.length > 0) {
        const emptyListEl = document.querySelector('#emptyList');
        emptyListEl ? emptyListEl.remove(): null
    }
}

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function renderTask(task) {

const cssClass = task.done ? 'task-title task-title--done' : 'task-title';

const taskHTML = `<li id='${task.id}' class="list-group-item d-flex justify-content-between task-item">
                     <span class="${cssClass}">${task.text}</span>
                     <div class="task-item__buttons">
                        <button type="button" data-action="done" class="btn-action">
                             <img src="./img/tick.svg" alt="Done" width="18" height="18">
                        </button>
                        <button type="button" data-action="delete" class="btn-action">
                             <img src="./img/cross.svg" alt="Done" width="18" height="18">
                         </button>
                     </div>
                    </li>`;

tasksList.insertAdjacentHTML('beforeend', taskHTML)

}