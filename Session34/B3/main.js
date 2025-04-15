const email = localStorage.getItem("email")
const password = localStorage.getItem("password")

function validateAcc(event)  {
    event.preventDefault()
    if (event.target.emailInput.value === "" || event.target.pwInput.value === "") {
        alert("Please fill in all fields")
        return
    }
    else if (event.target.emailInput.value === email && event.target.pwInput.value === password) {
        alert("Login successful")
        window.location.href = "home.html"
    }
    else    {
        alert("Invalid email or password")
        return
    }
}