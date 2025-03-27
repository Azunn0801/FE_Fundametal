let array = [];
let choice;
do {
    choice = parseInt(prompt("Chọn chức năng:\n1. Nhập mảng số nguyên\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n4. Tính tổng các phần tử trong mảng\n5. Tìm số lần xuất hiện của một phần tử trong mảng\n6. Sắp xếp mảng tăng dần\n7. Thoát"));
    if (choice === 1) {
        array = [];
        let size = parseInt(prompt("Nhập số phần tử của mảng: "));
        for (let i = 0; i < size; i++) {
            array[i] = parseInt(prompt(`Nhập phần tử thứ ${i}:`));
        }
    } else if (choice === 2) {
        alert("Mảng: " + array.join(", "));
    } else if (choice === 3) {
        let max = Math.max(...array);
        let min = Math.min(...array);
        alert(`Phần tử lớn nhất: ${max}\nPhần tử nhỏ nhất: ${min}`);
    } else if (choice === 4) {
        let sum = array.reduce((a, b) => a + b, 0);
        alert("Tổng các phần tử: " + sum);
    } else if (choice === 5) {
        let num = parseInt(prompt("Nhập phần tử cần tìm: "));
        let count = array.filter(x => x === num).length;
        alert(`Số lần xuất hiện của ${num}: ${count}`);
    } else if (choice === 6) {
        let sortedArray = [...array].sort((a, b) => a - b);
        alert("Mảng sau khi sắp xếp tăng dần: " + sortedArray.join(", "));
    }
} while (choice !== 7);
