let n = Number(prompt("Nhập số lượng phần tử: "));

if(n == 0)  {
    console.log("Mảng không có phần tử");
}

else if(n < 0)  {
    console.log("Số lượng phần tử không hợp lệ");
}

else    {
    let arr = [];
    let input;
    let count = 0;
    for(let i = 0; i < n; i++)  {
        input = parseFloat(prompt("Nhập phần tử thứ " + i));
        arr.push(input);
        if(arr[i] < 0)  {
            count++;
        }
    }
    console.log(count);
}