let input = 0;
let arr = [];
let maxnum = 0;
let maxpos = 0;

for(let i = 0; i < 10; i++) {
    input = Number(prompt("Mời nhập số"));
    arr.push(input);
    if(input > maxnum)  {
        maxnum = input;
        maxpos = i;
    }
}

if(arr.length < 1)   {
    console.log("Không có số nào lớn nhất");
}
else    {
    console.log("Số lớn nhất: " + maxnum);
    console.log("Vị trí: " + maxpos);
}

