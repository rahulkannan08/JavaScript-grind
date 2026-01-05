const shoppingCart = {
    items: [],
    total: 0,
    
    addItem: function(name, price, quantity = 1) {
        const item = {
            name: name,
            price: price,
            quantity: quantity,
            subtotal: price * quantity
        };
        this.items.push(item);
        this.calculateTotal();
        console.log(`Added ${quantity} ${name}(s) to cart`);
    },
    
    removeItem: function(name) {
        const index = this.items.findIndex(item => item.name === name);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.calculateTotal();
            console.log(`Removed ${name} from cart`);
        } else {
            console.log(`${name} not found in cart`);
        }
    },
    
    calculateTotal: function() {
        this.total = 0;
        for (let i = 0; i < this.items.length; i++) {
            this.total += this.items[i].subtotal;
        }
    },
    
    showCart: function() {
        console.log("Shopping Cart:");
        if (this.items.length === 0) {
            console.log("Your cart is empty");
        } else {
            for (let i = 0; i < this.items.length; i++) {
                const item = this.items[i];
                console.log(`- ${item.name}: ${item.price} x ${item.quantity} = ${item.subtotal}`);
            }
            console.log(`Total: ${this.total.toFixed(2)}`);
        }
    }
};

// Using the shopping cart
// shoppingCart.addItem("T-Shirt", 19.99, 2);
// shoppingCart.addItem("Jeans", 49.99);
// shoppingCart.addItem("Sneakers", 79.99);
// shoppingCart.showCart();
// shoppingCart.removeItem("Jeans");
// shoppingCart.showCart();


console.log("pg2 connected")