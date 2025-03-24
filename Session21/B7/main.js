let tienGoc = parseFloat(prompt("Nhập số tiền gửi ban đầu:"));
let laiSuatThang = parseFloat(prompt("Nhập lãi suất hàng tháng (%):"));
let soThang = parseInt(prompt("Nhập số tháng gửi:"));

let tienNhan = tienGoc;

for (let i = 0; i < soThang; i++) {
    tienNhan += tienNhan * (laiSuatThang / 100);
}

let tienLai = tienNhan - tienGoc;

console.log(`Tiền lãi: ${tienLai.toFixed(3)}`);
console.log(`Tiền nhận được: ${tienNhan.toFixed(3)}`);

alert(`Tiền lãi: ${tienLai.toFixed(3)}\nTiền nhận được: ${tienNhan.toFixed(3)}`);
