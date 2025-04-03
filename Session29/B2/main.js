class Product {
    constructor(id, name, price, category, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.quantity = quantity;
    }
}

class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(name, price, category, quantity) {
        const newProduct = new Product(this.nextId++, name, price, category, quantity);
        this.products.push(newProduct);
        console.log("Sản phẩm đã được thêm:", newProduct);
    }

    displayProducts() {
        console.log("Danh sách sản phẩm:");
        this.products.forEach(product => console.log(product));
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        console.log(product ? "Chi tiết sản phẩm:" : "Không tìm thấy sản phẩm!", product);
    }

    updateProduct(id, newName, newPrice, newCategory, newQuantity) {
        const product = this.products.find(p => p.id === id);
        if (product) {
            product.name = newName;
            product.price = newPrice;
            product.category = newCategory;
            product.quantity = newQuantity;
            console.log("Thông tin sản phẩm đã cập nhật:", product);
        } else {
            console.log("Không tìm thấy sản phẩm!");
        }
    }

    deleteProduct(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            console.log("Sản phẩm đã bị xóa:", this.products[index]);
            this.products.splice(index, 1);
        } else {
            console.log("Không tìm thấy sản phẩm để xóa!");
        }
    }

    filterProductsByPrice(minPrice, maxPrice) {
        const filtered = this.products.filter(p => p.price >= minPrice && p.price <= maxPrice);
        console.log("Sản phẩm trong khoảng giá:", filtered);
    }
}

const manager = new ProductManager();
manager.addProduct("Laptop", 1500, "Electronics", 10);
manager.addProduct("Điện thoại", 800, "Electronics", 20);
manager.displayProducts();
manager.getProductById(1);
manager.updateProduct(1, "Laptop Gaming", 1800, "Electronics", 5);
manager.deleteProduct(2);
manager.displayProducts();
manager.filterProductsByPrice(1000, 2000);
