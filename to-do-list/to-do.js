const toDolist = JSON.parse(localStorage.getItem('toDolist')) || [];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    for (let i = 0; i < toDolist.length; i++){
        const todoObject = toDolist[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const {name , dueDate} = todoObject;
        const html = `
        <div>
        ${name}</div>
        <div> ${dueDate} </div>
        <button class="delete-todo-button" onclick="
            deleteTodo(${i});
        "
            >Delete</button>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function toDoListAdd(){
    const inputElement =document.querySelector('.js-input-text');
    const name = inputElement.value;

    const dateInputElement  = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    toDolist.push({
        //name: name,
        //dueDate: dueDate,
        name,
        dueDate,
    });
    

    inputElement.value = '';
    dateInputElement.value = '';

    saveToLocalStorage(); // Save after adding
    renderTodoList();
}

function deleteTodo(index) {
    toDolist.splice(index, 1);
    saveToLocalStorage(); // Save after deleting
    renderTodoList();
}

function saveToLocalStorage() {
    localStorage.setItem('toDolist', JSON.stringify(toDolist));
}

