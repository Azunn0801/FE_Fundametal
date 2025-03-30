function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

const inputString = prompt("Nhập chuỗi để kiểm tra:");

if (isPalindrome(inputString)) {
  alert("Là chuỗi đối xứng");
} else {
  alert("Không phải chuỗi đối xứng");
}