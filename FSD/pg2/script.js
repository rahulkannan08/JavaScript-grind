let cart = [];
let total = 0;
function addToCart(name,price){
    console.log("addToCart called with:", name, price);

    cart.push({name,price});
    console.log("Cart after push:", cart);

    updadeCartUi();
}
function updadeCartUi(){
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    cartList.innerHTML= "";
    total = 0;
    cart.forEach(Item =>{
        total+=Item.price;
        let li = document.createElement('li');
        li.textContent = Item.name + " - $" + Item.price;
        cartList.appendChild(li);
    });
    totalDisplay.textContent = total;
}
console.log(cart);
function clearCart(){
    cart = [];
    updadeCartUi();
}

