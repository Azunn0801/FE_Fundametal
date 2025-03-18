let input = Number(prompt("Nhập số tiền: "));
let converted = input.toLocaleString('vi', {style : 'currency', currency : 'VND'});
alert(`Số tiền sau khi định dạng: ${converted}`);