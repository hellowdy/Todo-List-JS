//SELECTEURS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//ECOUTEURS
todoButton.addEventListener('click', addTodo);

//FUNCTIONS
function addTodo(event){
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Creer le li
    const newTodo = document.createElement('li');
    newTodo.innerText = "Hey";
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
}