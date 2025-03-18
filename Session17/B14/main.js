let r = Number(prompt("Nhập bán kính: "));
let h = Number(prompt("Nhập chiều cao: "));
let Sxq = 2 * 3.14 * r * h;
let Stp = 2 * 3.14 * r * h + 3.14 * 2 * Math.pow(r, 2);
let V = 3.14 * 2 * Math.pow(r, 2) * h;
let P = 2 * 2 * 3.14 * r;

document.writeln("Diện tích xung quanh hình trụ là: ", Sxq, "<br>");
document.writeln("Diện tích toàn phần hình trụ là: ", Stp, "<br>");
document.writeln("Thể tích hình trụ là: ", V, "<br>");
document.writeln("Chu vi đáy hình trụ là: ", P, "<br>");