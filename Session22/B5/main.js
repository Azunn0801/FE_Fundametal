let arr = [1, 4, 7, 8, 3];

let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sumEven += arr[i];
    } else {
        sumOdd += arr[i];
    }
}

console.log("Tổng các số chẵn:", sumEven);
console.log("Tổng các số lẻ:", sumOdd);
