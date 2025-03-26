let n = Number(prompt("Nhập số lượng phần tử:"));

if (isNaN(n) || n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Không phải dãy số fibonacci");
} else {
    let arr = [];
    let flag = true;
    for (let i = 0; i < n; i++) {
        let input = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
        arr.push(input);
    }

    for(let i = 2; i < n; i++)  {
        if(arr[i - 2] + arr[i - 1] !== arr[i])  {
            console.log("Không phải dãy số fibonacci")
            flag = false
            break
        }
    }

    if(flag)    {
        console.log("Là dãy số fibonacci")
    }
}
