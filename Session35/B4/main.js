let employees = [];

/* Khởi tạo dữ liệu vào localStorage */
if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
} else {
    employees = JSON.parse(localStorage.getItem("employees"));
}

function updateData() {
    localStorage.setItem("employees", JSON.stringify(employees));
}

let tableEl = document.querySelector("tbody");

function addEmployee() {
    let nameInput = document.getElementById("employee").value;
    let roleInput = document.getElementById("role").value;

    if (!nameInput || !roleInput) {
        alert("Vui lòng nhập đầy đủ tên và chức vụ!");
        return;
    }

    let newEmployee = {
        id: Date.now(),
        name: nameInput,
        role: roleInput
    };

    employees.push(newEmployee);
    updateData();
    renderData();
    renderPagin();

    // Reset input sau khi thêm
    document.getElementById("employee").value = "";
    document.getElementById("role").value = "";
}

function deleteEmployee(index) {
    // Tính chỉ số gốc dựa trên trang hiện tại
    let globalIndex = (curPage - 1) * maxItem + index;
    employees.splice(globalIndex, 1);
    updateData();
    renderData();
    renderPagin();
}

function editEmployee(index) {
    // Tính chỉ số gốc dựa trên trang hiện tại
    let globalIndex = (curPage - 1) * maxItem + index;
    employees[globalIndex] = {
        id: employees[globalIndex].id, // Giữ nguyên id
        name: prompt("Nhập tên mới", employees[globalIndex].name),
        role: prompt("Nhập chức vụ mới", employees[globalIndex].role)
    };
    updateData();
    renderData();
    renderPagin();
}

/* Phân trang */
const urlParams = new URLSearchParams(window.location.search);
const targetPage = urlParams.get('page');
const maxItem = 2;
let curPage = targetPage ? parseInt(targetPage) : 1;
let countPage = Math.ceil(employees.length / maxItem);

let paginBoxEL = document.querySelector(".pagin_box");

function renderPagin() {
    countPage = Math.ceil(employees.length / maxItem);
    let paginHtml = ``;

    // Nút Previous
    paginHtml += `
        <li class="page-item ${curPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="setPage(${curPage - 1}); return false;">Previous</a>
        </li>
    `;

    // Các số trang
    for (let i = 1; i <= countPage; i++) {
        paginHtml += `
            <li class="page-item ${i === curPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="setPage(${i}); return false;">${i}</a>
            </li>
        `;
    }

    // Nút Next
    paginHtml += `
        <li class="page-item ${curPage === countPage ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="setPage(${curPage + 1}); return false;">Next</a>
        </li>
    `;

    paginBoxEL.innerHTML = `
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
                ${paginHtml}
            </ul>
        </nav>
    `;
}

function renderData() {
    let dataHTML = ``;
    let start = (curPage - 1) * maxItem;
    let end = curPage * maxItem;
    let data = employees.slice(start, end);

    for (let i = 0; i < data.length; i++) {
        dataHTML += `
            <tr>
                <td>${start + i + 1}</td>
                <td>${data[i].name}</td>
                <td>${data[i].role}</td>
                <td>
                    <button onclick="editEmployee(${i})" class="btn btn-warning btn-sm">Sửa</button>
                    <button onclick="deleteEmployee(${i})" class="btn btn-danger btn-sm">Xóa</button>
                </td>
            </tr>
        `;
    }

    tableEl.innerHTML = dataHTML;
}

function setPage(pageNumber) {
    if (pageNumber < 1) {
        pageNumber = 1;
    }

    if (pageNumber > countPage) {
        pageNumber = countPage;
    }

    curPage = pageNumber;
    window.history.pushState({}, '', "?page=" + curPage);
    renderData();
    renderPagin();
}

renderData();
renderPagin();