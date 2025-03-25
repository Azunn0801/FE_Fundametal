let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7]; 
let input = 2;

let count = 0; 

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === input) {
        count++;
    }
}

if (count > 0) {
    console.log(`${input} xuất hiện ${count} lần trong mảng`);
} else {
    console.log(`${input} không tồn tại trong mảng`);
}
