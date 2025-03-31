function filterStr(input) {
    if (!Array.isArray(input)) {
        return "Dữ liệu không hợp lệ";
    }
    
    const result = input.filter(str => typeof str === "string" && str.split("").some(char => char === "@"));
    
    return result.length > 0 ? result : "Mảng không có phần tử nào";
}

console.log(filterStr(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"]));
console.log(filterStr([]));
console.log(filterStr("abc"));
