let input = Number(prompt("Nhập số bất kì: "));

if (isNaN(input) || input % 1 !== 0 || input < 0) {
    alert("Dữ liệu nhập vào không hợp lệ");
} else {
    let original = input;
    let rev = 0;

    while (input > 0) {
        rev = rev * 10 + (input % 10);
        input = Math.floor(input / 10);
    }

    if (rev === original) {
        alert("Là số đảo ngược");
    } else {
        alert("Không phải số đảo ngược");
    }
}
