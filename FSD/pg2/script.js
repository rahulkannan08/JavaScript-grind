let cart = [];
let total = 0;
const addbtn = document.getElementById('add-to-cart-btn');
const clearbtn = document.getElementById('clear-cart-btn');
const itemNameInput = document.getElementById('item-name');
const itemPriceInput = document.getElementById('item-price');   

addbtn.addEventListener('click', function(){
    const itemName = itemNameInput.value;
    const itemPrice = parseFloat(itemPriceInput.value);
    if(itemName == "" && itemPrice == ""){
        alert("enter both field")
    }
    else if(itemName==""){
        alert("please enter an value of item name");
    }
    else if(itemPrice==""){
        alert("please enter an value of item price");
    }
    
    else{
    addToCart(itemName, itemPrice);
    }
});

clearbtn.addEventListener('click', function(){
    clearCart();
}); 


addToCart = (name, price) => {
    console.log("addToCart called with:", name, price);
    cart.push({name,price});
    console.log("Cart after push:", cart);  
    updadeCartUi();
    
}

updadeCartUi = () => {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    cartList.innerHTML= "";
    total = 0;  
    cart.forEach(Item => {
        total+=Item.price;
        let li = document.createElement('li');
        li.textContent = Item.name + " - $" + Item.price;
        cartList.appendChild(li);        
    });    
    totalDisplay.textContent = total;    
}

clearCart = () => {
    cart = [];
    updadeCartUi();    
    itemNameInput.innerHTML = "";
}
    

    itemNameInput.textContent = "";

/* function addToCart(name,price){
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

addbtn.addEventListener('click', function(){
    const itemName = document.getElementById('item-name').textContent;
    const itemPrice = parseFloat(document.getElementById('item-price').textContent.replace('$',''));
    addToCart(itemName, itemPrice);
});


clearbtn.addEventListener('click', function(){
    clearCart();
}); */