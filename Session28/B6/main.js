const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];

const sum = cart.reduce((total, curr) =>  {
    return total += curr.price * curr.quantity
}, 0)

console.log(sum)