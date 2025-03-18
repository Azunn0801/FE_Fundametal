let r = Number(prompt("Nhập bán kính: "));

let S = 4 * Math.PI * Math.pow(r, 2);
let V = 4 / 3 * Math.PI * Math.pow(r, 3);
let P = 2 * Math.PI * r;

document.writeln("Diện tích bề mặt hình cầu là: ", S.toFixed(2), "<br>");
document.writeln("Thể tích hình cầu là: ", V.toFixed(2), "<br>");
document.writeln("Chu vi lớn nhất hình cầu là: ", P.toFixed(2), "<br>");