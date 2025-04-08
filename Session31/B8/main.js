let tasksList = [
  { id: 1, taskName: "Learn JavaScript", done: false },
  { id: 2, taskName: "Learn React", done: true },
  { id: 3, taskName: "Learn Node", done: false },
];
function showTask() {
  const list = document.getElementById("myUL");
  list.innerHTML = "";
  tasksList.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task.taskName;
      if (task.done) li.classList.add("checked");
      li.addEventListener("click", function () {
          task.done = !task.done;
          showTask();
      });
      const span = document.createElement("span");
      span.textContent = "×";
      span.className = "close";
      span.onclick = function (e) {
          e.stopPropagation();
          deleteTask(task.id);
      };
      li.appendChild(span);
      list.appendChild(li);
  });
}
function addTask() {
  const valueInput = document.getElementById("myInput").value.trim();
  if (valueInput === "") {
      alert("Please enter a task!");
      return;
  }
  const newTask = {
      id: tasksList.length > 0 ? tasksList[tasksList.length - 1].id + 1 : 1,
      taskName: valueInput,
      done: false,
  };
  tasksList.push(newTask);
  document.getElementById("myInput").value = "";
  showTask();
}
document.querySelector(".addBtn").addEventListener("click", addTask);
showTask();