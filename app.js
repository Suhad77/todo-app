const todoForm= document.querySelector(".todo_form");
const todoItem= document.querySelector(".todo-items");
let taskList=[];

function handelSubmit(e){
  e.preventDefault();

  const inputData= e.target.task.value;

  const data={
    id:Date.now(),
    task:inputData,
    isComplite:false,
  }

  taskList.unshift(data);

  e.target.reset();

  todoItem.dispatchEvent(new CustomEvent("display"));
}

function displayTask(){
  const html=taskList.map((item)=>{
    return`
    <li>
    <div class="todo-left">
      <label class="todo-left" for="item-${item.id}">
        <input type="checkbox" id=item-${item.id}" />
      ${item.task}
    </div>

    <div class="todo-right">
      <svg xmlns="http://www.w3.org/2000/svg" class="edit-icon h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
      </svg>

    </div>
    </li>`
  }
  ).join("");

  todoItem.innerHTML=html;
}

function saveFormLocalstorage(){
  localStorage.setItem("task", JSON.stringify(taskList));
}

function displayFormLocastroge(){
  const saveData = JSON.parse(localStorage.getItem("task"))

  if(Array.isArray(saveData) && saveData.length > 0){
    taskList = saveData;
  
    todoItem.dispatchEvent(new CustomEvent("display"));
  }

}


todoForm.addEventListener("submit", handelSubmit);
todoItem.addEventListener("display", displayTask);
todoItem.addEventListener("display", saveFormLocalstorage);



displayFormLocastroge()