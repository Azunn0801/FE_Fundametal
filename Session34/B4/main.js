const taskInput = document.getElementById("task");
const taskList = document.querySelector("ul");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  taskList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <p>${todo}</p>
      <button onclick="deleteTask(${index})" class="btn btn-danger">Xóa</button>
    `;
    taskList.appendChild(li);
    taskList.appendChild(document.createElement("hr"));
  });
}

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && taskInput.value.trim() !== "") {
    todos.push(taskInput.value.trim());
    taskInput.value = "";
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
  }
});

function deleteTask(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

renderTodos();
