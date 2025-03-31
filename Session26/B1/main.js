let n = Number(prompt("Nhập số phần tử"))
let arr = []
if(n === 0) {
    console.log("Mảng không có phần tử nào")
}

else if(isNaN(n))   {
    console.log("Dữ liệu không hợp lệ")
}

else    {
    let inpArr = 0
    for(let i = 0; i < n; i++)  {
        inpArr = Number(prompt(`Nhập phần tử thứ [${i}]`))
        arr.push(inpArr)
    }

    const res = arr.filter((num) => num > 10)
    console.log(res)
}