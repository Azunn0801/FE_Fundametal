let input = parseInt(prompt("Nhập số nguyên n:"));
let res = 0;

if (input % 1 != 0) {
    alert("Dữ liệu nhập vào không hợp lệ");
}


else {
    for (let i = 1; i <= input; i++) {
        res += i;
    }

    alert(res);
}
