let taskList = [];

window.onload = function () {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        taskList = JSON.parse(storedTasks);
        renderData();
    }
};

function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(taskList));
}

function addTask(event) {
    event.preventDefault();
    let taskInput = document.getElementById("taskInput");
    let taskName = taskInput.value.trim();

    if (taskName === "") return;

    let task = {
        id: Date.now(),
        name: taskName
    };

    taskList.push(task);
    saveToLocalStorage();
    renderData();

    taskInput.value = "";
}

function deleteTask(id) {
    if (!confirm("Bạn có chắc chắn muốn xóa không?")) return;
    taskList = taskList.filter(task => task.id !== id);
    saveToLocalStorage();
    renderData();
}

function editTask(id) {
    let newTask = prompt("Nhập nội dung mới:");
    if (newTask !== null && newTask.trim() !== "") {
        taskList = taskList.map(task => {
            if (task.id === id) {
                return { ...task, name: newTask.trim() };
            }
            return task;
        });
        saveToLocalStorage();
        renderData();
    }
}

function renderData() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    taskList.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${task.name}
            <button onclick="deleteTask(${task.id})">Xóa</button>
            <button onclick="editTask(${task.id})">Sửa</button>
        `;
        list.appendChild(li);
    });
}
