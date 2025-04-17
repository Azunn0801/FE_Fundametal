const verify = localStorage.getItem("verify")
const username = localStorage.getItem("username")
const password = localStorage.getItem("password")
if (verify === true) {
    window.location.href = "./index.html"
} else {
    window.location.href = "./auth/login.html"
}

function redirect(website) {
    if (website === "home") {
        window.location.href = "./auth/index.html"
    } else if (website === "login") {
        window.location.href = "./auth/login.html"
    } else if (website === "register") {
        window.location.href = "./auth/register.html"
    } else if (website === "logout") {
        logout()
    }
    else {
        window.location.href = "./auth/login.html"
    }
}

function logout() {
    localStorage.removeItem("verify");
    localStorage.removeItem("username");
    sessionStorage.removeItem("verify");
    sessionStorage.removeItem("username");
    window.location.href = "auth/login.html";
}