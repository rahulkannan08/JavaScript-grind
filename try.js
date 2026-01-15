/* shift + alt + a = multi line cmd
ctrl + / = single ln cmnd 
*/

// // 0-10 freeze -  jrkin with high protection for cold 
// if rains add waterproof dress too
// // 10-20 cold  - jerkin is enough
// if rains add waterproof dress too
// // 20-30 warm  - normal suit is enough 
// if rains add waterproof dress too
// // 30+ hot -  covering dress only is enoughn
//  if rains add waterproof dress too

/*//### 🎯 Practice Challenge
//Create a simple weather app that suggests what to wear based on temperature and whether it's raining. Include at least 3 different weather scenarios.
*/
//const prompt = require ('prompt-sync')();



/* const temp = prompt("enter temperature");
const raining = prompt("is't raining (y/n)").toLowerCase();


if(raining == 'Y'){
    if(temp>0 && temp<10){
    console.log("jrkin with high protection for cold ");
} else if(temp>10 && temp<20){
    console.log("jerkin is enough");
} else if(temp > 20 && temp < 30){
    console.log("normal suit is enough");
}else if(temp>30){
    console.log("don't wear antthing");
}else if(temp<0){
    console.log("go and die")
}
   console.log("good to have protection for rain");
}

else {
    if(temp>0 && temp<10){
    console.log("jrkin with high protection for cold ");
} else if(temp>10 && temp<20){
    console.log("jerkin is enough");
} else if(temp > 20 && temp < 30){
    console.log("normal suit is enough");
}else if(temp>30){
    console.log("don't wear antthing");
}else if(temp<0){
    console.log("go and die")
}
console .log("mala peilaa");
}

console.log("running");s
function thoduda() {
    const temperatureInput = document.getElementById("temp");
    const temperature = parseFloat(temperatureInput.value);
    if (isNaN(temperature)) {
        console.log("Please enter a valid temperature");
        return;
    }
    console.log("The temperature is", temperature);
} */




// ### 🎯 Practice Challenge
//Create a program that determines if someone can rent a car. They need to be at least 21 years old, have a valid license, and either have insurance OR be willing to buy the rental company's insurance.
// const prompt = require('prompt-sync')();
/* const rent = prompt("are you gonna rent your car ? (y/n)").toLowerCase();

if (rent === 'y') {
    console.log("Proceed to next step");

    let car_age = parseInt(prompt("What's your age?"));

    if (car_age < 21) {
        console.log("You are not eligible. Age must be 21 or above.");
    } else {
        let license = prompt("Do you have a license or insurance? (y/n)").toLowerCase();

        if (license !== 'y') {
            console.log("You are not eligible. License or insurance is required.");
        } else {
            console.log("Win");
        }
    }

} else {
    console.log("Try to sell cars");
} */


/* //Create a simple calculator that figures out how much you'd save with a discount. Calculate the original price, discount amount, and final price.

//const prompt = require ('prompt-sync')();
const og_price = prompt("enter original price: ");
const discount = prompt("enter discount : ");
//const discount = prompt("enter discount percentage: ");
//const discount_amount = (og_price * discount) / 100;
const final_price = og_price - discount;

console.log("Original Price: $" + og_price);
console.log("Discount Amount: $" + discount);
console.log("Final Price after Discount: $" + final_price);
console.log("i'll save",discount); */



/* ### 🎯 Practice Challenge
Create variables for your current grade, the passing grade, and use comparison operators to determine if you're passing, failing, or got a perfect score.
 */

/* const Crnt_Grade = 'A';
const Passing_Grade = 'A';
const ans = true;

console.log(ans)

console.log(Passing_Grade === Crnt_Grade ? "passed": "failed");   


const fruits = ["ap","or","gr","ban","awa","water"]
console.log(fruits);
console.log(fruits[fruits.length-1]);



const grades = [85, 92, 78, 96, 88];
let total = 0;

// Calculate average grade (we'll learn easier ways to do this later)
for (let i = 0; i < grades.length; i++) {
    total += grades[i];     // Add each grade to total
}

const average = total / grades.length;
console.log(`toatal ${total} and Average grade: ${average.toFixed}`);  */

