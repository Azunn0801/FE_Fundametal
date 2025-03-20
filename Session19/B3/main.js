let input = Number(prompt("Nhập loại tiền muốn đổi:"));
let currency = Number(prompt("Nhập mệnh giá:"));
let rate = 23000;
let res;

switch (input) {
    case "VND":
        res = 23000 * currency;
        break;
    case "USD":
        res = currency / 23000;
        break;
    default:
        alert("null");
}

alert(res);