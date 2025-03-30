function tinhTong(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || !Number.isInteger(a) || !Number.isInteger(b)) {
      return "dữ liệu không hợp lệ";
    }
    return a + b;
  }
  
  console.log(tinhTong(2, 6));
  console.log(tinhTong(3, "text"));
  console.log(tinhTong(7, -7));
  console.log(tinhTong(4.5, 3));