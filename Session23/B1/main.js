let input = 0;
let arr = [];
let flag = 0;

for(let i = 0; i < 10; i++) {
    input = Number(prompt("Mời nhập số"));
    if(input > 10)  {
        arr.push(input);
        flag = 1;
    }
}

if(flag == 1)   {
    console.log(arr);
}
else    {
    console.log("Không có số nào lớn hơn 10");
}

