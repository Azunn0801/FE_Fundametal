const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const progress = document.getElementById('progress');
const errorMessage = document.getElementById('error-message');

addBtn.disabled = true;

taskInput.addEventListener('input', () => {
    addBtn.disabled = taskInput.value.trim() === '';
    errorMessage.textContent = ''; 
});

addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button onclick="removeTask(this)"><i class="fas fa-trash"></i></button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
        addBtn.disabled = true;
        updateProgress();
        saveTasks();
    } else {
        errorMessage.textContent = "Tên công việc không được phép để trống.";
    }
}

function removeTask(button) {
    if (confirm("Bạn có chắc chắn muốn xóa công việc này?")) {
        button.parentElement.remove();
        updateProgress();
        saveTasks();
    }
}

function updateProgress() {
    const totalTasks = taskList.children.length;
    const completedTasks = taskList.querySelectorAll('input[type="checkbox"]:checked').length;
    const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
    progress.textContent = percentage + '%';

    if (completedTasks === totalTasks && totalTasks > 0) {
        progress.textContent = "Hoàn thành công việc!";
    }
}

function toggleTaskCompletion(checkbox) {
    const taskSpan = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskSpan.style.textDecoration = "line-through";
    } else {
        taskSpan.style.textDecoration = "none";
    }
    updateProgress();
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll('li').forEach(taskItem => {
        const taskText = taskItem.querySelector('span').textContent;
        const isChecked = taskItem.querySelector('input[type="checkbox"]').checked;
        tasks.push({ text: taskText, checked: isChecked });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        const tasks = JSON.parse(storedTasks);
        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');
            taskItem.innerHTML = `
                <input type="checkbox" ${task.checked ? 'checked' : ''} onchange="toggleTaskCompletion(this)">
                <span style="text-decoration: ${task.checked ? 'line-through' : 'none'}">${task.text}</span>
                <button onclick="removeTask(this)"><i class="fas fa-trash"></i></button>
            `;
            taskList.appendChild(taskItem);
        });
        updateProgress();
    }
}

taskList.addEventListener('change', updateProgress);
window.addEventListener('load', loadTasks);