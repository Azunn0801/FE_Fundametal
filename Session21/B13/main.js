let width = parseInt(prompt("Nhập chiều rộng hình chữ nhật:"));
let height = parseInt(prompt("Nhập chiều cao hình chữ nhật:"));

if (isNaN(width) || isNaN(height) || width < 2 || height < 2) {
    document.write("Chiều rộng và chiều cao phải >= 2!");
} else {
    for (let i = 0; i < height; i++) {
        if (i === 0 || i === height - 1) {
            document.write("*".repeat(width) + "<br>");
        } else {
            document.write("*" + "&nbsp;".repeat((width - 2) * 2) + "*" + "<br>");
        }
    }
}
