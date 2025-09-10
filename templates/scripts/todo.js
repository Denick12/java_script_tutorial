const todoList = [];

function addTodo() {
    const inputElement = document.querySelector(".js-name-input");
    const name = inputElement.value.trim();

    if (name === "") {
        alert("Please enter a todo");
        return;
    }

    // Add todo to the array
    todoList.push(name);

    // Reset input field
    inputElement.value = "";

    // Call render
    renderTodoList();
}

function renderTodoList() {
    const listElement = document.querySelector(".js-todo-list");

    // Clear the old list before re-rendering
    listElement.innerHTML = "";

    // Loop through todos and render them
    todoList.forEach((todo, index) => {
        // Create <li>
        const li = document.createElement("li");
        li.textContent = todo;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.onclick = function() {
            // Remove this item from the array
            todoList.splice(index, 1);
            renderTodoList();
        };

        // Append button to <li>
        li.appendChild(removeBtn);

        // Append <li> to <ul>
        listElement.appendChild(li);
    });
}


