let username = prompt("Enter username:");

if(username === "ADMIN")  {
    let password = prompt("Enter password:");
    if(password === "TheMaster")    {
        alert("Welcome");
    }
    else    {
        alert("Wrong password");
    }
}

else if(!username)  {
    alert("Cancelled");
}

else    {
    alert("I Don’t know you");
}