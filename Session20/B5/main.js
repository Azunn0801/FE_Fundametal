let a = prompt("Nhập số a:");
let b = prompt("Nhập số b:");

a = Number(a);
b = Number(b);

if (isNaN(a) || isNaN(b) || !Number.isInteger(b) || b < 0) {
    alert("Không hợp lệ");
} else {
    let result = 1;

    for (let i = 0; i < b; i++) {
        result *= a;
    }

    alert(`Kết quả: ${result}`);
}
