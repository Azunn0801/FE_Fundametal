let a = Number(prompt("Nhập số a: "));
let b = Number(prompt("Nhập số b: "));
let op = prompt("Nhập phép tính (+, -, *, /)");

let res;

switch  (op)    {
    case "+":
    res = a + b;
    break;
    case "-":
    res = a - b;
    break;
    case "*":
    res = a * b;
    case "/":
        res = a / b;
        break;
    default:
        alert("null");
        break;
}

alert("Kết quả phép tính " + a + " " + op + " " + b + " là: " + res);
