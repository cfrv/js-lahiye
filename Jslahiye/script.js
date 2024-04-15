 
 const todoInput = document.getElementById('todo-input');
 const addButton = document.getElementById('add-button');
 const todoList = document.getElementById('todo-list');
 const sortButton = document.getElementById('sort-button');
 function toggleTodoListVisibility() {
     const uldiv = document.querySelector('.uldiv');
     if (todoList.children.length === 0) {
         uldiv.style.display = 'none';
     } else {
         uldiv.style.display = 'block';
     }
 }
 
 function addTodo() {
     const todoText = todoInput.value.trim();
     
     if (todoText !== '') {
         const li = document.createElement('li');
         li.textContent = todoText;
         addDeleteButtonToListItem(li);  
         todoList.appendChild(li);
         todoInput.value = '';
         toggleTodoListVisibility();  
     }
 }
 
 function deleteTodo() {
     this.parentNode.remove();
     toggleTodoListVisibility(); 
 }
 function changeColor() {
    this.classList.add('clicked');  
}

 function addDeleteButtonToListItem(li) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', deleteTodo);
    deleteButton.addEventListener('click', changeColor); 
    li.appendChild(deleteButton);
}
 window.onload = function() {
     const uldiv = document.querySelector('.uldiv');
     uldiv.style.display = 'none';
 }
 function sortTodoList() {
    const todos = Array.from(todoList.children);
    const sortedTodos = todos.sort((a, b) => a.textContent.localeCompare(b.textContent));
    todoList.innerHTML = '';
    sortedTodos.forEach(todo => {
        todoList.appendChild(todo);
    });
}

 addButton.addEventListener('click', addTodo);
 sortButton.addEventListener('click', sortTodoList);
 
 
 