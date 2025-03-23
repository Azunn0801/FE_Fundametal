let input = Number(prompt("Nhập số nguyên n:"));

if (isNaN(input) || input % 1 != 0) {
    alert("Dữ liệu nhập vào không hợp lệ");
} else {
    document.writeln("Các số chia hết cho " + input + " từ 1 đến " + input + " là: <br>");

    for (let i = 1; i <= input / 2; i++) {
        if (input % i == 0) {
            document.write(i + ", ");
        }
    }
    document.write(input);
}
