function kiemTraSoNguyenTo(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n <= 1) {
    return "dữ liệu không hợp lệ";
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return "không phải là số nguyên tố";
    }
  }

  return "là số nguyên tố";
}

console.log(kiemTraSoNguyenTo(17));
console.log(kiemTraSoNguyenTo(6));
console.log(kiemTraSoNguyenTo("text"));