let input = prompt("Nhập vào một dãy số:");

if (/^\d+$/.test(input)) {
    let output = input.split('').reverse().join('');
    console.log("Output:", output);
} else {
    console.log("dãy không hợp lệ");
}
