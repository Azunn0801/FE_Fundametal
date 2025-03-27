let n = Number(prompt("Nhập số lượng phần tử:"));

if (isNaN(n) || n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let input = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
        arr.push(input);
    }

    if (uniqueArr.length < 2) {
        console.log("Không thể tìm số lớn thứ 2");
    } else {
        arr.sort((a, b) => b - a);
        console.log("Số lớn thứ 2 là:", arr[1]);
    }
}
