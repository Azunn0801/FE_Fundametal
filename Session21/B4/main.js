let a = Number(prompt("Nhập hệ số a: "));
let b = Number(prompt("Nhập hệ số b: "));
let c = Number(prompt("Nhập hệ số c: "));
let delta = b*b - 4*a*c;
if (delta < 0) {
    alert("Phương trình vô nghiệm");
}
else if (delta === 0) {
    alert("Phương trình có nghiệm kép x = " + -b/(2*a));
}
else {
    alert("Phương trình có hai nghiệm phân biệt: x1 = " + (-b + Math.sqrt(delta))/(2*a) + " và x2 = " + (-b - Math.sqrt(delta))/(2*a));
}