// ### 🎯 Practice Challenge
// Create an array of your favorite movies, then practice accessing different movies by their index. Add a new movie to the list and remove one you don't like anymore.
/* const fav_mvs = ["a","b","c","d","e","f","g"];
console.log(fav_mvs);

console.log(`${fav_mvs.push("h")} added ${fav_mvs}`);

console.log(`${fav_mvs.pop()} deleted `);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const firstThree = numbers.slice(0,-3);              // [1, 2, 3]
// const lastThree = numbers.slice(-3);                 // [8, 9, 10]
// const middle = numbers.slice(3, 7);  
// console.log(firstThree)
// console.log(lastThree)


const M =numbers.join(" and ")
console.log(M)
 */


/* const obj = {
    id: 1 ,
    name : "rahul",
    age : 12,
    isHeHired : false,
    avg_screen_time_inPC : 4.5,
    sem_marks : {
        1:200,
        2:300,
        3:400,
        4:500
    },
    intrsts : ['a','b','c','d'],
    a : [1,2,3]
}
let a = 1;
console.log(obj.a[0]+obj.a[1]+obj.a[2])
console.log(typeof(obj.a))
console.log(typeof(a))

 */
// ### 🎯 Practice Challenge
// Create an object representing your favorite restaurant. Include properties like name, cuisine type, average cost, rating, and an array of your favorite dishes. Practice accessing and modifying different properties.
/* const res_name = "International";

const fav_hotel = {
    name : res_name,
    cuisine : "multi cuisine",
    avg_cost : 40000000,
    rating : 5.0,
    fav_foods : ['a','b','c','d','e'],
    chefs : {
        korea : "Kim Jong Un",
        tn:"rahul",
        UP:"aditi",
        american:"trump",
        other:"other top chefs"
    },
    add : function(a,b){
        return a+b;
    }
} */
// const best_chef = fav_hotel.chefs.
// console.log(fav_hotel);
// console.log(fav_hotel.chefs.korea);
// console.log(fav_hotel.fav_foods[2]);


// const keys = Object.keys(fav_hotel.chefs)
// console.log(keys)

/* fav_hotel.dif = "difference";
// console.log(fav_hotel.add(10,10))
console.log(fav_hotel)

delete fav_hotel.dif

console.log(fav_hotel) */

// ### 🎯 Practice Challenge
// Create a "Pet" object with properties like name, type, age, and hunger level. Add methods like `feed()`, `play()`, and `getStatus()` that interact with these properties. Make the pet's hunger increase over time and require feeding.


/* const modernObject = {
    name: "Modern Object",
    
    // Old way to write methods
    oldMethod: function() {
        return "This is the old way";
    },
    
    // New shorthand way (same functionality)
    newMethod() {
        return "This is the new way";
    }
}; */

/* // Real-world example: Shopping cart with methods
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
shoppingCart.addItem("T-Shirt", 19.99, 2);
shoppingCart.addItem("Jeans", 49.99);
shoppingCart.addItem("Sneakers", 79.99);
shoppingCart.showCart();
shoppingCart.removeItem("Jeans");
shoppingCart.showCart(); */


// ### 🎯 Practice Challenge
// Create a "Pet" object with properties like name, type, age, and hunger level. Add methods like `feed()`, `play()`, and `getStatus()` that interact with these properties. Make the pet's hunger increase over time and require feeding.

