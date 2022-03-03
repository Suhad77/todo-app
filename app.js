const todoForm= document.querySelector(".todo_form");
const todoItem= document.querySelector(".todo-items");
const taskList=[];

function handelSubmit(e){
  e.preventDefault();

  const inputData= e.target.task.value;

  const data={
    id:Date.now(),
    task:inputData,
    isComplite:false,
  }
  taskList.push(data);

  e.target.reset();

  displayTask();

}

function displayTask(){
  const html=taskList.map((item)=>{
    return`<li>${item.task}</li>`
  }
  ).join("");

  todoItem.innerHTML=html;
}

todoForm.addEventListener("submit", handelSubmit);