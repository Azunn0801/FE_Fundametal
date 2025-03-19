let a = Number(prompt("Nhập cạnh a:"));
let b = Number(prompt("Nhập cạnh b:"));
let c = Number(prompt("Nhập cạnh c:"));

if (a == b && a == c && c == b) {
  alert("Tam giác đều");
} else if ((a == c && a == b) || (b == a && b == c) || (c == a && c == b)) {
  alert("Tam giác cân");
} else if (
  b * b == a * a + c * c ||
  a * a == c * c + b * b ||
  c * c == a * a + b * b
) {
  alert("Tam giác vuông");
} else {
  alert("Tam giác thường");
}
