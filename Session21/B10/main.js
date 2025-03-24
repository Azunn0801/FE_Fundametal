let input = Number(prompt("Nhập số bất kì:"));
let flag = 1;

document.writeln("Số nguyên tố từ 1 tới n là:");

for (let i = 2; i <= input; i++) {
    let flag = 1;
    for (let j = 2; j * j <= i; j++) {
        if (i % j == 0) {
            flag = 0;
            continue;
        }
    }
    if (flag == 1) {
        document.writeln(i);
    }
}