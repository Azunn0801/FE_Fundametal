let array = [];
let choice;
do {
    choice = parseInt(prompt("Chọn chức năng:\n1. Nhập mảng số nguyên\n2. Hiển thị mảng\n3. Tìm các phần tử chẵn và lẻ\n4. Tính trung bình cộng của mảng\n5. Xóa phần tử tại vị trí chỉ định\n6. Tìm phần tử lớn thứ hai trong mảng\n7. Thoát"));
    if (choice === 1) {
        array = [];
        let size = parseInt(prompt("Nhập số phần tử của mảng: "));
        for (let i = 0; i < size; i++) {
            array[i] = parseInt(prompt(`Nhập phần tử thứ ${i}:`));
        }
    } else if (choice === 2) {
        alert("Mảng: " + array.join(", "));
    } else if (choice === 3) {
        let even = [], odd = [];
        for (let num of array) {
            if (num % 2 === 0) even.push(num);
            else odd.push(num);
        }
        alert("Phần tử chẵn: " + even.join(", ") + "\nPhần tử lẻ: " + odd.join(", "));
    } else if (choice === 4) {
        let sum = array.reduce((a, b) => a + b, 0);
        let avg = array.length > 0 ? sum / array.length : 0;
        alert("Trung bình cộng của mảng: " + avg);
    } else if (choice === 5) {
        let index = parseInt(prompt("Nhập vị trí cần xóa: "));
        if (index >= 0 && index < array.length) {
            array.splice(index, 1);
            alert("Mảng sau khi xóa: " + array.join(", "));
        } else {
            alert("Vị trí không hợp lệ!");
        }
    } else if (choice === 6) {
        let max = Math.max(...array);
        let filtered = array.filter(num => num !== max);
        let secondMax = Math.max(...filtered);
        alert("Phần tử lớn thứ hai: " + secondMax);
    }
} while (choice !== 7);