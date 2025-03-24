let input = Number(prompt("Nhập số bất kì:"));
let flag = 1;

if(input <= 2)  {
    alert("Không phải số nguyên tố");
}

else    {
    for(let i = 2; i * i <= input; i++) {
        if(input % i == 0)  {
            alert("Không phải số nguyên tố");
            flag = 0;
            break;
        }
    }
}

if(flag == 1)   {
    alert("Là số nguyên tố");
}