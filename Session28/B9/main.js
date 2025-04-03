let books = [{id: 1, title: `The Great Gatsby`, author: `F. Scott Fitzgerald`, year: `1925`, price: `10.99`, isAvailable: true}];
function addBook() {
    let id;
    while(true){
        id = +prompt("Hay nhap id:")
        if (books.some(book => book.id == id)) {
            alert("ID da ton tai, hay nhap lai")
            continue
        }
        break
    }
    let title = prompt("Hay nhap ten sach:")
    let author = prompt("Hay nhap tac gia:")
    let year = prompt("Hay nhap nam xuat ban:")
    let price = prompt("Hay nhap gia:")
    let isAvailable = true

    books.push({id,title, author,year, price, isAvailable})
    
}

function showBooks() {
    // for (let i = 0; i < books.length; i++) {
    //     console.log(`ID: ${books[i].id}, Title: ${books[i].title}, Author: ${books[i].author}, Year: ${books[i].year}, Price: ${books[i].price}, Status: ${books[i].status}`);
    // }
    books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Price: ${book.price}, Status: ${book.isAvailable}`);
    });
}

function searchBook() {
    let searchTitle = prompt("Hay nhap ten sach can tim:").toLowerCase();
    for (let i = 0; i < books.length; i++) {
        if (books[i].title.toLowerCase().includes(searchTitle)) {
            alert(`ID: ${books[i].id}, Title: ${books[i].title}, Author: ${books[i].author}, Year: ${books[i].year}, Price: ${books[i].price}, isAvailable: ${books[i].isAvailable}`);
        }
    }
}

function updateBookStatus() {
    let findId = +prompt("Hay nhap id sach can cap nhat:");
    for (let i = 0; i < books.length; i++) {
        if (books[i].id == findId) {
            books[i].isAvailable = !books[i].isAvailable;
            alert(`Sach ${books[i].title} da duoc ${books[i].isAvailable ? "muon" : "tra"}`);
        }
    }
}

function deleteBook() {
    let findId = +prompt("Hay nhap id sach can xoa:");
    for (let i = 0; i < books.length; i++) {
        if (books[i].id == findId) {
            books.splice(i, 1); ///
            alert(`Sach ${books[i].title} da duoc xoa khoi danh sach`);
        }
    }
}

function sortBooksByPrice() {
    books.sort((a, b) => a.price - b.price);
}

function menu() {
    let choice;
    do {
    console.log("-----------------------------------------------------");
    console.log("1. Them sach moi");
    console.log("2. Hien thi danh sach sach");
    console.log("3. Tim kiem sach theo ten");
    console.log("4. Cap nhat trang thai muon/tra sach theo id sach");
    console.log("5. Xoa sach theo id sach ra khoi danh sach");
    console.log("6. Sap xep sach theo gia tang dan");
    console.log("7. Thoat");
    console.log("-----------------------------------------------------");
    choice = prompt("Nhap vao lua chon:")

    switch (choice) {
        case "1":
            addBook();
            break;
        case "2":
            showBooks();
            break;
        case "3":
            searchBook();
            break;
        case "4":
            updateBookStatus();
            break;
        case "5":
            deleteBook();
            break;
        case "6":
            sortBooksByPrice();
            break;
        case "7":
            alert("Ket thuc chuong trinh");
            break;
        default:
            alert("Khong co lua chon nay");
            break;
    }
    } while (choice != "7");
}
menu();