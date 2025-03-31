function filterEvenSquares(input) {
  if (!Array.isArray(input)) {
    return "Dữ liệu không hợp lệ";
  }

  if (input.length === 0) {
    return "Mảng không có dữ liệu";
  }

  const squaredEvens = input
    .map(num => num * num)
    .filter(squaredNum => squaredNum % 2 === 0);

  return squaredEvens;
}

console.log(filterEvenSquares([2, 5, 10]));
console.log(filterEvenSquares([]));
console.log(filterEvenSquares("abc"));