function demSoNguyenDuong(arr) {
  if (!Array.isArray(arr)) {
    return "dữ liệu không hợp lệ";
  }

  let count = 0;
  for (let num of arr) {
    if (Number.isInteger(num) && num > 0) {
      count++;
    }
  }

  if (count === 0) {
    return "không có số nguyên dương trong mảng";
  }

  return count;
}

console.log(demSoNguyenDuong([4, 5.4, 6, -2]));
console.log(demSoNguyenDuong([1, 2, 5, 7, -8, 6]));
console.log(demSoNguyenDuong([1.2, -3, -6]));