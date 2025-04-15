let dreams = []

const listEL = document.getElementById("dreamList")
let selectedIdx = -1

function addDream(event) {
    event.preventDefault()
    const dreamName = document.getElementById("target").value
    const level = document.getElementById("inputGroupSelect01").value

    if(dreamName === "") {
        alert("Vui lòng nhập tên ước mơ")
        return
    }
    if(level === "Chọn mức độ quan trọng.") {
        alert("Vui lòng chọn độ ưu tiên")
        return
    }

    const dream = {
        dreamName,
        level,
        status: false
    }

    dreams.push(dream)

    renderData()
}

function renderData() {
    let dreamsHTML = ``;

    for (let i = 0; i < dreams.length; i++) {
        dreamsHTML += `
        <tr>
                    <td>${dreams[i].dreamName}</td>
                    <td>${dreams[i].level}</td>
                    <select class="form-select" onchange="updateStatus(${i}, this.value)">
                        <option class="filter-option" value="true" ${dreams[i].status} ? "selected" : "">Đã hoàn thành</option>
                        <option class="filter-option" value="false" ${!dreams[i].status} ? "selected" : "">Chưa hoàn thành</option>
                    </select>
                    <td>
                        <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                            data-bs-target="#exampleModal" onclick="loadTarget(${i})">
                            Xóa
                        </button>
                        <button type="button" class="btn btn-warning" data-bs-toggle="modal"
                            data-bs-target="#exampleModal" onclick="loadTarget(${i})">
                            Sửa
                        </button>
                    </td>
                </tr>
        `
    }

    listEL.innerHTML = dreamsHTML
}

function updateStatus(index, value) {
    dreams[index].status = value === "true" ? true : false
    renderData()
}

function deleteDream(index) {
    dreams.splice(index, 1)

    

    renderData()
}

function loadTarget(index)   {
    selectedIdx = index
}