/*  const pet = {
    name : "vicuts",
    type : "laptop",
    age : 2,
    hunger_level : 5,
     feed : function(food_amount){
        this.hunger_level -= food_amount;
        if(this.hunger_level < 0) this.hunger_level = 0;
        console.log(`${this.name} has been fed. Hunger level is now ${this.hunger_level}.`);
    },
    play : function(){
        this.hunger_level += 1;
        console.log(`${this.name} is playing. Hunger level is now ${this.hunger_level}.`);
    },
    getStatus : function(){
        if(this.hunger_level > 0) console.log(`${this.name} is hungry. Hunger level is ${this.hunger_level}.`);
        else console.log(`${this.name} is not hungry. Hunger level is ${this.hunger_level}.`);
    } 
    feed(food_amount){
        this.hunger_level -= food_amount;
        if(this.hunger_level < 0) this.hunger_level = 0;
        console.log(`${this.name} has been fed. Hunger level is now ${this.hunger_level}.`);
    },
    play(){
        this.hunger_level += 1;
        console.log(`${this.name} is playing. Hunger level is now ${this.hunger_level}.`);
    }, 
    getStatus(){
        if(this.hunger_level > 0) console.log(`${this.name} is hungry. Hunger level is ${this.hunger_level}.`);
        else console.log(`${this.name} is not hungry. Hunger level is ${this.hunger_level}.`);    
    }

} */

/*
console.log(pet);

pet.feed(2);
pet.play();
pet.getStatus(); 
*/ 

/* function CuP(name,age=18,country="dunoo"){
    return {
        name : name,
        age : age,
        country : country,
        pflcrted: new Date().toLocaleDateString()
    };
}

console.log(CuP("a",24,"IND")); */


/* const  CuuP = (n,a=10,cn="IND") =>{
    return {
        n : n,
        a : a,
        cn : cn,
        pflcrted: new Date().toLocaleDateString()
    };
  
};
console.log(CuuP()) */

/* function calculateTip(bill,tippr){
    const tip = bill*tippr/100;
    return tip;
}

function spbl(bill,nop){
    return bill/nop;
}
 */
/* const bill = 100;
const tippr = 10;
const nop = 5;


console.log(calculateTip(bill,tippr),spbl(bill,nop));


dinner(
    function calculateTip(bill,tippr){
    const tip = bill*tippr/100;
    console.log(`the tip value is ${tip}`);
    return tip;
    
},

    function spbl(bill,nop){
        console.log(`the split value is ${bill/nop}`);
        return bill/nop;
}

)

dinner().calculateTip(100,10)

/*Create a function called `calculateTip` that takes a bill amount and tip percentage, then returns the tip amount. Create another function called `splitBill` that takes the total bill and number of people, then returns how much each person pays. Use both functions together to solve a real dinner scenario.*/
/* function dinner(calcTip,splitB){
    const bill = 150;
    const tippr = 15;
    const nop = 3;
    return {
        calculateTip : function(bill,tippr){
            const tip = bill*tippr/100;
            console.log(`the tip value is ${tip}`);
            return tip;
        },
        splitBill : function(bill,nop){
            console.log(`the split value is ${bill/nop}`);
            return bill/nop;
        }
    }
}
 */ 
/* 
### 🎯 Practice Challenge
Create a function called `orderPizza` that takes required parameters (size, crust), optional parameters with defaults (sauce, cheese), and uses rest parameters for toppings. Make it return an order summary with total price calculation. */






/* 
function createUserCard({name, email, age, department = "General"}) {
    // Destructuring the object parameter
    return `
    ┌─────────────────────────────┐
    │ ${name.padEnd(27)} │
    │ ${email.padEnd(27)} │
    │ Age: ${age.toString().padEnd(22)} │
    │ Dept: ${department.padEnd(21)} │
    └─────────────────────────────┘
    `;
}

// Passing an object as argument
const userData = {
    name: "Emma Thompson",
    email: "emma@company.com", 
    age: 32,
    department: "Marketing"
};

console.log(createUserCard(userData));

// Can also pass object directly
console.log(createUserCard({
    name: "Alex Rodriguez",
    email: "alex@company.com",
    age: 28
    // department will use default value
}));

// Function that returns a function (higher-order function)
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

// Create specialized functions
const double = createMultiplier(2);
const triple = createMultiplier(3);
const times10 = createMultiplier(10);

console.log(`Double 7: ${double(7)}`);        // 14
console.log(`Triple 5: ${triple(5)}`);        // 15
console.log(`10 times 8: ${times10(8)}`);     // 80

*/

