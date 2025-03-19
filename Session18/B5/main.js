let input = Number(prompt("Nhập số năm kinh nghiệm"));

switch (input) {
  case 0:
    alert("Mới vào nghề");
    break;
  case 1:
  case 2:
  case 3:
    alert("Nhân viên có kinh nghiệm");
    break;
  case 4:
  case 5:
  case 6:
    alert("Chuyên viên");
  default:
    if (input >= 7) {
      alert("Quản lý");
    } else {
      alert("null");
    }
    break;
}
