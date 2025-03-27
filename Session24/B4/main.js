let matrix = [];
let rows, cols;
let choice;
do {
    choice = parseInt(prompt("Chọn chức năng:\n1. Nhập mảng\n2. Hiển thị mảng\n3. Tính tổng phần tử\n4. Tìm phần tử lớn nhất\n5. Tính trung bình cộng của hàng\n6. Đảo ngược hàng\n7. Thoát"));
    if (choice === 1) {
        matrix = [];
        rows = parseInt(prompt("Nhập số hàng của mảng: "));
        cols = parseInt(prompt("Nhập số cột của mảng: "));
        for (let i = 0; i < rows; i++) {
            matrix[i] = [];
            for (let j = 0; j < cols; j++) {
                matrix[i][j] = parseInt(prompt(`Nhập phần tử tại vị trí [${i}][${j}]:`));
            }
        }
    } else if (choice === 2) {
        let output = "";
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                output += matrix[i][j] + " ";
            }
            output += "\n";
        }
        alert(output);
    } else if (choice === 3) {
        let sum = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                sum += matrix[i][j];
            }
        }
        alert("Tổng các phần tử: " + sum);
    } else if (choice === 4) {
        let max = matrix[0][0];
        let pos = "(0,0)";
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (matrix[i][j] > max) {
                    max = matrix[i][j];
                    pos = `(${i},${j})`;
                }
            }
        }
        alert("Phần tử lớn nhất: " + max + " tại vị trí " + pos);
    } else if (choice === 5) {
        let averages = "";
        for (let i = 0; i < rows; i++) {
            let sum = 0;
            for (let j = 0; j < cols; j++) {
                sum += matrix[i][j];
            }
            averages += `Hàng ${i}: ${sum / cols}\n`;
        }
        alert(averages);
    } else if (choice === 6) {
        for (let i = 0; i < rows; i++) {
            matrix[i].reverse();
        }
        alert("Đã đảo ngược các hàng trong mảng.");
    }
} while (choice !== 7);
