let menuString =
    `1. Nhập danh sách sinh viên.
2. Hiển thị danh sách sinh viên.
3. Tìm sinh viên theo tên.
4. Xóa sinh viên khỏi danh sách.
5. Thoát`

let choice = 0
let students = 0
let studentArr = [
    "Nguyễn Văn An",
    "Trần Thị Bình",
    "Lê Minh Cường",
    "Phạm Thu Hà",
]

console.log(menuString)

function addStudents() {
    let inpArr = 0
    students = Number(prompt("Nhập số sinh viên"))
    for (let i = 0; i < students; i++) {
        inpArr = Number(prompt(`Nhập sinh viên thứ [${i + 1}]`))
        studentArr.push(inpArr)
    }
}

function displayStudents() {
    console.log(studentArr)
}

function findStudent() {
    let findStr = prompt("Nhập tên sinh viên cần tìm");
    const check = studentArr.some((name) => {
        if (name.toLowerCase().includes(findStr.toLowerCase())) {
            console.log(`Tìm thấy sinh viên tên ${name}`)
            return true
        }
        return false
    })
    if (!check) {
        console.log("Sinh viên không có trong danh sách")
    }
}

function deleteStudent() {
    let findStr = prompt("Nhập tên sinh viên cần xóa")
    let indexToRemove = -1

    const check = studentArr.some((name, index) => {
        if (name.toLowerCase().includes(findStr.toLowerCase())) {
            indexToRemove = index
            return true
        }
        return false
    })

    if (check) {
        studentArr.splice(indexToRemove, 1)
        console.log(`Đã xóa sinh viên tên: ${findStr}`)
    } else {
        console.log("Sinh viên không có trong danh sách")
    }
}

do {
    choice = Number(prompt("Nhập lựa chọn"))

    switch (choice) {
        case 1: {
            addStudents()
            break
        }
        case 2: {
            displayStudents()
            break
        }
        case 3: {
            findStudent()
            break
        }
        case 4: {
            deleteStudent()
            break
        }
        case 5: {
            console.log("Thoát chương trình")
            break
        }
        default: {
            console.log("Tùy chọn không hợp lệ")
        }
    }
} while (choice !== 5)