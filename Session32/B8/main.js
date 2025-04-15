let taskList = [
    {
        id,
        task
    }
];

function addTask(event) {
    event.preventDefault()
    let task = document.getElementById("taskInput").value;
    taskList.push(task);
    li.setAttribute("id", taskList.length - 1);
    let li = document.createElement("li");
    li.innerHTML = `
  ${task}
  <button onclick="deleteTask(${taskList.length - 1})">Xóa</button>
  <button onclick="editTask(${taskList.length - 1})">Sửa</button>
`;
    

    
    document.getElementById("list").appendChild(li);
}

function renderData() {
    let list = document.getElementById("list")
    
}