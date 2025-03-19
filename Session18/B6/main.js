let input = Number(prompt("Nhập năm:"));

if (input % 400 == 0 || (input % 4 == 0 && input % 100 != 0)) {
  alert("Là năm nhuận");
} else {
  alert("Không là năm nhuận");
}