/* function orderPizza(size, crust, sauce = "tomato", cheese = "mozzarella", ...toppings) {
    let basePrice = 0;

    if (size === "small") {
        basePrice = 8;
    } else if (size === "medium") {
        basePrice = 10;
    } else if (size === "large") {
        basePrice = 12;
    }

    if (crust === "thin") {
        basePrice += 2;
    } else if (crust === "thick") {
        basePrice += 3;
    }

    if (sauce === "barbecue") {
        basePrice += 1;
    }

    if (cheese === "cheddar") {
        basePrice += 1;
    }    

    return {
        size: size,
        crust: crust,
        sauce: sauce,
        cheese: cheese,
        toppings: toppings,
        price: basePrice    
    }
}

const myOrder = orderPizza("large", "thin", undefined, "mozzarella", "pepperoni", "mushrooms", "olives");
console.log(myOrder);
const anotherOrder = orderPizza("medium", "thick", undefined, "cheddar", "bell peppers", "onions");
console.log(anotherOrder); */



/* function orderPizza() {
    console.log("return example");
}

const a = orderPizza();
console.log(a);

 */


/* 
### 🎯 Practice Challenge
Create a function called `analyzeText` that takes a string and returns an object with properties like wordCount, characterCount, hasNumbers, and longestWord. Test it with different types of text input. */

/* function charcount(s){
    return s.length;
}   
function longestwrd(s){
    const words = s.split(" ");
    let longest = "";   
    for(let i=0;i<words.length;i++){
        if(words[i].length > longest.length){
            longest = words[i];
        }
    }
    return longest;
}   
function hasnum(s){
    const regex = /\d/;
    return regex.test(s);
}

function analyzeText(s){
    sobj = {
        wordcount : s.split(" ").length,
        charcount : charcount(s),
        hasnum : hasnum(s),
        longwrd : longestwrd(s)
    } 
 return sobj
}       

const s = "abcdefghijklmnopqrstuvwxyz123456789";
const output = analyzeText(s)
console.log(output); */



/* function analyzeText(s){
    sobj = {
        wordcount : s.lenght(),
        charcount : s.charcount(),
        hasnum : s.includes(),
        longwrd : s.lonstwrd()
    } 
 return sobj
} */


 /**
 * Analyzes a text string and returns an object with various properties.
 *
 * @param {string} text The input string to analyze.
 * @returns {object} An object containing wordCount, characterCount, hasNumbers, and longestWord.
 */
function analyzeText(text) {
    // 1. Character Count (including spaces and punctuation)
    const characterCount = text.length;

    // 2. Word Count
    // Use regex to find all sequences of non-whitespace characters
    const words = text.match(/\S+/g) || [];
    const wordCount = words.length;

    // 3. Check for Numbers
    // Use regex /\d/ to test if any digit exists in the string
    const hasNumbers = /\d/.test(text);

    // 4. Longest Word
    let longestWord = '';
    if (wordCount > 0) {
        // First, clean up words to remove trailing punctuation for more accurate length calculation
        const cleanedWords = words.map(word => word.replace(/[.,!?;:"'()]/g, ''));

        // Sort words by length in descending order and pick the first one
        cleanedWords.sort((a, b) => b.length - a.length);
        longestWord = cleanedWords[0];
    }

    return {
        wordCount,
        characterCount,
        hasNumbers,
        longestWord
    };
}

const sampleText = "Hello world! This is a test string with numbers 12345 and some longwordhere.";
const analysisResult = analyzeText(sampleText);
console.log(analysisResult);


