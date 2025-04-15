let productList = []

const tbodyEL = document.querySelector('tbody')
const editFormEl = document.querySelector('#form-edit')

function addProduct(event) {
    event.preventDefault()
    productList.push({
        name: event.target.productName.value,
        price: event.target.productPrice.value,
        description: event.target.description.value
    }) 
    renderProductList()
}

function renderProductList() {
    let dataHTML = ``
    for(let i = 0; i < productList.length; i++) {
        dataHTML += `
            <tr>
                <td>${productList[i].name}</td>
                <td>${productList[i].price}</td>
                <td>${productList[i].description}</td>
                <td class="btn-group">
                    <button onclick="loadProdData(${i})" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#editModal">Sửa</button>
                    <button onclick="loadProdData(${i})" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#deleteModal">Xóa</button>
                    <button onclick="loadProdData(${i})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#buyModal">Mua</button>
                </td>
            </tr>
        `
        console.log(productList[i])
    }

    tbodyEL.innerHTML = dataHTML
}

renderProductList()

function loadProdData(index) {
    editFormEl.index.value = index
    editFormEl.productName.value = productList[index].name
    editFormEl.productPrice.value = productList[index].price
    editFormEl.description.value = productList[index].description
    console.log("editFormEl", editFormEl)
    
}

function editProduct(event) {
    event.preventDefault()
    let index = event.target.index.value
    let name = event.target.productName.value
    let price = event.target.productPrice.value
    let description = event.target.description.value

    let data = {
        name,
        price,
        description
    }

    console.log("index", index)

    productList[index] = data

    renderProductList()
}