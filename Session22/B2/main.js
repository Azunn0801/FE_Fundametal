let arr = [2, 5, 7, 1, 4, 8, 6];
let flag = 0;
let input = Number(prompt("Mời nhập số"));

for(let i = 0; i < arr.length; i++) {
    if(input == arr[i]) {
        console.log("Bingo");
        flag = 1;
        break;
    }
}

if(flag == 0)   {
    console.log("Chúc bạn may mắn lần sau");
}