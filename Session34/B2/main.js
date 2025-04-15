let courses = JSON.parse(localStorage.getItem('courses')) || [
  {
    id: 1,
    content: 'Learn Javascript Session 01',
    dueDate: '2023-04-17',
    status: 'Pending',
    assignedTo: 'Anh Bách',
  },
  {
    id: 2,
    content: 'Learn Javascript Session 2',
    dueDate: '2023-04-17',
    status: 'Pending',
    assignedTo: 'Lâm th`',
  },
  {
    id: 3,
    content: 'Learn CSS Session 1',
    dueDate: '2023-04-17',
    status: 'Pending',
    assignedTo: 'Hiếu Ci Ớt Ớt',
  }
];

let nextId = JSON.parse(localStorage.getItem('nextId')) || (courses.length + 1);
let editingId = null;

function saveToLocalStorage() {
  localStorage.setItem('courses', JSON.stringify(courses));
  localStorage.setItem('nextId', JSON.stringify(nextId));
}

function renderCourses(courses) {
  const courseList = document.querySelector('tbody');
  let courseListHTML = '';
  courses.forEach(course => {
    courseListHTML += `
      <tr>
        <th scope="row">${course.id}</th>
        <td>${course.content}</td>
        <td>${course.dueDate}</td>
        <td>${course.status}</td>
        <td>${course.assignedTo}</td>
        <td>
          <button class="btn btn-warning" onclick="editTask(${course.id})">Sửa</button>
          <button class="btn btn-danger" onclick="deleteTask(${course.id})">Xóa</button>
        </td>
      </tr>
    `;
  });
  courseList.innerHTML = courseListHTML;
}

function addAcc(event) {
  event.preventDefault();

  const content = document.getElementById('content').value;
  const date = document.getElementById('date').value;
  const status = document.getElementById('status').value;
  const username = document.getElementById('username').value;

  if (!content || !date || !status || status === 'Choose status' || !username) {
    alert("Vui lòng điền đầy đủ thông tin");
    return;
  }

  if (editingId) {
    const index = courses.findIndex(task => task.id === editingId);
    courses[index] = {
      id: editingId,
      content,
      dueDate: date,
      status,
      assignedTo: username
    };
    editingId = null;
  } else {
    const newTask = {
      id: nextId++,
      content,
      dueDate: date,
      status,
      assignedTo: username
    };
    courses.push(newTask);
  }

  saveToLocalStorage();
  renderCourses(courses);
  event.target.reset();
}

function deleteTask(id) {
  if (confirm("Bạn có chắc muốn xóa đầu việc này?")) {
    courses = courses.filter(task => task.id !== id);
    saveToLocalStorage();
    renderCourses(courses);
  }
}

function editTask(id) {
  const task = courses.find(task => task.id === id);
  if (task) {
    document.getElementById('content').value = task.content;
    document.getElementById('date').value = task.dueDate;
    document.getElementById('status').value = task.status;
    document.getElementById('username').value = task.assignedTo;
    editingId = id;
  }
}

renderCourses(courses);
