let a = 4040
let b = 5 

let menuString = `
                1. Cộng hai số.
                2. Trừ hai số.
                3. Nhân hai số.
                4. Chia hai số.
                5. Thoát.`
console.log(menuString)

let choice = 0

function sumNum(a, b) {
    return a + b
}

function minusNum(a, b) {
    return a - b
}

function mulNum(a, b) {
    return a * b
}

function divNum(a, b) {
    return a / b
}



do {

    choice = Number(prompt("Mời nhập lựa chọn"))

    switch (choice) {
        case 1: {
            console.log(sumNum(a, b))
            break
        }
        case 2: {
            console.log(minusNum(a, b))
            break
        }
        case 3: {
            console.log(mulNum(a, b))
            break
        }
        case 4: {
            console.log(divNum(a, b))
            break
        }
        case 5: {
            console.log("Thoát chương trình")
            break
        }

        default:    {
            console.log("Không hợp lệ, mời nhập lại")
        }
    }
}   while(choice !== 5)