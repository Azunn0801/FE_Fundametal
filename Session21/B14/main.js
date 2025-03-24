let amount = parseInt(prompt("Nhập số tiền cần rút (phải chia hết cho 1000):"));

if (isNaN(amount) || amount % 1000 !== 0 || amount <= 0) {
    document.writeln("Số tiền nhập vào không hợp lệ. Vui lòng nhập số chia hết cho 1000.");
} else {
    document.writeln(`Số tiền cần rút: ${amount.toLocaleString()} VND`);
    document.writeln("Chi tiết số tờ tiền:");

    let count500k = Math.floor(amount / 500000);
    amount -= count500k * 500000;
    if (count500k > 0) document.writeln(`500.000 - ${count500k} tờ`);

    let count200k = Math.floor(amount / 200000);
    amount -= count200k * 200000;
    if (count200k > 0) document.writeln(`200.000 - ${count200k} tờ`);

    let count100k = Math.floor(amount / 100000);
    amount -= count100k * 100000;
    if (count100k > 0) document.writeln(`100.000 - ${count100k} tờ`);

    let count50k = Math.floor(amount / 50000);
    amount -= count50k * 50000;
    if (count50k > 0) document.writeln(`50.000 - ${count50k} tờ`);

    let count20k = Math.floor(amount / 20000);
    amount -= count20k * 20000;
    if (count20k > 0) document.writeln(`20.000 - ${count20k} tờ`);

    let count10k = Math.floor(amount / 10000);
    amount -= count10k * 10000;
    if (count10k > 0) document.writeln(`10.000 - ${count10k} tờ`);

    let count5k = Math.floor(amount / 5000);
    amount -= count5k * 5000;
    if (count5k > 0) document.writeln(`5.000 - ${count5k} tờ`);

    let count2k = Math.floor(amount / 2000);
    amount -= count2k * 2000;
    if (count2k > 0) document.writeln(`2.000 - ${count2k} tờ`);

    let count1k = Math.floor(amount / 1000);
    amount -= count1k * 1000;
    if (count1k > 0) document.writeln(`1.000 - ${count1k} tờ`);
}
