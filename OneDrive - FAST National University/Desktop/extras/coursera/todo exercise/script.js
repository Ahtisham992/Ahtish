function addTask() {
  var taskInput = document.getElementById("taskInput");

  var input = taskInput.value.trim();

  if (input !== "") {
    var todoList = document.getElementById("todoList");

    var list = document.createElement("li");
    var span = document.createElement("span");
    span.textContent = input;
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    editButton.onclick = () => {
      editTask(span);
    };

    deleteButton.onclick = () => {
      removeTask(list);
    };

    list.appendChild(span);
    list.appendChild(editButton);
    list.appendChild(deleteButton);

    todoList.appendChild(list);

    taskInput.value = "";
  }
  else{
    alert("enter the task plz. be a good woman bitch")
  }
}

function editTask(span){
  var editedtTask=prompt(span.textContent);
  if(editedtTask==""){
    alert("plz fill the required field");
    return false;
  }
  span.textContent=editedtTask;
  return true;

}
// Function to remove a task from the to-do list
function removeTask(task){
    const ul = document.getElementById("todoList"); // Get the list container
    ul.removeChild(task); // Remove the specified task element
}