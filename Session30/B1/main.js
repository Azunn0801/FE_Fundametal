let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
]

let cart=[]

let choice = 0

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
5. Thoát.`

console.log(menuList)

choice = Number(prompt("Nhập lựa chọn của bạn: "))

