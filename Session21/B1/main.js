let res = 0;
for (let i = 0; i < 5; i++) {
    let input = parseInt(prompt("Nhập số nguyên n:"));
    if (input % 2 != 0) {
        res += input;
    }
}

alert("Tổng các số lẻ đã nhập là: " + res);
