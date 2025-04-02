let employees = [];

function displayMenu() {
    console.log("\n--- MENU QUẢN LÝ NHÂN VIÊN ---");
    console.log("1. Thêm nhân viên mới");
    console.log("2. Xóa nhân viên theo ID");
    console.log("3. Cập nhật lương nhân viên theo ID");
    console.log("4. Tìm kiếm nhân viên theo tên");
    console.log("5. Hiển thị tất cả nhân viên");
    console.log("6. Thoát");
}

function addEmployee() {
    const id = prompt("Nhập ID nhân viên:");
    const name = prompt("Nhập tên nhân viên:");
    const position = prompt("Nhập chức vụ nhân viên:");
    const salary = parseFloat(prompt("Nhập lương nhân viên:"));

    if (id && name && position && !isNaN(salary)) {
        employees.push({ id, name, position, salary });
        console.log("Đã thêm nhân viên thành công.");
    } else {
        console.log("Thông tin nhân viên không hợp lệ.");
    }
}

function deleteEmployee() {
    const id = prompt("Nhập ID nhân viên cần xóa:");
    const index = employees.findIndex(emp => emp.id === id);

    if (index !== -1) {
        const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa nhân viên ${employees[index].name}?`);
        if (confirmDelete) {
            employees.splice(index, 1);
            console.log("Đã xóa nhân viên thành công.");
        } else {
            console.log("Hủy xóa nhân viên.");
        }
    } else {
        console.log("Không tìm thấy nhân viên có ID này.");
    }
}

function updateSalary() {
    const id = prompt("Nhập ID nhân viên cần cập nhật lương:");
    const employee = employees.find(emp => emp.id === id);

    if (employee) {
        const newSalary = parseFloat(prompt("Nhập mức lương mới:"));
        if (!isNaN(newSalary)) {
            employee.salary = newSalary;
            console.log("Đã cập nhật lương thành công.");
        } else {
            console.log("Mức lương không hợp lệ.");
        }
    } else {
        console.log("Không tìm thấy nhân viên có ID này.");
    }
}

function searchEmployee() {
    const name = prompt("Nhập tên nhân viên cần tìm:");
    const results = employees.filter(emp => emp.name.toLowerCase().includes(name.toLowerCase()));

    if (results.length > 0) {
        console.log("Kết quả tìm kiếm:");
        results.forEach(emp => console.log(`ID: ${emp.id}, Tên: ${emp.name}, Chức vụ: ${emp.position}, Lương: ${emp.salary}`));
    } else {
        console.log("Không tìm thấy nhân viên nào có tên này.");
    }
}

function displayAllEmployees() {
    if (employees.length > 0) {
        employees.forEach(employee => console.log(`ID: ${employee.id}, Tên: ${employee.name}, Chức vụ: ${employee.position}, Lương: ${employee.salary}`));
    } else {
        console.log("Danh sách nhân viên trống");
    }
}

function main() {
    let choice;
    while (choice !== "6") {
        displayMenu();
        choice = prompt("Chọn chức năng:");

        switch (choice) {
            case "1":
                addEmployee();
                break;
            case "2":
                deleteEmployee();
                break;
            case "3":
                updateSalary();
                break;
            case "4":
                searchEmployee();
                break;
            case "5":
                displayAllEmployees();
                break;
            case "6":
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    }
}

main();