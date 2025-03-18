let input;
do {
    input = Number(prompt("Nhập số nguyên không âm: "));
} while (input < 0 || isNaN(input));

let res = "";

if (input === 0) {
    res = "0";
} else {
    while (input > 0) {
        res = (input % 2) + res;
        input = Math.floor(input / 2);
    }
}

console.log(res);
