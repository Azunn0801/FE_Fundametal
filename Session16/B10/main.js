let Input1= Number(prompt("Nhập số a bất kì"));
let Input2= Number(prompt("Nhập số b bất kì"));
let random = Math.floor(Math.random() * (Input2 - Input1 + 1)) + Input1;
alert("Số ngẫu nhiên trong khoảng từ a đến b là: " + random);