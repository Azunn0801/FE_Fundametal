sslet n = prompt("Nhập một số nguyên:");
n = Number(n); 

function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) { 
        if (n % i === 0) return false; 
    }

    return true;
}

if (isNaN(n) || !Number.isInteger(n)) {
    alert("Vui lòng nhập một số nguyên hợp lệ!");
} else {
    if (isPrime(n)) {
        alert(`${n} là số nguyên tố`);
    } else {
        alert(`${n} không phải là số nguyên tố`);
    }
}
