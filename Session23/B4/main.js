let n = Number(prompt("Nhập số lượng phần tử: "))

if(n < 1)  {
    console.log("Không có ký tự số")
}

else    {
    let input
    let arr = []
    let flag = false
    for(let i = 0; i < n; i++)  {
        input = prompt("Nhập phần tử thứ " + i )
        arr.push(input)
        if(!isNaN(arr[i]))  {
            console.log(arr[i])
            flag = true;
        }
    }
    if(!flag)   {
        console.log("Không có ký tự số")
    }
}