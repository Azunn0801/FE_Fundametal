let hour = Number(prompt("Nhập giờ:"));
let minute = Number(prompt("Nhập phút:"));
let second = Number(prompt("Nhập giây:"));

let period = (hour >= 12) ? "PM" : "AM";

hour = (hour % 12 === 0) ? 12 : hour % 12;

alert(`Giờ hiện tại: ${hour}:${minute}:${second} ${period}`);
