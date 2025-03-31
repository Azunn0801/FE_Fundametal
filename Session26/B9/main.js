function filterOddPrimes(input) {
  if (!Array.isArray(input)) {
    return "Dữ liệu không hợp lệ";
  }

  if (input.length === 0) {
    return "Mảng không có dữ liệu";
  }

  const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const oddPrimes = input.filter(num => isPrime(num) && num % 2 !== 0);

  return oddPrimes;
}

console.log(filterOddPrimes([10, 2, 3, 5, 7, 9]));
console.log(filterOddPrimes([]));
console.log(filterOddPrimes("abc"));