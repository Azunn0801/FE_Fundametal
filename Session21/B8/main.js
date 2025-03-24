for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        for (let k = 1; k <= 9; k++) {
            if(Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3) === i * 100 + j * 10 + k)   {
                document.writeln(i * 100 + j * 10 + k);
            }
        }
    }
}