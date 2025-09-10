// creating an empty array that is expecting values
const todoList = [];

function addTodo(){
    const inputElement = document.querySelector(".js-name-input");
    const name= inputElement.value;
    // console.log(name);

    todoList.push(name);
    console.log(todoList)

//     resetting the text box
    inputElement.value = '';
}