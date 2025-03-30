function timSoChan(arr) {
    if (!Array.isArray(arr)) {
      return "dữ liệu không hợp lệ";
    }
  
    const soChan = arr.filter(num => typeof num === 'number' && num % 2 === 0);
  
    if (soChan.length === 0) {
      return "mảng không chứa số chẵn";
    }
  
    return soChan.join(', ');
  }
  
  console.log(timSoChan([11, 4, 65, 6]));
  console.log(timSoChan([1, 3, 5, 17]));
  console.log(timSoChan("text"));