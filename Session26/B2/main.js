function filterStr(input) {
    if (!Array.isArray(input)) {
        return "Dữ liệu không hợp lệ";
    }
    
    const result = input.filter(str => typeof str === "string" && str.length > 5);
    
    return result.length > 0 ? result : "Mảng không có phần tử nào";
}

console.log(filterStr(["apple", "banana", "cat", "elephant", "dog"]));
console.log(filterStr([]));
console.log(filterStr("abc"));
