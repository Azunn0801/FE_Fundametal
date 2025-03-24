let chan = 0;
let le = 0;
for (let i = 0; i < 5; i++) {
    let input = parseInt(prompt("Nhập số nguyên n:"));
    if (input % 2 == 0) {
        chan++;
    }

    else {
        le++;
    }
}

alert("Tổng các số chắn và lẻ lần lượt là: " + chan + " " + le);
