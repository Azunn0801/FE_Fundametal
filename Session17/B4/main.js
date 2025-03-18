let input = Number(prompt("Nhập số bất kì: "));
let sqrt = Math.sqrt(input);
if (input < 0) {
  alert("Vui lòng nhập số dương");
}
else {
    alert(`Căn bậc 2 của ${input} là: ${sqrt}`);
}