let str = prompt("Mời nhập 3 số bất kì");

let numbers = str.split(' ').map(Number);

let maxnum = Math.max(...numbers);

alert("Số lớn nhất trong 3 số là: " + maxnum);