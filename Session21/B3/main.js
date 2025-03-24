const correctPassword = "123456";
let inputPassword;

do {
    inputPassword = prompt("Nhập mật khẩu:");
    if (inputPassword !== correctPassword) {
        console.log("Sai mật khẩu! Vui lòng thử lại.");
    }
} while (inputPassword !== correctPassword);

console.log("Mật khẩu chính xác! Đăng nhập thành công.");
