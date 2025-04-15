function addAcc(event)  {
    event.preventDefault()
    if (event.target.emailInput.value === "" || event.target.pwInput.value === "" || event.target.pwConfirm.value === "") {
        alert("Please fill in all fields")
        return
    }
    else if (event.target.pwInput.value !== event.target.pwConfirm.value) {
        alert("Passwords do not match")
        return
    }
    else    {
        localStorage.setItem("email", event.target.emailInput.value)
        localStorage.setItem("password", event.target.pwInput.value)
        alert("Account created successfully")
    }

}