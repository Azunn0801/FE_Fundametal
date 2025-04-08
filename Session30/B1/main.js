let products = [
    { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "món ăn dân tộc Mông" },
    { id: 2, name: "mứt", price: 80000, quantity: 21, category: "món ăn dân tộc Kinh" },
    { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "món ăn dân tộc Mông" },
    { id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30, category: "món ăn dân tộc Kinh" }
];

let cart = [];
let choice = 0;

let menuList = `1. Hiển thị các sản phẩm theo tên danh mục.
2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
    a. Sản phẩm không có trong cửa hàng hiển thị thông báo.
    b. Sản phẩm có trong cửa hàng
        i. Cho người dùng nhập số lượng sản phẩm muốn mua, mua thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
        ii. Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển thị thông báo.
3. Sắp xếp các sản phẩm trong cửa hàng theo giá:
    a. Tăng dần.
    b. Giảm dần.
4. Tính số tiền thanh toán trong giỏ hàng.
5. Thoát.`;

console.log(menuList);

do {
    choice = Number(prompt("Nhập lựa chọn của bạn: "));

    switch (choice) {
        case 1:
            let category = prompt("Nhập tên danh mục sản phẩm: ");
            let result = products.filter(product => product.category === category);
            if (result.length === 0) {
                console.log("Không có sản phẩm nào trong danh mục này.");
            } else {
                console.log(result);
            }
            break;

        case 2:
            let id = Number(prompt("Nhập id sản phẩm bạn muốn mua: "));
            let product = products.find(product => product.id === id);
            if (!product) {
                console.log("Sản phẩm không có trong cửa hàng.");
            } else {
                let quantity = Number(prompt("Nhập số lượng sản phẩm muốn mua: "));
                if (quantity > product.quantity) {
                    console.log("Số lượng sản phẩm trong cửa hàng không đủ.");
                } else {
                    product.quantity -= quantity;
                    cart.push({ ...product, quantity });
                    console.log("Mua hàng thành công.");
                }
            }
            break;

        case 3:
            let sortChoice = prompt("Nhập a để sắp xếp tăng dần, b để sắp xếp giảm dần: ");
            if (sortChoice === "a") {
                products.sort((a, b) => a.price - b.price);
            } else if (sortChoice === "b") {
                products.sort((a, b) => b.price - a.price);
            } else {
                console.log("Lựa chọn không hợp lệ.");
                break;
            }
            console.log(products);
            break;

        case 4:
            let totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
            console.log(`Tổng tiền thanh toán là: ${totalPrice}`);
            break;

        case 5:
            console.log("Cảm ơn bạn đã sử dụng dịch vụ!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice !== 5);