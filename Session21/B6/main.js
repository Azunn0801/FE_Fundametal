let input = Number(prompt("Enter a number: "));

for(let i = 1; i <= input / 2; i++)  {
    if(input % i == 0)  {
        document.writeln(i + " ");
    }
}