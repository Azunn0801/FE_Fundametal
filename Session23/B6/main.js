let n = Number(prompt("Nhập số lượng phần tử: "));

if (isNaN(n) || n < 0) {
    console.log("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
    console.log("Mảng không có phần tử");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let input = prompt("Nhập phần tử thứ " + (i + 1) + ":");
        arr.push(input);
    }

    let filteredArr = arr.filter(Boolean);

    console.log("Mảng sau khi loại bỏ falsy:", filteredArr);
}
