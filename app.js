const todoForm = document.querySelector(".todo_form");
const todoItems = document.querySelector(".todo-items");

const taskList = [];

function handleSubmit(e){

  e.preventDefault();

  const inputData= e.target.task.value;

  const task = {
    id: Date.now(),
    task:inputData,
    isCompletde:false,
    }

    e.target.reset();


    taskList.push(task);

    displayTask();
}

function displayTask(){
  const html = taskList.map(item=>{
    return`<li>${item.task}</li>`
  }).join("");

  todoItems.innerHTML = html;
}

todoForm.addEventListener("submit", handleSubmit);

