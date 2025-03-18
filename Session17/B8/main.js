let input1 = prompt("Nhập ngày 1 (YYYY-MM-DD):");
let input2 = prompt("Nhập ngày 2 (YYYY-MM-DD):");
let date1 = new Date(input1);
let date2 = new Date(input2);
let diff = date2 - date1;
alert("Độ lệch là: " + diff/(1000*60*60*24));