let array = [];
let choice;
do {
    choice = parseInt(prompt("Chọn chức năng:\n1. Nhập mảng số nguyên\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất và chỉ số của nó\n4. Tính tổng và trung bình cộng của số dương\n5. Đảo ngược mảng\n6. Kiểm tra mảng có đối xứng không\n7. Thoát"));
    if (choice === 1) {
        array = [];
        let size = parseInt(prompt("Nhập số phần tử của mảng: "));
        for (let i = 0; i < size; i++) {
            array[i] = parseInt(prompt(`Nhập phần tử thứ ${i}:`));
        }
    } else if (choice === 2) {
        alert("Mảng: " + array.join(", "));
    } else if (choice === 3) {
        let max = array[0], index = 0;
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
                index = i;
            }
        }
        alert("Phần tử lớn nhất: " + max + " tại chỉ số " + index);
    } else if (choice === 4) {
        let sum = 0, count = 0;
        for (let num of array) {
            if (num > 0) {
                sum += num;
                count++;
            }
        }
        let avg = count > 0 ? sum / count : 0;
        alert("Tổng số dương: " + sum + "\nTrung bình cộng: " + avg);
    } else if (choice === 5) {
        array.reverse();
        alert("Mảng sau khi đảo ngược: " + array.join(", "));
    } else if (choice === 6) {
        let isSymmetric = true;
        for (let i = 0; i < Math.floor(array.length / 2); i++) {
            if (array[i] !== array[array.length - 1 - i]) {
                isSymmetric = false;
                break;
            }
        }
        alert("Mảng " + (isSymmetric ? "đối xứng" : "không đối xứng"));
    }
} while (choice !== 7);