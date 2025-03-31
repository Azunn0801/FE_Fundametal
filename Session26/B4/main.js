function checkEle(number)  {
    if(number < 2)  {
        return false
    }

    for(let i = 2; i * i <= number; i++) {
        if(number % i === 0)    {
            return false
        }
    }

    return true
}

function filterNum(input) {
    if (!Array.isArray(input)) {
        return "Dữ liệu không hợp lệ";
    }

    const result = input.filter(num => typeof num === "number" && checkEle(num));

    return result.length > 0 ? result : "Mảng không có phần tử nào";
}

console.log(filterNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(filterNum([]))
console.log(filterNum("abc"))
