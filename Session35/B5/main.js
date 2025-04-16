let categories = [];

if (!localStorage.getItem("categories")) {
    localStorage.setItem("categories", JSON.stringify(categories));
} else {
    categories = JSON.parse(localStorage.getItem("categories"));
}

function updateData() {
    localStorage.setItem("categories", JSON.stringify(categories));
}

let tableEl = document.querySelector("#category-list");
let filteredCategories = categories;

const urlParams = new URLSearchParams(window.location.search);
const targetPage = urlParams.get('page');
const maxItem = 5; 
let curPage = targetPage ? parseInt(targetPage) : 1;
let countPage = Math.ceil(categories.length / maxItem);

let paginBoxEL = document.querySelector(".pagin_box");

function filterByStatus() {
    const statusFilter = document.getElementById("statusFilter").value;
    if (statusFilter === "") {
        filteredCategories = categories;
    } else {
        filteredCategories = categories.filter(category => 
            statusFilter === "active" ? category.status === true : category.status === false
        );
    }
    curPage = 1;
    renderData();
    renderPagin();
}

function renderPagin() {
    countPage = Math.ceil(filteredCategories.length / maxItem);
    let paginHtml = ``;

    paginHtml += `
        <li class="page-item ${curPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="setPage(${curPage - 1}); return false;">Previous</a>
        </li>
    `;

    for (let i = 1; i <= countPage; i++) {
        paginHtml += `
            <li class="page-item ${i === curPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="setPage(${i}); return false;">${i}</a>
            </li>
        `;
    }

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
    let data = filteredCategories.slice(start, end);

    for (let i = 0; i < data.length; i++) {
        dataHTML += `
            <tr>
                <td>${data[i].code}</td>
                <td>${data[i].name}</td>
                <td>
                    <span class="status-${data[i].status ? 'active' : 'inactive'}">
                        <span class="status-dot"></span>
                        ${data[i].status ? 'Đang hoạt động' : 'Ngừng hoạt động'}
                    </span>
                </td>
                <td>
                    <button onclick="deleteCategory(${start + i})" class="btn btn-link p-0 me-2">
                        <i class="fas fa-trash text-danger"></i>
                    </button>
                    <button onclick="editCategory(${start + i})" class="btn btn-link p-0">
                        <i class="fas fa-pencil-alt text-warning"></i>
                    </button>
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

function saveCategory() {
    const codeInput = document.getElementById("categoryCode");
    const nameInput = document.getElementById("categoryName");
    const statusActive = document.getElementById("statusActive").checked;

    const codeError = document.getElementById("categoryCodeError");
    const nameError = document.getElementById("categoryNameError");

    let hasError = false;

    if (!codeInput.value.trim()) {
        codeInput.classList.add("error");
        codeError.style.display = "block";
        hasError = true;
    } else {
        codeInput.classList.remove("error");
        codeError.style.display = "none";
    }

    if (!nameInput.value.trim()) {
        nameInput.classList.add("error");
        nameError.style.display = "block";
        hasError = true;
    } else {
        nameInput.classList.remove("error");
        nameError.style.display = "none";
    }

    if (hasError) return;

    const newCategory = {
        code: codeInput.value.trim(),
        name: nameInput.value.trim(),
        status: statusActive
    };

    categories.push(newCategory);
    updateData();
    filteredCategories = categories;
    document.getElementById("statusFilter").value = "";
    renderData();
    renderPagin();

    const modal = bootstrap.Modal.getInstance(document.getElementById("addCategoryModal"));
    modal.hide();
    codeInput.value = "";
    nameInput.value = "";
    document.getElementById("statusActive").checked = true;
}

function deleteCategory(index) {
    if (confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
        categories.splice(index, 1);
        updateData();
        filteredCategories = categories;
        document.getElementById("statusFilter").value = "";
        renderData();
        renderPagin();
    }
}

function editCategory(index) {
    alert("Chức năng sửa danh mục đang được phát triển!");
}

renderData();
renderPagin();