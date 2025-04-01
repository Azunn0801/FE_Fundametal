function tinhDienTichHinhTron(r) {
    return Math.PI * r * r;
}

function tinhChuViHinhTron(r) {
    return 2 * Math.PI * r;
}

function tinhDienTichHinhChuNhat(d, r) {
    return d * r;
}

function tinhChuViHinhChuNhat(d, r) {
    return 2 * (d + r);
}

function menu() {
    let chon;
    do {
        chon = parseInt(prompt("Chọn chức năng:\n1. Tính diện tích hình tròn\n2. Tính chu vi hình tròn\n3. Tính diện tích hình chữ nhật\n4. Tính chu vi hình chữ nhật\n5. Thoát"));
        switch (chon) {
            case 1:
                let r1 = parseFloat(prompt("Nhập bán kính: "));
                alert("Diện tích hình tròn: " + tinhDienTichHinhTron(r1));
                break;
            case 2:
                let r2 = parseFloat(prompt("Nhập bán kính: "));
                alert("Chu vi hình tròn: " + tinhChuViHinhTron(r2));
                break;
            case 3:
                let d1 = parseFloat(prompt("Nhập chiều dài: "));
                let r3 = parseFloat(prompt("Nhập chiều rộng: "));
                alert("Diện tích hình chữ nhật: " + tinhDienTichHinhChuNhat(d1, r3));
                break;
            case 4:
                let d2 = parseFloat(prompt("Nhập chiều dài: "));
                let r4 = parseFloat(prompt("Nhập chiều rộng: "));
                alert("Chu vi hình chữ nhật: " + tinhChuViHinhChuNhat(d2, r4));
                break;
            case 5:
                alert("Thoát chương trình.");
                break;
            default:
                alert("Lựa chọn không hợp lệ.");
        }
    } while (chon !== 5);
}

menu();