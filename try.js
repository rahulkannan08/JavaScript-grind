/* shift + alt + a = multi line cmd
ctrl + / = single ln cmnd 
*/



/*//### 🎯 Practice Challenge
//Create a simple weather app that suggests what to wear based on temperature and whether it's raining. Include at least 3 different weather scenarios.

const prompt = require ('prompt-sync')();

// // 0-10 freeze -  jrkin with high protection for cold 
// if rains add waterproof dress too
// // 10-20 cold  - jerkin is enough
// if rains add waterproof dress too
// // 20-30 warm  - normal suit is enough 
// if rains add waterproof dress too
// // 30+ hot -  covering dress only is enoughn
//  if rains add waterproof dress too

const temp = prompt("enter temperature");
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
}

*/


// ### 🎯 Practice Challenge
//Create a program that determines if someone can rent a car. They need to be at least 21 years old, have a valid license, and either have insurance OR be willing to buy the rental company's insurance.
// const prompt = require('prompt-sync')();
/*const rent = prompt("are you gonna rent your car ? (y/n)").toLowerCase();

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
}*/


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