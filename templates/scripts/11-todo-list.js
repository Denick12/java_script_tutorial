// create array to store todos
// When we click add
// Get a text from the textbox
// Add it to our array
// console.log the array

const todoList = [];
function addTodo (){
    const inputElement= document.querySelector('.js-name-input');
    const name = inputElement.value
    // console.log(name)
    todoList.push(name)
    console.log(todoList);

    inputElement.value = '';
}




