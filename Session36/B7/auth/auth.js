function registerAccount() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "" || password === "") {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(user => user.username === username)) {
        alert("Tên đăng nhập đã tồn tại.");
        return;
    }
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công!");
    redirect("login");
}

function validateAccount() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;
    if (usernameInput === "" || passwordInput === "") {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.username === usernameInput && user.password === passwordInput);
    if (user) {
        if (remember) {
            localStorage.setItem("verify", "true");
            localStorage.setItem("username", usernameInput);
        } else {
            sessionStorage.setItem("verify", "true");
            sessionStorage.setItem("username", usernameInput);
        }
        redirect("index", true);
    } else {
        alert("Tài khoản hoặc mật khẩu không đúng.");
    }
}

function redirect(page, toRoot = false) {
    if (toRoot) {
        window.location.href = `../${page}.html`;
    } else {
        window.location.href = `${page}.html`;
    }
}