let input = prompt("Nhập vào một dãy số:");
 
if (/^\d+$/.test(input)) {
    let numbers = input.split('').map(Number); 
    let maxNumber = Math.max(...numbers);
    console.log(`${maxNumber} là số lớn nhất trong dãy số`);
} else {
    console.log("dãy số không hợp lệ");
}
