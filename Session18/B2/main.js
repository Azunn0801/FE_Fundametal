let math = Number(prompt("Nhập điểm toán:"));
let literature = Number(prompt("Nhập điểm văn:"));
let english = Number(prompt("Nhập điểm anh:"));

let avg = (math + literature + english) / 3;

alert(
  "Điểm trung bình 3 môn: " + avg.toFixed(2) + "Học lực: " + (avg >= 8)
    ? "Giỏi"
    : avg >= 6.5
    ? "Khá"
    : avg >= 5
    ? "Trung bình"
    : Yếu
);
