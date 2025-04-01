function nhapDanhSach() {
    let arr = prompt("Nhập danh sách số nguyên, cách nhau bởi dấu phẩy:").split(",").map(Number);
    return arr;
}

function tinhTrungBinh(arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function timSoChanLonNhat(arr) {
    let maxChan = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && (maxChan === null || arr[i] > maxChan)) {
            maxChan = arr[i];
        }
    }
    return maxChan;
}

function timSoLeNhoNhat(arr) {
    let minLe = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && (minLe === null || arr[i] < minLe)) {
            minLe = arr[i];
        }
    }
    return minLe;
}

function menu() {
    let chon;
    let danhSach = [];
    do {
        chon = parseInt(prompt("Chọn chức năng:\n1. Nhập danh sách số nguyên\n2. Tính trung bình các số\n3. Tìm số chẵn lớn nhất\n4. Tìm số lẻ nhỏ nhất\n5. Thoát"));
        switch (chon) {
            case 1:
                danhSach = nhapDanhSach();
                alert("Danh sách đã nhập: " + danhSach.join(", "));
                break;
            case 2:
                alert("Trung bình các số: " + tinhTrungBinh(danhSach));
                break;
            case 3:
                let soChanMax = timSoChanLonNhat(danhSach);
                alert(soChanMax !== null ? "Số chẵn lớn nhất: " + soChanMax : "Không có số chẵn");
                break;
            case 4:
                let soLeMin = timSoLeNhoNhat(danhSach);
                alert(soLeMin !== null ? "Số lẻ nhỏ nhất: " + soLeMin : "Không có số lẻ");
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