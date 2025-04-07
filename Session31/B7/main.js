const todolist = [
  {
    task: 'hit the gym',
    completed: true,
  },
  {
    task: 'buy milk',
    completed: false,
  },
  {
    task: 'text george',
    completed: false,
  },
  {
    task: 'read a book',
    completed: false,
  },
  {
    task: 'office coffee',
    completed: true,
  },
];

const todoListDiv = document.getElementById('todoList');

function displayTodoList() {
  todoListDiv.innerHTML = '';

  todolist.forEach(todo => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    if (todo.completed) {
      todoItem.classList.add('completed');
    }

    todoItem.textContent = todo.task;
    todoListDiv.appendChild(todoItem);
  });
}

displayTodoList();