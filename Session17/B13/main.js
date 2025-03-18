let amount = Number(prompt("Nhập số tiền gửi: "));
let month = Number(prompt("Nhập số tháng gửi:"));
let profit = .043/12;

let res = amount * Math.pow((1 + profit), month) - amount;

alert("Số tiền lãi nhận được sau " + month + "Tháng: " + res.toFixed(2));