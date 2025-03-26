let n = Number(prompt("Nhập số lượng phần tử: "))

if(n == 0)  {
    console.log("Mảng không có phần tử")
}
else if( n < 0) {
    console.log("Số lượng phần tử không được âm")
}

else    {
    let input
    let arr = []
    let flag = false
    let sum = 0
    for(let i = 0; i < n; i++)  {
        input = prompt("Nhập phần tử thứ " + i )
        arr.push(input)
        if(!isNaN(arr[i]))  {
            sum += parseInt(arr[i])
            flag = true;
        }
    }
    if(!flag)   {
        console.log("Không có phần tử nào là số")
    }
    else    {
        console.log(sum)
    }
}