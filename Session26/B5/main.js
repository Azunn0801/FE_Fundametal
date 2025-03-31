function filterNum(input) {
    if (!Array.isArray(input)) {
        return "Dữ liệu không hợp lệ"
    }

    const result = input.reduce((acc, currNum, currIdx) => {
        if (typeof currNum === "number" && currNum > acc.value) {
            return { value: currNum, index: currIdx }
        }
        return acc
    }, { value: -Infinity, index: -1 })

    return result.value === -Infinity 
        ? "Mảng không có phần tử nào" 
        : `max = ${result.value}, position: ${result.index}`
}

console.log(filterNum([10, 9, 5, 11, 24, 5]))
console.log(filterNum([]))
console.log(filterNum("abc"))
