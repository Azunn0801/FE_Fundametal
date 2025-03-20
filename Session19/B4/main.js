let input = Number(prompt("Enter a number: "));

if(input % 3 == 0 && input % 5 == 0)    {
    alert(input + "chia hết cho 3 và 5");
}

else    {
    alert(input + "không chia hết cho 3 và 5");
}