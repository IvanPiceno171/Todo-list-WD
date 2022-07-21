
 let todos = [
    // {todoText: 'item 1', complete: false }, 
    // {todoText: 'item 2', complete: false }, 
    // {todoText: 'item 3', complete: false }
]

displayTodos();

function displayTodos(){
    for(let i = 0; i < todos.length; i++){
        console.log(todos[i])
    }
    let todosUl = document.getElementById('todos-ul');
    todosUl.innerHTML="";
    for (let i = 0; i < todos.length; i++){
        let todoLi = document.createElement('li');
        // add class name to li
        todoLi.classList.add("todo-li-list");
        if (todos[i].complete === true){
            todoLi.innerText = '[X] ' + todos[i].todoText
        }
        else{
            todoLi.innerText = '[ ] ' + todos[i].todoText
        }
        //v10 delete button
        let removeButton = document.createElement('button')
        removeButton.innerText = 'Remove'
        removeButton.addEventListener('click', remove)
        removeButton.id = i;
        todoLi.appendChild(removeButton)
        todosUl.appendChild(todoLi);
    }
}

function add(){
    let initialTodoText = addInput.value
    todos.push({todoText: initialTodoText, complete: false})
    addInput.value = ""
    displayTodos();
}
// remove 
function edit(){
    let position = editPositionInput.value;
    let newTodoText = editTextInput.value;
    todos[position].todoText = newTodoText;
    editPositionInput.value = "";
    editTextInput.value = "";
    displayTodos();
}

function toggle(){
   let position = toggleInput.value
    if(todos[position].complete === false){
        todos[position].complete = true;
    }
    else{
        todos[position].complete = false;
    }
    displayTodos();
}
 
function remove(event){
    let position = event.target.id;
    todos.splice(position, 1)
    displayTodos();
}

function toggleAll(){
   let completedTodos = 0;

   for (let i = 0; i < todos.length; i++){
       if(todos[i].complete === true){
           completedTodos++;
       }
    }
   
   if (completedTodos === todos.length){
       for (let i = 0; i < todos.length; i++){
           todos[i].complete = false;
       }
   } else {
       for(let i = 0; i < todos.length; i++){
           todos[i].complete = true;
       }
   }
   displayTodos()
}


let toggleAllButton = document.getElementById('toggle-all-button');
toggleAllButton.addEventListener("click", toggleAll)

let addButton = document.getElementById('add-button');
let addInput = document.getElementById('add-input');
addButton.addEventListener('click', add);

let editButton = document.getElementById('edit-button');
let editPositionInput = document.getElementById('edit-position-input');
let editTextInput = document.getElementById('edit-text-input');
editButton.addEventListener('click', edit)

let toggleButton = document.getElementById('toggle-button');
let toggleInput = document.getElementById('toggle-input');
toggleButton.addEventListener('click', toggle)

    