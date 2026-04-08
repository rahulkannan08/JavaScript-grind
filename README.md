# 30 Days of JavaScript for Complete Beginners 🚀

*A comprehensive journey from zero to JavaScript hero, designed specifically for people who have never written code before*

## 📋 Table of Contents

| Day | Topic | Difficulty | What You'll Learn |
|-----|-------|------------|-------------------|
| 1 | [Variables (const, let, var)](#day-1-variables-const-let-var) | ⭐ | How to store information |
| 2 | [Data Types: Numbers & Strings](#day-2-data-types-numbers--strings) | ⭐ | Different kinds of information |
| 3 | [Comments & Code Organization](#day-3-comments--code-organization) | ⭐ | How to document your code |
| 4 | [Basic Math Operations](#day-4-basic-math-operations) | ⭐ | Making the computer calculate |
| 5 | [Template Literals & String Concatenation](#day-5-template-literals--string-concatenation) | ⭐ | Combining text together |
| 6 | [Boolean Values & Comparison Operators](#day-6-boolean-values--comparison-operators) | ⭐⭐ | True/false and comparisons |
| 7 | [if/else Statements](#day-7-ifelse-statements) | ⭐⭐ | Making decisions in code |
| 8 | [Logical Operators (&&, \|\|, !)](#day-8-logical-operators---) | ⭐⭐ | Combining conditions |
| 9 | [Arrays - Storing Multiple Items](#day-9-arrays---storing-multiple-items) | ⭐⭐ | Lists of information |
| 10 | [Array Methods: Basic Operations](#day-10-array-methods-basic-operations) | ⭐⭐ | Working with lists |
| 11 | [Objects - Storing Related Information](#day-11-objects---storing-related-information) | ⭐⭐ | Organizing complex data |
| 12 | [Object Properties & Methods](#day-12-object-properties--methods) | ⭐⭐ | Accessing object information |
| 13 | [Functions - Reusable Code Blocks](#day-13-functions---reusable-code-blocks) | ⭐⭐⭐ | Creating your own commands |
| 14 | [Function Parameters & Arguments](#day-14-function-parameters--arguments) | ⭐⭐⭐ | Passing information to functions |
| 15 | [Return Statements & Function Output](#day-15-return-statements--function-output) | ⭐⭐⭐ | Getting results from functions |
| 16 | [Scope - Where Variables Live](#day-16-scope---where-variables-live) | ⭐⭐⭐ | Understanding variable accessibility |
| 17 | [Loops: for & while](#day-17-loops-for--while) | ⭐⭐⭐ | Repeating actions automatically |
| 18 | [Loop Control: break & continue](#day-18-loop-control-break--continue) | ⭐⭐⭐ | Controlling loop behavior |
| 19 | [Array Iteration Methods](#day-19-array-iteration-methods) | ⭐⭐⭐ | Modern ways to work with arrays |
| 20 | [Error Handling: try/catch](#day-20-error-handling-trycatch) | ⭐⭐⭐ | Dealing with problems gracefully |
| 21 | [DOM Manipulation Basics](#day-21-dom-manipulation-basics) | ⭐⭐⭐⭐ | Changing web pages with code |
| 22 | [Event Handling](#day-22-event-handling) | ⭐⭐⭐⭐ | Responding to user actions |
| 23 | [Form Handling & User Input](#day-23-form-handling--user-input) | ⭐⭐⭐⭐ | Getting information from users |
| 24 | [Local Storage](#day-24-local-storage) | ⭐⭐⭐⭐ | Saving data in the browser |
| 25 | [Fetch API - Getting Data](#day-25-fetch-api---getting-data) | ⭐⭐⭐⭐ | Talking to other websites |
| 26 | [Async/Await - Modern Asynchronous Code](#day-26-asyncawait---modern-asynchronous-code) | ⭐⭐⭐⭐⭐ | Handling time-based operations |
| 27 | [ES6+ Features: Arrow Functions](#day-27-es6-features-arrow-functions) | ⭐⭐⭐⭐ | Modern function syntax |
| 28 | [Destructuring & Spread Operator](#day-28-destructuring--spread-operator) | ⭐⭐⭐⭐ | Modern ways to work with data |
| 29 | [Modules & Code Organization](#day-29-modules--code-organization) | ⭐⭐⭐⭐⭐ | Organizing larger projects |
| 30 | [Building Your First Project](#day-30-building-your-first-project) | ⭐⭐⭐⭐⭐ | Putting it all together |

---

## Day 1: Variables (const, let, var)

### 🧠 Concept Analogy
Think of variables like labeled containers in your kitchen pantry. Some containers (like sealed jars marked "const") can never have their contents changed once you put something in them. Others (like tupperware marked "let") can be opened and have their contents replaced whenever you need to. The old-style containers ("var") work too, but they have some quirky rules that can cause confusion.

### 📝 What You'll Learn
Variables are how we store information in JavaScript so we can use it later. Just like you might write a grocery list on paper to remember what to buy, variables let the computer remember information.

### 💻 Code Example
```javascript
// Think of variables like labeled boxes to store information
const BIRTHDAY = "January 15";    // A sealed box - contents never change
let age = 25;                     // A regular box - contents can change
var name = "Alex";                // An old-style box (avoid using this)

// Let's see how they work:
console.log(BIRTHDAY);            // Prints: January 15
console.log(age);                 // Prints: 25

// We can change 'let' variables:
age = 26;                         // Put new contents in the box
console.log(age);                 // Prints: 26

// We CANNOT change 'const' variables:
// BIRTHDAY = "December 25";      // This would cause an error!
```

### ⚠️ Common Beginner Mistakes
- Trying to change a `const` variable after declaring it
- Forgetting to declare variables before using them
- Using `var` instead of `let` or `const` (use `let` for changeable values, `const` for unchangeable ones)

### 🎯 Practice Challenge
Try creating variables for your name, favorite color, and birth year. Use `const` for things that won't change and `let` for things that might.

---

## Day 2: Data Types: Numbers & Strings

### 🧠 Concept Analogy
Imagine you're organizing a filing cabinet. Some folders contain numbers (like ages, prices, or quantities), while others contain text (like names, addresses, or descriptions). JavaScript needs to know what type of information it's working with, just like you'd organize different types of documents in different folders.

### 📝 What You'll Learn
JavaScript recognizes different types of information. The two most basic types are numbers (for math and counting) and strings (for text and words).

### 💻 Code Example
```javascript
// Numbers - for counting, calculating, measuring
const age = 25;                   // A whole number (integer)
const price = 19.99;              // A decimal number (float)
const temperature = -5;           // Negative numbers work too

// Strings - for text, words, sentences (always in quotes)
const firstName = "Sarah";        // Double quotes work
const lastName = 'Johnson';       // Single quotes work too
const message = "Hello, world!";  // Text with punctuation

// You can check what type something is:
console.log(typeof age);          // Prints: "number"
console.log(typeof firstName);    // Prints: "string"

// Numbers and strings behave differently:
console.log(5 + 3);               // Prints: 8 (math with numbers)
console.log("5" + "3");           // Prints: "53" (joining strings)
```

### ⚠️ Common Beginner Mistakes
- Forgetting quotes around strings (JavaScript thinks it's a variable name)
- Mixing up numbers and strings (5 vs "5" are different!)
- Using the wrong quote type and breaking the string

### 🎯 Practice Challenge
Create variables for your favorite movie title (string), the year it was made (number), and your rating out of 10 (number with decimals).

---

## Day 3: Comments & Code Organization

### 🧠 Concept Analogy
Comments in code are like sticky notes you leave for yourself (and others). When you're cooking, you might write notes in the margins of a recipe like "add extra salt" or "this serves 4 people." Comments in code serve the same purpose - they explain what's happening without affecting the actual cooking (or coding).

### 📝 What You'll Learn
Comments help you remember what your code does and help others understand it. Good comments make your code readable and maintainable.

### 💻 Code Example
```javascript
// This is a single-line comment - everything after // is ignored

/* 
   This is a multi-line comment
   Anything between these symbols is ignored
   Great for longer explanations
*/

// Personal information variables
const userName = "John Doe";      // Store the user's full name
let userAge = 28;                 // Age can change on birthdays
const email = "john@email.com";   // Contact information

/*
  Shopping cart calculation
  This section handles the basic math for an online store
*/
const itemPrice = 15.99;          // Price of one item
const quantity = 3;               // How many items to buy
const totalCost = itemPrice * quantity;  // Calculate total cost

// Display the result to the user
console.log("Total cost: $" + totalCost);  // Show the final price
```

### ⚠️ Common Beginner Mistakes
- Over-commenting obvious things (`let age = 25; // This stores the age`)
- Writing comments that don't match what the code actually does
- Forgetting to update comments when you change the code

### 🎯 Practice Challenge
Take some code you wrote yesterday and add helpful comments explaining what each line does. Think about what would help someone else understand your code.

---

## Day 4: Basic Math Operations

### 🧠 Concept Analogy
JavaScript can be your personal calculator, just like the calculator app on your phone. It knows how to add (+), subtract (-), multiply (*), and divide (/), plus some special operations like finding remainders (%) - which is like asking "what's left over after dividing?"

### 📝 What You'll Learn
JavaScript can perform mathematical calculations using operators. These are the building blocks for any app that needs to work with numbers.

### 💻 Code Example
```javascript
// Basic math operations
const firstNumber = 10;
const secondNumber = 3;

// Addition - combining numbers
const sum = firstNumber + secondNumber;        // 10 + 3 = 13
console.log("Sum:", sum);

// Subtraction - finding the difference
const difference = firstNumber - secondNumber; // 10 - 3 = 7
console.log("Difference:", difference);

// Multiplication - repeated addition
const product = firstNumber * secondNumber;    // 10 * 3 = 30
console.log("Product:", product);

// Division - splitting into equal parts
const quotient = firstNumber / secondNumber;   // 10 / 3 = 3.333...
console.log("Quotient:", quotient);

// Modulus - the remainder after division
const remainder = firstNumber % secondNumber;  // 10 % 3 = 1 (1 left over)
console.log("Remainder:", remainder);

// Real-world example: Calculating a tip
const billAmount = 45.50;
const tipPercentage = 0.18;                   // 18% tip
const tipAmount = billAmount * tipPercentage;
const totalBill = billAmount + tipAmount;

console.log("Bill: $" + billAmount);
console.log("Tip: $" + tipAmount.toFixed(2)); // .toFixed(2) rounds to 2 decimal places
console.log("Total: $" + totalBill.toFixed(2));
```

### ⚠️ Common Beginner Mistakes
- Dividing by zero (causes "Infinity")
- Expecting perfect decimal math (0.1 + 0.2 doesn't exactly equal 0.3 in JavaScript)
- Mixing up multiplication (*) with the letter x

### 🎯 Practice Challenge
Create a simple calculator that figures out how much you'd save with a discount. Calculate the original price, discount amount, and final price.

---

## Day 5: Template Literals & String Concatenation

### 🧠 Concept Analogy
Imagine you're writing a form letter, but you want to personalize it for different people. Instead of writing separate letters, you create a template like "Dear [NAME], thank you for your purchase of [ITEM]" and fill in the blanks. Template literals in JavaScript work the same way - they let you create text templates and fill in the variables.

### 📝 What You'll Learn
There are different ways to combine text and variables in JavaScript. You can glue pieces together with + (concatenation) or use template literals with backticks (`) for a cleaner approach.

### 💻 Code Example
```javascript
// Setting up our information
const customerName = "Maria";
const productName = "Wireless Headphones";
const price = 89.99;
const quantity = 2;

// Old way: String concatenation with + 
const oldMessage = "Hello " + customerName + "! You ordered " + quantity + " " + productName + " for $" + (price * quantity) + " total.";

// New way: Template literals with backticks and ${} 
const newMessage = `Hello ${customerName}! You ordered ${quantity} ${productName} for $${price * quantity} total.`;

console.log(oldMessage);
console.log(newMessage);        // Both print the same thing, but this is easier to read!

// Template literals can span multiple lines
const emailTemplate = `
Dear ${customerName},

Thank you for your order of ${quantity} ${productName}.

Order Summary:
- Item: ${productName}
- Quantity: ${quantity}
- Price per item: $${price}
- Total: $${price * quantity}

We'll ship your order soon!

Best regards,
The Store Team
`;

console.log(emailTemplate);

// You can do calculations inside template literals
const userAge = 25;
const greeting = `You are ${userAge} years old. In 10 years, you'll be ${userAge + 10}!`;
console.log(greeting);
```

### ⚠️ Common Beginner Mistakes
- Using regular quotes instead of backticks for template literals
- Forgetting the $ in front of the curly braces `{variable}` instead of `${variable}`
- Mixing concatenation styles in the same project (pick one and stick with it)

### 🎯 Practice Challenge
Create a template for a movie review that includes the movie title, your rating, release year, and a brief comment. Use template literals to make it look professional.

---

## Day 6: Boolean Values & Comparison Operators

### 🧠 Concept Analogy
Boolean values are like light switches - they're either ON (true) or OFF (false), nothing in between. Comparison operators are like asking yes/no questions: "Is the temperature greater than 70?" The answer is either yes (true) or no (false). These true/false answers help your program make decisions.

### 📝 What You'll Learn
Booleans represent true/false values, and comparison operators help you compare things to get boolean results. These are essential for making decisions in your code.

### 💻 Code Example
```javascript
// Boolean values - only two possibilities
const isLoggedIn = true;           // User is logged in
const hasPermission = false;       // User doesn't have permission
const isWeekend = true;            // It's Saturday or Sunday

console.log(typeof isLoggedIn);    // Prints: "boolean"

// Comparison operators - asking yes/no questions
const myAge = 25;
const friendAge = 30;

// Equal to - exactly the same?
console.log(myAge === 25);         // true (yes, 25 equals 25)
console.log(myAge === friendAge);  // false (no, 25 doesn't equal 30)

// Not equal to - different?
console.log(myAge !== friendAge);  // true (yes, they are different)

// Greater than / Less than
console.log(friendAge > myAge);    // true (30 is greater than 25)
console.log(myAge < 20);           // false (25 is not less than 20)

// Greater than or equal to / Less than or equal to
console.log(myAge >= 25);          // true (25 is greater than or equal to 25)
console.log(myAge <= 24);          // false (25 is not less than or equal to 24)

// Real-world examples
const temperature = 72;
const isTooHot = temperature > 75;         // false
const isComfortable = temperature >= 68;   // true

const bankBalance = 150;
const itemCost = 200;
const canAfford = bankBalance >= itemCost;  // false

console.log(`Can I afford this item? ${canAfford}`);
console.log(`Is it too hot outside? ${isTooHot}`);
```

### ⚠️ Common Beginner Mistakes
- Using = (assignment) instead of === (comparison) 
- Using == instead of === (=== is more reliable)
- Thinking boolean variables need quotes (true vs "true" are different)

### 🎯 Practice Challenge
Create variables for your current grade, the passing grade, and use comparison operators to determine if you're passing, failing, or got a perfect score.

---

## Day 7: if/else Statements

### 🧠 Concept Analogy
Think of if/else statements like a flowchart or decision tree. It's like when you're getting dressed: "IF it's raining, THEN wear a raincoat, ELSE wear a regular jacket." Your program looks at a condition (is it raining?) and chooses what to do based on whether that condition is true or false.

### 📝 What You'll Learn
if/else statements let your program make decisions and run different code based on different conditions. This is where your program starts to feel intelligent!

### 💻 Code Example
```javascript
// Basic if/else structure
const temperature = 75;

if (temperature > 80) {
    console.log("It's hot! Wear shorts and a t-shirt.");
} else {
    console.log("It's not too hot. Wear long pants.");
}

// if/else if/else - multiple conditions
const grade = 85;

if (grade >= 90) {
    console.log("Excellent! You got an A!");
} else if (grade >= 80) {
    console.log("Good job! You got a B!");
} else if (grade >= 70) {
    console.log("You passed with a C.");
} else if (grade >= 60) {
    console.log("You got a D. Consider studying more.");
} else {
    console.log("You failed. Don't give up!");
}

// Real-world example: Login system
const username = "john_doe";
const password = "secret123";
const isLoggedIn = false;

if (username === "john_doe" && password === "secret123") {
    console.log("Welcome back, John!");
    // In a real app, we'd set isLoggedIn = true here
} else {
    console.log("Invalid username or password. Please try again.");
}

// Example: Shopping cart discount
const cartTotal = 150;
const isMember = true;
let finalPrice = cartTotal;

if (cartTotal > 100 && isMember) {
    finalPrice = cartTotal * 0.8;  // 20% member discount
    console.log(`Member discount applied! New total: $${finalPrice}`);
} else if (cartTotal > 100) {
    finalPrice = cartTotal * 0.9;  // 10% discount for orders over $100
    console.log(`Discount applied! New total: $${finalPrice}`);
} else {
    console.log(`Total: $${finalPrice}`);
}

// Short if statement (one line)
const age = 17;
if (age >= 18) console.log("You can vote!");  // Only runs if true
```

### ⚠️ Common Beginner Mistakes
- Forgetting curly braces {} for multiple lines of code
- Using = instead of === in conditions
- Forgetting that only the first true condition runs (order matters!)
- Not handling all possible cases

### 🎯 Practice Challenge
Create a simple weather app that suggests what to wear based on temperature and whether it's raining. Include at least 3 different weather scenarios.

---

## Day 8: Logical Operators (&&, ||, !)

### 🧠 Concept Analogy
Logical operators are like the word "and", "or", and "not" in everyday speech. When you say "I'll go to the beach IF it's sunny AND it's warm," you're using logic. In JavaScript, && means "and" (both conditions must be true), || means "or" (at least one condition must be true), and ! means "not" (flips true to false or false to true).

### 📝 What You'll Learn
Logical operators let you combine or modify boolean values to create more complex conditions. They're essential for building sophisticated decision-making in your programs.

### 💻 Code Example
```javascript
// AND operator (&&) - BOTH conditions must be true
const age = 25;
const hasLicense = true;
const hasInsurance = true;

// Can drive if you have license AND insurance AND are old enough
if (age >= 16 && hasLicense && hasInsurance) {
    console.log("You can legally drive!");
} else {
    console.log("You cannot drive yet.");
}

// OR operator (||) - AT LEAST ONE condition must be true
const isWeekend = false;
const isHoliday = true;
const isVacationDay = false;

// Don't work if it's weekend OR holiday OR vacation day
if (isWeekend || isHoliday || isVacationDay) {
    console.log("No work today! Enjoy your day off!");
} else {
    console.log("Time to go to work.");
}

// NOT operator (!) - flips true to false, false to true
const isLoggedIn = false;
const isGuest = !isLoggedIn;  // If NOT logged in, then is guest

console.log(`Logged in: ${isLoggedIn}`);    // false
console.log(`Is guest: ${isGuest}`);        // true

// Complex example: Movie theater ticket pricing
const customerAge = 30;
const isStudent = false;
const isSenior = customerAge >= 65;
const isChild = customerAge < 13;

let ticketPrice = 12.00;  // Regular adult price

if (isChild || isSenior) {
    ticketPrice = 8.00;   // Discounted price
    console.log("Discount applied!");
} else if (isStudent && customerAge < 26) {
    ticketPrice = 10.00;  // Student discount
    console.log("Student discount applied!");
}

console.log(`Ticket price: $${ticketPrice}`);

// Short-circuit evaluation - useful for default values
const userName = "";  // Empty string is "falsy"
const displayName = userName || "Guest";  // If userName is empty, use "Guest"
console.log(`Welcome, ${displayName}!`);

// Checking multiple conditions for form validation
const email = "user@example.com";
const password = "mypassword123";
const agreeToTerms = true;

const isValidForm = email.includes("@") && password.length >= 8 && agreeToTerms;

if (isValidForm) {
    console.log("Form is valid! Creating account...");
} else {
    console.log("Please fix the form errors.");
}
```

### ⚠️ Common Beginner Mistakes
- Confusing && (and) with || (or)
- Writing `if (x === true && y === true)` instead of just `if (x && y)`
- Not understanding short-circuit evaluation (JavaScript stops checking once it knows the answer)
- Overcomplicating conditions when simpler logic would work

### 🎯 Practice Challenge
Create a program that determines if someone can rent a car. They need to be at least 21 years old, have a valid license, and either have insurance OR be willing to buy the rental company's insurance.

---

## Day 9: Arrays - Storing Multiple Items

### 🧠 Concept Analogy
Think of an array like a numbered list or a row of mailboxes. Each mailbox has a number (starting from 0) and can hold one item. Unlike variables that hold one thing, arrays can hold multiple items in order. Just like you might have a shopping list with multiple items, arrays store multiple pieces of related information.

### 📝 What You'll Learn
Arrays let you store multiple values in a single variable. They're perfect for lists, collections, or any time you need to work with multiple related items.

### 💻 Code Example
```javascript
// Creating arrays - like making a list
const fruits = ["apple", "banana", "orange", "grape"];
const numbers = [1, 5, 10, 15, 20];
const mixedArray = ["John", 25, true, "developer"];  // Arrays can hold different types

// Empty array - like an empty shopping cart
const shoppingCart = [];

console.log(fruits);        // Prints the whole array
console.log(numbers);       // [1, 5, 10, 15, 20]

// Accessing items by their position (index starts at 0!)
console.log(fruits[0]);     // "apple" - first item
console.log(fruits[1]);     // "banana" - second item
console.log(fruits[3]);     // "grape" - fourth item

// Arrays have a length property
console.log(fruits.length); // 4 - how many items in the array

// Getting the last item (useful when you don't know the length)
const lastFruit = fruits[fruits.length - 1];  // "grape"
console.log(`Last fruit: ${lastFruit}`);

// Changing items in an array
fruits[1] = "strawberry";   // Change "banana" to "strawberry"
console.log(fruits);        // ["apple", "strawberry", "orange", "grape"]

// Adding items to an array
fruits.push("kiwi");        // Add to the end
console.log(fruits);        // ["apple", "strawberry", "orange", "grape", "kiwi"]

// Removing the last item
const removedFruit = fruits.pop();  // Removes and returns "kiwi"
console.log(`Removed: ${removedFruit}`);
console.log(fruits);        // ["apple", "strawberry", "orange", "grape"]

// Real-world example: Student grades
const grades = [85, 92, 78, 96, 88];
let total = 0;

// Calculate average grade (we'll learn easier ways to do this later)
for (let i = 0; i < grades.length; i++) {
    total += grades[i];     // Add each grade to total
}

const average = total / grades.length;
console.log(`Average grade: ${average.toFixed(1)}`);  // 87.8

// Checking if an item exists in the array
const favoriteColors = ["blue", "green", "purple", "red"];
const hasBlue = favoriteColors.includes("blue");     // true
const hasYellow = favoriteColors.includes("yellow"); // false

console.log(`Do I like blue? ${hasBlue}`);
console.log(`Do I like yellow? ${hasYellow}`);
```

### ⚠️ Common Beginner Mistakes
- Forgetting that array indexes start at 0, not 1
- Trying to access an index that doesn't exist (returns `undefined`)
- Confusing array length with last index (length is always 1 more than the last index)
- Modifying arrays when you meant to create new ones

### 🎯 Practice Challenge
Create an array of your favorite movies, then practice accessing different movies by their index. Add a new movie to the list and remove one you don't like anymore.

---

## Day 10: Array Methods: Basic Operations

### 🧠 Concept Analogy
Array methods are like tools in a toolbox, each designed for a specific job. Just like you have different tools for cutting, measuring, or fixing things, arrays have different methods for adding items, removing items, finding items, or transforming the entire list. Each method is a pre-built function that makes working with arrays easier.

### 📝 What You'll Learn
JavaScript provides many built-in methods to work with arrays efficiently. These methods can save you time and make your code cleaner and more readable.

### 💻 Code Example
```javascript
// Starting with a simple array
let shoppingList = ["milk", "bread", "eggs"];

// Adding items
shoppingList.push("cheese");           // Add to end
shoppingList.unshift("butter");        // Add to beginning
console.log(shoppingList);             // ["butter", "milk", "bread", "eggs", "cheese"]

// Removing items
const lastItem = shoppingList.pop();   // Remove and return last item
const firstItem = shoppingList.shift(); // Remove and return first item
console.log(`Removed: ${lastItem} and ${firstItem}`);
console.log(shoppingList);             // ["milk", "bread", "eggs"]

// Finding items
const hasBread = shoppingList.includes("bread");     // true
const breadIndex = shoppingList.indexOf("bread");    // 1 (position of "bread")
const notFound = shoppingList.indexOf("pizza");      // -1 (not found)

console.log(`Has bread: ${hasBread}`);
console.log(`Bread is at position: ${breadIndex}`);

// Joining array items into a string
const listString = shoppingList.join(", ");          // "milk, bread, eggs"
const listWithAnd = shoppingList.join(" and ");      // "milk and bread and eggs"
console.log(`Shopping list: ${listString}`);

// Slicing - get a portion of the array (doesn't change original)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstThree = numbers.slice(0, 3);              // [1, 2, 3]
const lastThree = numbers.slice(-3);                 // [8, 9, 10]
const middle = numbers.slice(3, 7);                  // [4, 5, 6, 7]

console.log(`First three: ${firstThree}`);
console.log(`Original array unchanged: ${numbers}`);

// Splicing - remove/add items at any position (changes original array)
let colors = ["red", "blue", "green", "yellow", "purple"];
const removed = colors.splice(2, 1);                 // Remove 1 item at index 2
console.log(`Removed: ${removed}`);                  // ["green"]
console.log(`Colors now: ${colors}`);                // ["red", "blue", "yellow", "purple"]

// Add items with splice
colors.splice(2, 0, "orange", "pink");               // Add items at index 2, don't remove any
console.log(`Colors with additions: ${colors}`);     // ["red", "blue", "orange", "pink", "yellow", "purple"]

// Reversing an array
const countdown = [1, 2, 3, 4, 5];
countdown.reverse();                                  // Changes the original array
console.log(`Countdown: ${countdown}`);               // [5, 4, 3, 2, 1]

// Sorting arrays
const names = ["Charlie", "Alice", "Bob", "David"];
names.sort();                                         // Alphabetical order
console.log(`Sorted names: ${names}`);                // ["Alice", "Bob", "Charlie", "David"]

const scores = [85, 92, 78, 96, 88];
scores.sort((a, b) => a - b);                        // Sort numbers (we'll explain this syntax later)
console.log(`Sorted scores: ${scores}`);              // [78, 85, 88, 92, 96]

// Real-world example: Managing a playlist
let playlist = ["Song A", "Song B", "Song C"];

// Add new songs
playlist.push("Song D");
playlist.unshift("Intro Song");
console.log(`Playlist: ${playlist.join(" -> ")}`);

// Remove a song you don't like
const songToRemove = "Song B";
const indexToRemove = playlist.indexOf(songToRemove);
if (indexToRemove !== -1) {
    playlist.splice(indexToRemove, 1);
    console.log(`Removed "${songToRemove}"`);
}
console.log(`Final playlist: ${playlist.join(" -> ")}`);
```

### ⚠️ Common Beginner Mistakes
- Confusing methods that change the original array (like `push`, `pop`, `reverse`) with those that don't (like `slice`, `join`)
- Forgetting that `indexOf` returns -1 when an item isn't found
- Using `splice` when you meant `slice` (they have very different purposes)
- Not understanding that some methods return new values while others modify the existing array

### 🎯 Practice Challenge
Create an array of your top 5 favorite books. Practice adding a new book, removing one you no longer like, and creating a string that lists all books with "and" between each title.

---

## Day 11: Objects - Storing Related Information

### 🧠 Concept Analogy
Think of an object like a filing folder or a contact card. Instead of just storing one piece of information (like an array), an object stores related information with labels. A contact card has a name, phone number, email, and address - all related to one person. Objects work the same way, storing related data with descriptive labels called "properties."

### 📝 What You'll Learn
Objects let you group related information together using key-value pairs. They're perfect for representing real-world things like people, products, or any entity with multiple characteristics.

### 💻 Code Example
```javascript
// Creating an object - like filling out a contact card
const person = {
    name: "Sarah Johnson",           // property: value
    age: 28,                        // properties are separated by commas
    email: "sarah@email.com",
    isEmployed: true,
    hobbies: ["reading", "hiking", "cooking"]  // properties can be any data type
};

// Accessing object properties - two ways
console.log(person.name);           // Dot notation: "Sarah Johnson"
console.log(person["email"]);       // Bracket notation: "sarah@email.com"

// The dot notation is more common and easier to read
console.log(`${person.name} is ${person.age} years old`);

// Changing property values
person.age = 29;                    // Sarah had a birthday!
person.city = "New York";           // Add a new property
console.log(person);

// Real-world example: Product in an online store
const product = {
    id: 12345,
    name: "Wireless Headphones",
    price: 89.99,
    inStock: true,
    category: "Electronics",
    colors: ["black", "white", "blue"],
    ratings: {                      // Objects can contain other objects!
        average: 4.5,
        totalReviews: 324
    }
};

// Accessing nested object properties
console.log(`Average rating: ${product.ratings.average} stars`);
console.log(`Total reviews: ${product.ratings.totalReviews}`);

// Using objects in conditional statements
if (product.inStock && product.price < 100) {
    console.log(`${product.name} is available and affordable!`);
} else {
    console.log(`${product.name} might not be the best option right now.`);
}

// Array of objects - very common pattern
const students = [
    { name: "Alex", grade: 85, subject: "Math" },
    { name: "Maria", grade: 92, subject: "Science" },
    { name: "John", grade: 78, subject: "History" }
];

// Accessing objects in an array
console.log(`${students[0].name} got ${students[0].grade} in ${students[0].subject}`);

// Looping through array of objects (we'll learn better ways later)
for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(`${student.name}: ${student.grade}% in ${student.subject}`);
}

// Objects can have methods (functions as properties)
const calculator = {
    brand: "MathMaster",
    model: "Pro-2000",
    add: function(a, b) {
        return a + b;
    },
    multiply: function(a, b) {
        return a * b;
    }
};

console.log(`Calculator: ${calculator.brand} ${calculator.model}`);
console.log(`5 + 3 = ${calculator.add(5, 3)}`);
console.log(`4 × 7 = ${calculator.multiply(4, 7)}`);
```

### ⚠️ Common Beginner Mistakes
- Forgetting commas between properties
- Using quotes around property names when they're not needed
- Confusing when to use dot notation vs bracket notation
- Trying to access properties that don't exist (returns `undefined`)
- Forgetting that objects are reference types (copying creates a reference, not a new object)

### 🎯 Practice Challenge
Create an object representing your favorite restaurant. Include properties like name, cuisine type, average cost, rating, and an array of your favorite dishes. Practice accessing and modifying different properties.

---

## Day 12: Object Properties & Methods

### 🧠 Concept Analogy
Think of object properties like the specifications on a car's sticker (color, engine size, mileage), and methods like the car's functions (start engine, turn on lights, play music). Properties describe what the object IS, while methods describe what the object can DO. Just like a real car has both characteristics and capabilities, JavaScript objects can store data and perform actions.

### 📝 What You'll Learn
You'll learn how to work with object properties dynamically, create methods that make objects more interactive, and understand the difference between properties (data) and methods (functions).

### 💻 Code Example
```javascript
// Creating an object with both properties and methods
const bankAccount = {
    // Properties - describe the account
    accountNumber: "123456789",
    ownerName: "John Smith",
    balance: 1000,
    accountType: "checking",
    
    // Methods - what the account can do
    deposit: function(amount) {
        this.balance += amount;  // 'this' refers to the current object
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    },
    
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds!");
        }
    },
    
    getBalance: function() {
        return this.balance;
    },
    
    getAccountInfo: function() {
        return `Account ${this.accountNumber} belongs to ${this.ownerName}`;
    }
};

// Using object methods
console.log(bankAccount.getAccountInfo());
bankAccount.deposit(500);
bankAccount.withdraw(200);
console.log(`Current balance: ${bankAccount.getBalance()}`);

// Dynamic property access - useful when property names are in variables
const user = {
    firstName: "Emma",
    lastName: "Wilson",
    age: 25,
    email: "emma@email.com"
};

// Getting property names from user input or variables
const propertyName = "firstName";
console.log(user[propertyName]);        // "Emma" - using bracket notation with variable

// Checking if properties exist
console.log("age" in user);             // true
console.log("phone" in user);           // false
console.log(user.hasOwnProperty("email")); // true

// Getting all property names and values
const propertyNames = Object.keys(user);
const propertyValues = Object.values(user);
console.log("Properties:", propertyNames);  // ["firstName", "lastName", "age", "email"]
console.log("Values:", propertyValues);     // ["Emma", "Wilson", 25, "emma@email.com"]

// Adding and removing properties dynamically
user.phone = "555-1234";               // Add new property
user.city = "Boston";                  // Add another property
delete user.age;                       // Remove property
console.log(user);

// Real-world example: Shopping cart with methods
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
shoppingCart.showCart();

// Object method shorthand (modern JavaScript)
const modernObject = {
    name: "Modern Object",
    
    // Old way to write methods
    oldMethod: function() {
        return "This is the old way";
    },
    
    // New shorthand way (same functionality)
    newMethod() {
        return "This is the new way";
    }
};

console.log(modernObject.oldMethod());
console.log(modernObject.newMethod());
```

### ⚠️ Common Beginner Mistakes
- Forgetting to use `this` when referring to other properties in the same object
- Confusing `this` context (what `this` refers to can change)
- Using dot notation when you need bracket notation for dynamic property names
- Trying to call a property like a method or vice versa
- Modifying objects when you meant to create copies

### 🎯 Practice Challenge
Create a "Pet" object with properties like name, type, age, and hunger level. Add methods like `feed()`, `play()`, and `getStatus()` that interact with these properties. Make the pet's hunger increase over time and require feeding.

---

## Day 13: Functions - Reusable Code Blocks

### 🧠 Concept Analogy
Think of functions like recipes in a cookbook. A recipe has a name (like "Chocolate Chip Cookies"), it might need ingredients (parameters), it has step-by-step instructions (the code inside), and it produces something at the end (the return value). Once you write a recipe, you can use it over and over again without rewriting all the steps each time.

### 📝 What You'll Learn
Functions are reusable blocks of code that perform specific tasks. They help you avoid repeating code, make your programs more organized, and allow you to break complex problems into smaller, manageable pieces.

### 💻 Code Example
```javascript
// Basic function declaration - like writing a recipe
function greetUser() {
    console.log("Hello! Welcome to our website!");
    console.log("We're glad you're here!");
}

// Using (calling) the function - like following the recipe
greetUser();  // This runs all the code inside the function
greetUser();  // You can use it as many times as you want

// Function with parameters - like a recipe that takes ingredients
function greetUserByName(name) {
    console.log(`Hello, ${name}! Welcome to our website!`);
    console.log("We're glad you're here!");
}

// Calling function with different arguments
greetUserByName("Sarah");    // "Hello, Sarah! Welcome to our website!"
greetUserByName("Mike");     // "Hello, Mike! Welcome to our website!"

// Function with multiple parameters
function calculateRectangleArea(length, width) {
    const area = length * width;
    console.log(`A rectangle ${length} × ${width} has an area of ${area} square units`);
}

calculateRectangleArea(5, 3);    // A rectangle 5 × 3 has an area of 15 square units
calculateRectangleArea(10, 7);   // A rectangle 10 × 7 has an area of 70 square units

// Function that returns a value - like a recipe that produces something
function addNumbers(a, b) {
    const sum = a + b;
    return sum;  // Send the result back to whoever called the function
}

// Storing the returned value in a variable
const result1 = addNumbers(5, 3);    // result1 = 8
const result2 = addNumbers(10, 20);  // result2 = 30
console.log(`5 + 3 = ${result1}`);
console.log(`10 + 20 = ${result2}`);

// Using returned values in other calculations
const total = addNumbers(15, 25) + addNumbers(10, 5);  // 40 + 15 = 55
console.log(`Total: ${total}`);

// Real-world example: Temperature converter function
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

// Using the temperature converters
const tempC = 25;
const tempF = celsiusToFahrenheit(tempC);
console.log(`${tempC}°C is ${tempF.toFixed(1)}°F`);

const tempF2 = 77;
const tempC2 = fahrenheitToCelsius(tempF2);
console.log(`${tempF2}°F is ${tempC2.toFixed(1)}°C`);

// Function expression - another way to create functions
const multiply = function(x, y) {
    return x * y;
};

console.log(`4 × 6 = ${multiply(4, 6)}`);  // 4 × 6 = 24

// Functions can call other functions
function calculateCircleArea(radius) {
    const pi = 3.14159;
    return multiply(pi, multiply(radius, radius));  // π × radius²
}

console.log(`Circle with radius 5 has area: ${calculateCircleArea(5).toFixed(2)}`);

// Practical example: Input validation function
function isValidEmail(email) {
    // Simple email validation
    if (email.includes("@") && email.includes(".") && email.length > 5) {
        return true;
    } else {
        return false;
    }
}

// Testing email validation
const email1 = "user@example.com";
const email2 = "invalid-email";

if (isValidEmail(email1)) {
    console.log(`${email1} is a valid email`);
} else {
    console.log(`${email1} is not a valid email`);
}

if (isValidEmail(email2)) {
    console.log(`${email2} is a valid email`);
} else {
    console.log(`${email2} is not a valid email`);
}

// Function with default parameters (in case someone forgets to provide a value)
function createUserProfile(name, age = 18, country = "Unknown") {
    return {
        name: name,
        age: age,
        country: country,
        profileCreated: new Date().toLocaleDateString()
    };
}

const profile1 = createUserProfile("Alice", 25, "USA");
const profile2 = createUserProfile("Bob");  // age will be 18, country will be "Unknown"

console.log(profile1);
console.log(profile2);
```

### ⚠️ Common Beginner Mistakes
- Forgetting parentheses when calling a function (`greetUser` vs `greetUser()`)
- Not understanding the difference between parameters (in function definition) and arguments (when calling)
- Forgetting to `return` a value when you need one
- Trying to use variables that only exist inside the function (scope issues)
- Creating functions that are too long or try to do too many things

### 🎯 Practice Challenge
Create a function called `calculateTip` that takes a bill amount and tip percentage, then returns the tip amount. Create another function called `splitBill` that takes the total bill and number of people, then returns how much each person pays. Use both functions together to solve a real dinner scenario.

---

## Day 14: Function Parameters & Arguments

### 🧠 Concept Analogy
Think of function parameters like blanks in a Mad Libs game. When you write "The [adjective] [noun] [verb] quickly," the words in brackets are parameters - placeholders waiting to be filled in. When someone actually plays and says "The purple elephant danced quickly," those specific words (purple, elephant, danced) are the arguments - the actual values that fill in the blanks.

### 📝 What You'll Learn
Parameters are placeholders in function definitions, while arguments are the actual values you pass when calling the function. Understanding this difference and learning advanced parameter techniques will make your functions more flexible and powerful.

### 💻 Code Example
```javascript
// Basic parameters and arguments
function introduce(name, age, hobby) {
    // name, age, hobby are PARAMETERS (placeholders)
    console.log(`Hi! I'm ${name}, I'm ${age} years old, and I love ${hobby}.`);
}

// When calling the function, these are ARGUMENTS (actual values)
introduce("Sarah", 28, "photography");  // "Sarah", 28, "photography" are arguments
introduce("Mike", 34, "cooking");       // "Mike", 34, "cooking" are arguments

// Default parameters - provides backup values if arguments aren't given
function createGreeting(name = "friend", timeOfDay = "day") {
    return `Good ${timeOfDay}, ${name}! Hope you're doing well.`;
}

console.log(createGreeting("Alice", "morning"));  // Uses both arguments
console.log(createGreeting("Bob"));               // Uses default for timeOfDay
console.log(createGreeting());                    // Uses defaults for both

// Rest parameters - collect multiple arguments into an array
function calculateAverage(...numbers) {
    // ...numbers collects all arguments into an array
    console.log(`Calculating average of: ${numbers}`);
    
    if (numbers.length === 0) {
        return 0;
    }
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    return sum / numbers.length;
}

// Can pass any number of arguments
console.log(`Average: ${calculateAverage(85, 92, 78, 96)}`);        // 4 numbers
console.log(`Average: ${calculateAverage(100, 95)}`);               // 2 numbers
console.log(`Average: ${calculateAverage(88)}`);                    // 1 number
console.log(`Average: ${calculateAverage()}`);                      // no numbers

// Real-world example: Building flexible user messages
function sendNotification(recipient, message, urgency = "normal", ...tags) {
    const urgencyLevels = {
        low: "📝",
        normal: "📧", 
        high: "⚠️",
        critical: "🚨"
    };
    
    const icon = urgencyLevels[urgency] || "📧";
    const tagString = tags.length > 0 ? ` [Tags: ${tags.join(", ")}]` : "";
    
    console.log(`${icon} TO: ${recipient}`);
    console.log(`MESSAGE: ${message}${tagString}`);
    console.log(`PRIORITY: ${urgency.toUpperCase()}`);
    console.log("---");
}

// Different ways to call the same function
sendNotification("john@email.com", "Your order has shipped!");
sendNotification("admin@company.com", "Server maintenance required", "high");
sendNotification("team@startup.com", "Meeting at 3 PM", "normal", "meeting", "urgent", "today");

// Parameter destructuring - extracting values from objects/arrays
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

// Practical example: Form validation with multiple parameters
function validateForm(data, requiredFields = [], options = {}) {
    const {
        minPasswordLength = 8,
        requireEmail = true,
        allowEmptyOptional = true
    } = options;
    
    const errors = [];
    
    // Check required fields
    for (let field of requiredFields) {
        if (!data[field] || data[field].trim() === "") {
            errors.push(`${field} is required`);
        }
    }
    
    // Check email format if provided
    if (requireEmail && data.email && !data.email.includes("@")) {
        errors.push("Email must be valid");
    }
    
    // Check password length if provided
    if (data.password && data.password.length < minPasswordLength) {
        errors.push(`Password must be at least ${minPasswordLength} characters`);
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// Testing form validation
const formData = {
    username: "johnsmith",
    email: "john@email.com",
    password: "short",
    age: 25
};

const validationResult = validateForm(
    formData, 
    ["username", "email", "password"], 
    { minPasswordLength: 10, requireEmail: true }
);

console.log("Validation result:", validationResult);
```

### ⚠️ Common Beginner Mistakes
- Confusing parameters (in function definition) with arguments (when calling function)
- Not understanding that parameter names are just local labels
- Forgetting that arguments are passed by value for primitives, by reference for objects
- Using too many parameters (consider using an object instead)
- Not providing default values for optional parameters

### 🎯 Practice Challenge
Create a function called `orderPizza` that takes required parameters (size, crust), optional parameters with defaults (sauce, cheese), and uses rest parameters for toppings. Make it return an order summary with total price calculation.

---

## Day 15: Return Statements & Function Output

### 🧠 Concept Analogy
Think of a function's return statement like a vending machine. You put money in (arguments), press a button to select what you want (call the function), the machine does its work inside (executes the code), and then it gives you your product (returns a value). Without a return statement, it's like a vending machine that takes your money and does all the work but never gives you anything back.

### 📝 What You'll Learn
Return statements are how functions send results back to the code that called them. Understanding returns, early returns, and different types of return values will make your functions more useful and your code more efficient.

### 💻 Code Example
```javascript
// Basic return - sending a value back
function addTwoNumbers(a, b) {
    const sum = a + b;
    return sum;  // Send the result back
    // Any code after return won't run!
}

const result = addTwoNumbers(5, 3);  // result gets the returned value (8)
console.log(`The sum is: ${result}`);

// Function without return - returns undefined by default
function sayHello(name) {
    console.log(`Hello, ${name}!`);
    // No return statement = returns undefined
}

const greeting = sayHello("Alice");  // greeting will be undefined
console.log(`Return value: ${greeting}`);  // "Return value: undefined"

// Early return - exit the function early based on conditions
function divide(a, b) {
    if (b === 0) {
        console.log("Error: Cannot divide by zero!");
        return null;  // Exit early with error value
    }
    
    return a / b;  // Normal return if no error
}

console.log(divide(10, 2));  // 5
console.log(divide(10, 0));  // null (with error message)

// Returning different data types
function getUserInfo(userId) {
    if (userId === 1) {
        return {  // Return an object
            name: "John Doe",
            email: "john@email.com",
            isActive: true
        };
    } else if (userId === 2) {
        return ["Jane", "Smith", "jane@email.com"];  // Return an array
    } else if (userId === 3) {
        return "Guest User";  // Return a string
    } else {
        return false;  // Return a boolean for "not found"
    }
}

console.log(getUserInfo(1));  // Object
console.log(getUserInfo(2));  // Array  
console.log(getUserInfo(3));  // String
console.log(getUserInfo(99)); // false

// Multiple return points - different exits based on logic
function checkPassword(password) {
    if (password.length < 8) {
        return {
            valid: false,
            message: "Password must be at least 8 characters long"
        };
    }
    
    if (!password.includes("@") && !password.includes("!") && !password.includes("#")) {
        return {
            valid: false,
            message: "Password must contain at least one special character (@, !, or #)"
        };
    }
    
    if (password.toLowerCase() === password) {
        return {
            valid: false,
            message: "Password must contain at least one uppercase letter"
        };
    }
    
    // If we get here, password passed all checks
    return {
        valid: true,
        message: "Password is strong!"
    };
}

// Testing password validation
const passwords = ["short", "thisisalongpassword", "LongPassword!", "weak"];

passwords.forEach(pwd => {
    const result = checkPassword(pwd);
    console.log(`"${pwd}": ${result.message}`);
});

// Returning functions (functions can return other functions)
function createCounter(startValue = 0) {
    let count = startValue;
    
    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter(0);    // Start at 0
const counter2 = createCounter(100);  // Start at 100

console.log(counter1());  // 1
console.log(counter1());  // 2
console.log(counter2());  // 101
console.log(counter1());  // 3

// Practical example: Shopping cart calculator
function calculateOrder(items, taxRate = 0.08, discountPercent = 0) {
    if (!items || items.length === 0) {
        return {
            success: false,
            message: "No items in cart"
        };
    }
    
    let subtotal = 0;
    const itemDetails = [];
    
    // Calculate subtotal and prepare item details
    for (let item of items) {
        if (!item.price || !item.quantity || item.price < 0 || item.quantity < 1) {
            return {
                success: false,
                message: `Invalid item: ${item.name || 'Unknown item'}`
            };
        }
        
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        itemDetails.push({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            total: itemTotal
        });
    }
    
    // Apply discount
    const discountAmount = subtotal * (discountPercent / 100);
    const afterDiscount = subtotal - discountAmount;
    
    // Calculate tax
    const taxAmount = afterDiscount * taxRate;
    const finalTotal = afterDiscount + taxAmount;
    
    // Return comprehensive order summary
    return {
        success: true,
        orderSummary: {
            items: itemDetails,
            subtotal: Math.round(subtotal * 100) / 100,
            discountPercent: discountPercent,
            discountAmount: Math.round(discountAmount * 100) / 100,
            taxRate: taxRate * 100,
            taxAmount: Math.round(taxAmount * 100) / 100,
            finalTotal: Math.round(finalTotal * 100) / 100
        }
    };
}

// Test the order calculator
const shoppingCart = [
    { name: "T-Shirt", price: 19.99, quantity: 2 },
    { name: "Jeans", price: 49.99, quantity: 1 },
    { name: "Sneakers", price: 79.99, quantity: 1 }
];

const orderResult = calculateOrder(shoppingCart, 0.08, 10);  // 8% tax, 10% discount

if (orderResult.success) {
    const order = orderResult.orderSummary;
    console.log("Order Summary:");
    console.log(`Subtotal: ${order.subtotal}`);
    console.log(`Discount (${order.discountPercent}%): -${order.discountAmount}`);
    console.log(`Tax (${order.taxRate}%): ${order.taxAmount}`);
    console.log(`Final Total: ${order.finalTotal}`);
} else {
    console.log(`Error: ${orderResult.message}`);
}

// Arrow function returns (shorter syntax for simple returns)
const square = (x) => x * x;  // Implicit return
const cube = (x) => {         // Explicit return needed with {}
    return x * x * x;
};

console.log(`5 squared: ${square(5)}`);  // 25
console.log(`4 cubed: ${cube(4)}`);      // 64
```

### ⚠️ Common Beginner Mistakes
- Forgetting to return a value when you need one
- Putting code after a return statement (it won't run)
- Not understanding that return exits the function immediately
- Trying to use a returned value when the function doesn't return anything
- Returning the wrong data type for what the calling code expects

### 🎯 Practice Challenge
Create a function called `analyzeText` that takes a string and returns an object with properties like wordCount, characterCount, hasNumbers, and longestWord. Test it with different types of text input.

---

## Day 16: Scope - Where Variables Live

### 🧠 Concept Analogy
Think of scope like the rooms in a house. Variables declared in your bedroom (local scope) can only be used in your bedroom - your siblings can't access them from their rooms. But variables in the living room (global scope) can be used by anyone in the house. And if you're in your bedroom, you can still access things in the living room, but not things in your sibling's bedroom.

### 📝 What You'll Learn
Scope determines where variables can be accessed in your code. Understanding global scope, function scope, and block scope will help you avoid bugs and write more predictable code.

### 💻 Code Example
```javascript
// Global scope - accessible everywhere
const globalMessage = "I can be accessed from anywhere!";
let globalCounter = 0;

function demonstrateScope() {
    // Function scope - only accessible inside this function
    const localMessage = "I only exist inside this function";
    let functionVariable = "Me too!";
    
    console.log(globalMessage);    // ✅ Can access global variables
    console.log(localMessage);     // ✅ Can access local variables
    
    globalCounter++;               // ✅ Can modify global variables
    
    if (true) {
        // Block scope - only accessible inside this block
        let blockVariable = "I only exist in this if block";
        const anotherBlockVar = "Same here!";
        
        console.log(globalMessage);   // ✅ Can access global
        console.log(localMessage);    // ✅ Can access function scope
        console.log(blockVariable);   // ✅ Can access block scope
    }
    
    // console.log(blockVariable);  // ❌ Error! Block variable not accessible here
}

demonstrateScope();
console.log(globalMessage);       // ✅ Global accessible everywhere
console.log(globalCounter);       // 1 (was modified inside function)
// console.log(localMessage);     // ❌ Error! Function variable not accessible outside

// Scope chain - inner scopes can access outer scopes
function outerFunction() {
    const outerVariable = "I'm in the outer function";
    
    function innerFunction() {
        const innerVariable = "I'm in the inner function";
        
        console.log(outerVariable);   // ✅ Inner can access outer
        console.log(innerVariable);   // ✅ Inner can access its own
        console.log(globalMessage);   // ✅ Inner can access global
    }
    
    innerFunction();
    console.log(innerVariable);     // ❌ Error! Outer can't access inner
}

outerFunction();

// Variable shadowing - inner variables can "hide" outer ones
let name = "Global Alice";

function greetUser() {
    let name = "Function Bob";  // This "shadows" the global name
    
    console.log(`Hello, ${name}!`);  // Uses the function-scoped name
}

greetUser();                    // "Hello, Function Bob!"
console.log(`Global name: ${name}`);  // "Global Alice" (unchanged)

// Practical example: Counter with private variables
function createSecureCounter() {
    let count = 0;              // Private variable - only accessible inside
    let maxCount = 100;         // Another private variable
    
    return {
        increment: function() {
            if (count < maxCount) {
                count++;
                return count;
            } else {
                return "Maximum count reached!";
            }
        },
        
        decrement: function() {
            if (count > 0) {
                count--;
                return count;
            } else {
                return "Cannot go below zero!";
            }
        },
        
        getValue: function() {
            return count;
        },
        
        reset: function() {
            count = 0;
            return "Counter reset to 0";
        }
    };
}

const myCounter = createSecureCounter();
console.log(myCounter.increment());  // 1
console.log(myCounter.increment());  // 2
console.log(myCounter.getValue());   // 2
console.log(myCounter.reset());      // "Counter reset to 0"
// console.log(count);               // ❌ Error! count is private

// Block scope with let and const vs var
function scopeComparison() {
    console.log("=== Block Scope Demo ===");
    
    if (true) {
        var varVariable = "I'm declared with var";
        let letVariable = "I'm declared with let";
        const constVariable = "I'm declared with const";
    }
    
    console.log(varVariable);        // ✅ var ignores block scope
    // console.log(letVariable);     // ❌ Error! let respects block scope
    // console.log(constVariable);   // ❌ Error! const respects block scope
    
    // Loop scope problems with var
    console.log("=== Loop Scope Issues ===");
    
    // Problem with var
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(`var i: ${i}`);  // Will print 3, 3, 3 (unexpected!)
        }, 100);
    }
    
    // Solution with let
    for (let j = 0; j < 3; j++) {
        setTimeout(function() {
            console.log(`let j: ${j}`);  // Will print 0, 1, 2 (expected!)
        }, 150);
    }
}

scopeComparison();

// Real-world example: Module pattern using scope
const shoppingCartModule = (function() {
    // Private variables and functions
    let items = [];
    let total = 0;
    
    function calculateTotal() {
        total = 0;
        for (let item of items) {
            total += item.price * item.quantity;
        }
    }
    
    function findItemIndex(name) {
        return items.findIndex(item => item.name === name);
    }
    
    // Public interface - what the outside world can access
    return {
        addItem: function(name, price, quantity = 1) {
            const existingIndex = findItemIndex(name);
            
            if (existingIndex !== -1) {
                items[existingIndex].quantity += quantity;
            } else {
                items.push({ name, price, quantity });
            }
            
            calculateTotal();
            return `Added ${quantity} ${name}(s) to cart`;
        },
        
        removeItem: function(name) {
            const index = findItemIndex(name);
            
            if (index !== -1) {
                items.splice(index, 1);
                calculateTotal();
                return `Removed ${name} from cart`;
            }
            
            return `${name} not found in cart`;
        },
        
        getCart: function() {
            return {
                items: [...items],  // Return a copy, not the original
                total: total,
                itemCount: items.length
            };
        },
        
        clearCart: function() {
            items = [];
            total = 0;
            return "Cart cleared";
        }
    };
})();  // IIFE - Immediately Invoked Function Expression

// Using the module
console.log(shoppingCartModule.addItem("Apple", 1.50, 3));
console.log(shoppingCartModule.addItem("Banana", 0.75, 2));
console.log(shoppingCartModule.getCart());
// console.log(items);  // ❌ Error! items is private

// Scope best practices example
function processUserData(userData) {
    // Validate input at the top
    if (!userData || typeof userData !== 'object') {
        return { success: false, error: "Invalid user data" };
    }
    
    // Use block scope to limit variable lifetime
    let processedData;
    
    {
        // This block limits the scope of temporary variables
        const tempName = userData.name?.trim() || "Unknown";
        const tempEmail = userData.email?.toLowerCase() || "";
        const tempAge = parseInt(userData.age) || 0;
        
        processedData = {
            name: tempName,
            email: tempEmail,
            age: tempAge,
            isValid: tempName !== "Unknown" && tempEmail.includes("@") && tempAge > 0
        };
        
        // tempName, tempEmail, tempAge are automatically cleaned up here
    }
    
    return { success: true, data: processedData };
}

// Test the function
const result = processUserData({ name: "  John Doe  ", email: "JOHN@EMAIL.COM", age: "25" });
console.log(result);
```

### ⚠️ Common Beginner Mistakes
- Accidentally creating global variables by forgetting `let`, `const`, or `var`
- Trying to access variables outside their scope
- Not understanding that `var` has different scoping rules than `let` and `const`
- Creating variables in loops that don't behave as expected
- Modifying global variables when you meant to create local ones

### 🎯 Practice Challenge
Create a "Bank Account" function that uses private variables for balance and account number. Provide public methods for deposit, withdraw, and check balance, but make sure the internal data cannot be accessed directly from outside the function.

---

## Day 17: Loops: for & while

### 🧠 Concept Analogy
Think of loops like doing repetitive tasks in real life. When you're addressing wedding invitations, you don't write unique instructions for each envelope. Instead, you follow the same process: "Take envelope, write address, add stamp, put in pile" and repeat until all envelopes are done. Loops let your computer repeat actions automatically instead of you writing the same code over and over.

### 📝 What You'll Learn
Loops are essential for repeating actions efficiently. You'll learn when to use `for` loops (when you know how many times to repeat) and `while` loops (when you repeat until a condition changes).

### 💻 Code Example
```javascript
// Basic for loop - when you know how many times to repeat
console.log("=== Basic For Loop ===");

for (let i = 0; i < 5; i++) {
    // i starts at 0, continues while i < 5, increases by 1 each time
    console.log(`Loop iteration ${i}`);
}
// Prints: Loop iteration 0, 1, 2, 3, 4

// For loop with different step sizes
console.log("\n=== Counting by 2s ===");
for (let i = 0; i <= 10; i += 2) {
    console.log(`Even number: ${i}`);
}
// Prints: 0, 2, 4, 6, 8, 10

// Counting backwards
console.log("\n=== Countdown ===");
for (let i = 5; i >= 1; i--) {
    console.log(`Countdown: ${i}`);
}
console.log("Blast off! 🚀");

// Looping through arrays
console.log("\n=== Looping Through Array ===");
const fruits = ["apple", "banana", "orange", "grape"];

for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// While loop - when you don't know exactly how many times to repeat
console.log("\n=== Basic While Loop ===");
let count = 0;

while (count < 3) {
    console.log(`While loop count: ${count}`);
    count++;  // Don't forget to update the condition variable!
}

// Practical example: Password attempts
console.log("\n=== Password Attempts ===");
let attempts = 0;
const maxAttempts = 3;
const correctPassword = "secret123";
let userPassword = "wrong";  // Simulating user input

while (attempts < maxAttempts && userPassword !== correctPassword) {
    attempts++;
    console.log(`Attempt ${attempts}: Password "${userPassword}" is incorrect`);
    
    // Simulate different password attempts
    if (attempts === 1) userPassword = "password";
    else if (attempts === 2) userPassword = "secret123";  // This will be correct
}

if (userPassword === correctPassword) {
    console.log("🎉 Login successful!");
} else {
    console.log("🔒 Account locked due to too many failed attempts");
}

// Do-while loop - runs at least once, then checks condition
console.log("\n=== Do-While Loop ===");
let userChoice;
let menuAttempts = 0;

do {
    menuAttempts++;
    console.log("=== Menu ===");
    console.log("1. View Profile");
    console.log("2. Settings");
    console.log("3. Exit");
    
    // Simulate user input
    userChoice = menuAttempts === 1 ? "invalid" : "3";
    console.log(`User selected: ${userChoice}`);
    
    if (userChoice !== "1" && userChoice !== "2" && userChoice !== "3") {
        console.log("Invalid choice. Please try again.");
    }
    
} while (userChoice !== "1" && userChoice !== "2" && userChoice !== "3");

console.log(`Valid choice selected: ${userChoice}`);

// Nested loops - loops inside loops
console.log("\n=== Multiplication Table ===");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
    console.log("---");  // Separator between tables
}

// Real-world example: Processing shopping cart
console.log("\n=== Shopping Cart Processing ===");
const shoppingCart = [
    { name: "T-Shirt", price: 19.99, quantity: 2 },
    { name: "Jeans", price: 49.99, quantity: 1 },
    { name: "Sneakers", price: 79.99, quantity: 1 },
    { name: "Hat", price: 24.99, quantity: 3 }
];

let totalItems = 0;
let totalCost = 0;

console.log("Processing your order:");
console.log("=====================");

for (let i = 0; i < shoppingCart.length; i++) {
    const item = shoppingCart[i];
    const itemTotal = item.price * item.quantity;
    
    console.log(`${item.name}: ${item.price} × ${item.quantity} = ${itemTotal.toFixed(2)}`);
    
    totalItems += item.quantity;
    totalCost += itemTotal;
}

console.log("=====================");
console.log(`Total Items: ${totalItems}`);
console.log(`Total Cost: ${totalCost.toFixed(2)}`);

// Loop with conditions - finding specific items
console.log("\n=== Finding Expensive Items ===");
const products = [
    { name: "Phone", price: 699 },
    { name: "Laptop", price: 1299 },
    { name: "Headphones", price: 199 },
    { name: "Tablet", price: 329 },
    { name: "Watch", price: 299 }
];

const expensiveItems = [];
const priceThreshold = 300;

for (let i = 0; i < products.length; i++) {
    if (products[i].price > priceThreshold) {
        expensiveItems.push(products[i]);
    }
}

console.log(`Items over ${priceThreshold}:`);
for (let i = 0; i < expensiveItems.length; i++) {
    console.log(`- ${expensiveItems[i].name}: ${expensiveItems[i].price}`);
}

// Creating patterns with loops
console.log("\n=== Star Pattern ===");
for (let row = 1; row <= 5; row++) {
    let pattern = "";
    for (let star = 1; star <= row; star++) {
        pattern += "⭐";
    }
    console.log(pattern);
}

// Practical search function using while loop
function findUserById(users, targetId) {
    let index = 0;
    
    while (index < users.length) {
        if (users[index].id === targetId) {
            return {
                found: true,
                user: users[index],
                position: index
            };
        }
        index++;
    }
    
    return {
        found: false,
        message: `User with ID ${targetId} not found`
    };
}

// Test the search function
const users = [
    { id: 101, name: "Alice", email: "alice@email.com" },
    { id: 102, name: "Bob", email: "bob@email.com" },
    { id: 103, name: "Charlie", email: "charlie@email.com" }
];

console.log("\n=== User Search ===");
console.log(findUserById(users, 102));  // Should find Bob
console.log(findUserById(users, 999));  // Should not find anyone

// Performance consideration: avoiding infinite loops
console.log("\n=== Safe Loop Example ===");
function safeCountdown(start) {
    let current = start;
    let iterations = 0;
    const maxIterations = 1000;  // Safety limit
    
    while (current > 0 && iterations < maxIterations) {
        console.log(`Safe countdown: ${current}`);
        current--;
        iterations++;
    }
    
    if (iterations >= maxIterations) {
        console.log("⚠️ Loop stopped to prevent infinite execution");
    } else {
        console.log("✅ Countdown completed safely");
    }
}

safeCountdown(5);
```

### ⚠️ Common Beginner Mistakes
- Creating infinite loops by forgetting to update the loop condition
- Off-by-one errors (looping one too many or too few times)
- Using the wrong type of loop for the situation
- Modifying the loop variable inside the loop body incorrectly
- Forgetting that array indexes start at 0

### 🎯 Practice Challenge
Create a program that simulates rolling dice until you get doubles (same number on both dice). Count how many rolls it takes and display each roll. Use a while loop and make sure to avoid infinite loops with a maximum attempt limit.

---

## Day 18: Loop Control: break & continue

### 🧠 Concept Analogy
Think of loop control like traffic signals for your code. `break` is like a red light that says "stop everything and exit the loop completely." `continue` is like a yellow light that says "skip the rest of this round and jump to the next one." Just like traffic signals help manage the flow of cars, these statements help you control the flow of your loops.

### 📝 What You'll Learn
`break` and `continue` give you fine control over loop execution. `break` exits the loop entirely, while `continue` skips the current iteration and moves to the next one. These are powerful tools for handling special cases and optimizing loop performance.

### 💻 Code Example
```javascript
// Basic break - exit loop completely
console.log("=== Basic Break Example ===");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Found 5! Breaking out of loop.");
        break;  // Exit the loop immediately
    }
    console.log(`Number: ${i}`);
}
console.log("Loop finished early due to break");
// Prints: 1, 2, 3, 4, then "Found 5!" message, then "Loop finished"

// Basic continue - skip current iteration
console.log("\n=== Basic Continue Example ===");

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {  // If number is even
        continue;  // Skip the rest of this iteration
    }
    console.log(`Odd number: ${i}`);
}
// Prints only: 1, 3, 5, 7, 9

// Real-world example: Processing user data with validation
console.log("\n=== User Data Processing ===");

const userData = [
    { name: "Alice", age: 25, email: "alice@email.com" },
    { name: "", age: 30, email: "invalid-email" },          // Invalid: no name
    { name: "Bob", age: 17, email: "bob@email.com" },       // Invalid: too young
    { name: "Charlie", age: 35, email: "charlie@email.com" },
    { name: "Diana", age: 28, email: "" },                  // Invalid: no email
    { name: "Eve", age: 32, email: "eve@email.com" }
];

const validUsers = [];
const errors = [];

for (let i = 0; i < userData.length; i++) {
    const user = userData[i];
    
    // Skip users with missing names
    if (!user.name || user.name.trim() === "") {
        console.log(`Skipping user at index ${i}: No name provided`);
        errors.push(`Index ${i}: Missing name`);
        continue;
    }
    
    // Skip users under 18
    if (user.age < 18) {
        console.log(`Skipping ${user.name}: Under 18 years old`);
        errors.push(`${user.name}: Under age limit`);
        continue;
    }
    
    // Skip users with invalid email
    if (!user.email || !user.email.includes("@")) {
        console.log(`Skipping ${user.name}: Invalid email`);
        errors.push(`${user.name}: Invalid email`);
        continue;
    }
    
    // If we get here, user is valid
    validUsers.push(user);
    console.log(`✅ ${user.name} added to valid users`);
}

console.log(`\nProcessing complete: ${validUsers.length} valid users, ${errors.length} errors`);

// Break in search operations - stop when found
console.log("\n=== Search with Break ===");

const products = [
    { id: 1, name: "Phone", price: 699, inStock: true },
    { id: 2, name: "Laptop", price: 1299, inStock: false },
    { id: 3, name: "Tablet", price: 329, inStock: true },
    { id: 4, name: "Watch", price: 299, inStock: true }
];

function findProductById(productId) {
    console.log(`Searching for product ID: ${productId}`);
    
    for (let i = 0; i < products.length; i++) {
        console.log(`Checking product: ${products[i].name}`);
        
        if (products[i].id === productId) {
            console.log(`Found it! ${products[i].name}`);
            return products[i];  // Return also exits the function and loop
        }
    }
    
    console.log("Product not found");
    return null;
}

findProductById(3);  // Will stop searching after finding tablet

// While loop with break and continue
console.log("\n=== Password Retry System ===");

function passwordRetrySystem() {
    const correctPassword = "secure123";
    let attempts = 0;
    const maxAttempts = 5;
    
    // Simulate different password attempts
    const attemptedPasswords = ["password", "123456", "", "secure123", "admin"];
    
    while (attempts < maxAttempts) {
        const currentPassword = attemptedPasswords[attempts] || "wrong";
        attempts++;
        
        console.log(`Attempt ${attempts}: Trying password "${currentPassword}"`);
        
        // Skip empty passwords
        if (currentPassword === "") {
            console.log("Empty password - please try again");
            continue;
        }
        
        // Check if password is correct
        if (currentPassword === correctPassword) {
            console.log("🎉 Login successful!");
            break;  // Exit the loop - we're done!
        }
        
        console.log("❌ Incorrect password");
        
        // Warn about remaining attempts
        const remaining = maxAttempts - attempts;
        if (remaining > 0) {
            console.log(`${remaining} attempts remaining`);
        }
    }
    
    // Check if we exited due to max attempts
    if (attempts >= maxAttempts) {
        console.log("🔒 Account locked - too many failed attempts");
    }
}

passwordRetrySystem();

// Nested loops with labeled break/continue
console.log("\n=== Nested Loops with Labels ===");

outerLoop: for (let i = 1; i <= 3; i++) {
    console.log(`Outer loop: ${i}`);
    
    innerLoop: for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log(`Breaking outer loop at i=${i}, j=${j}`);
            break outerLoop;  // Break out of the outer loop, not just inner
        }
        
        console.log(`  Inner loop: ${j}`);
    }
}

console.log("Nested loop finished");

// Practical example: Data cleaning with continue
console.log("\n=== Data Cleaning ===");

const rawSalesData = [
    { date: "2024-01-01", amount: 150.00, customer: "John" },
    { date: "", amount: 200.00, customer: "Jane" },           // Missing date
    { date: "2024-01-03", amount: -50.00, customer: "Bob" },  // Negative amount
    { date: "2024-01-04", amount: 0, customer: "" },          // No customer
    { date: "2024-01-05", amount: 300.00, customer: "Alice" },
    { date: "2024-01-06", amount: 175.50, customer: "Charlie" }
];

const cleanedData = [];
let skippedRecords = 0;

for (let i = 0; i < rawSalesData.length; i++) {
    const record = rawSalesData[i];
    
    // Skip records with missing date
    if (!record.date) {
        console.log(`Skipping record ${i}: Missing date`);
        skippedRecords++;
        continue;
    }
    
    // Skip records with invalid amounts
    if (record.amount <= 0) {
        console.log(`Skipping record ${i}: Invalid amount (${record.amount})`);
        skippedRecords++;
        continue;
    }
    
    // Skip records with missing customer
    if (!record.customer) {
        console.log(`Skipping record ${i}: Missing customer`);
        skippedRecords++;
        continue;
    }
    
    // If we get here, record is clean
    cleanedData.push(record);
    console.log(`✅ Record ${i}: ${record.customer} - ${record.amount}`);
}

console.log(`\nData cleaning complete:`);
console.log(`Clean records: ${cleanedData.length}`);
console.log(`Skipped records: ${skippedRecords}`);

// Performance optimization with break
console.log("\n=== Performance Optimization ===");

function findFirstExpensiveItem(items, threshold) {
    console.log(`Looking for first item over ${threshold}`);
    let comparisons = 0;
    
    for (let i = 0; i < items.length; i++) {
        comparisons++;
        console.log(`Checking: ${items[i].name} - ${items[i].price}`);
        
        if (items[i].price > threshold) {
            console.log(`Found expensive item: ${items[i].name}`);
            console.log(`Stopped after ${comparisons} comparisons (instead of ${items.length})`);
            return items[i];
        }
    }
    
    console.log(`No items found over ${threshold} after ${comparisons} comparisons`);
    return null;
}

const inventory = [
    { name: "Pen", price: 2.99 },
    { name: "Notebook", price: 5.99 },
    { name: "Calculator", price: 15.99 },
    { name: "Backpack", price: 45.99 },  // This will be found first
    { name: "Laptop", price: 899.99 }    // This won't be reached
];

findFirstExpensiveItem(inventory, 40);

// Interactive menu with break
console.log("\n=== Interactive Menu Simulation ===");

function simulateMenu() {
    const menuOptions = ["1", "2", "invalid", "3"];  // Simulated user inputs
    let optionIndex = 0;
    
    while (true) {  // Infinite loop - will break when user chooses to exit
        console.log("\n=== Main Menu ===");
        console.log("1. View Account");
        console.log("2. Make Transaction");
        console.log("3. Exit");
        
        const userChoice = menuOptions[optionIndex] || "3";
        optionIndex++;
        
        console.log(`User selected: ${userChoice}`);
        
        if (userChoice === "1") {
            console.log("Displaying account information...");
            continue;  // Go back to menu
        }
        
        if (userChoice === "2") {
            console.log("Processing transaction...");
            continue;  // Go back to menu
        }
        
        if (userChoice === "3") {
            console.log("Thank you for using our service!");
            break;  // Exit the menu loop
        }
        
        // If we get here, it's an invalid option
        console.log("Invalid option. Please try again.");
        // continue is implicit here - loop will continue
    }
}

simulateMenu();
```

### ⚠️ Common Beginner Mistakes
- Using `break` or `continue` outside of loops (they only work inside loops)
- Confusing `break` (exit loop) with `continue` (skip to next iteration)
- Forgetting that `continue` skips the rest of the current iteration
- Using labeled breaks/continues when simple ones would work
- Not considering that `return` in a function also exits loops

### 🎯 Practice Challenge
Create a number guessing game where the computer picks a random number 1-100, and the user has 7 attempts to guess it. Use `continue` to handle invalid inputs (non-numbers) and `break` when the correct number is guessed or attempts run out.

---

## Day 19: Array Iteration Methods

### 🧠 Concept Analogy
Think of array iteration methods like different tools for processing a conveyor belt of items. `forEach` is like having a worker examine each item and do something with it. `map` is like having a machine that transforms each item into something new. `filter` is like having a quality inspector who only lets certain items through. Each method is designed for a specific type of processing task.

### 📝 What You'll Learn
Modern JavaScript provides elegant methods for working with arrays that are more readable and functional than traditional loops. These methods make your code cleaner and express your intent more clearly.

### 💻 Code Example
```javascript
// Sample data for our examples
const students = [
    { name: "Alice", grade: 85, subject: "Math", age: 20 },
    { name: "Bob", grade: 92, subject: "Science", age: 19 },
    { name: "Charlie", grade: 78, subject: "History", age: 21 },
    { name: "Diana", grade: 96, subject: "Math", age: 20 },
    { name: "Eve", grade: 88, subject: "Science", age: 22 }
];

// forEach - execute a function for each array element
console.log("=== forEach - Do something with each item ===");

students.forEach(function(student, index) {
    console.log(`${index + 1}. ${student.name} scored ${student.grade}% in ${student.subject}`);
});

// forEach with arrow function (shorter syntax)
console.log("\n=== forEach with Arrow Function ===");
students.forEach((student, index) => {
    console.log(`Student ${index + 1}: ${student.name}`);
});

// map - transform each element and create a new array
console.log("\n=== map - Transform each item ===");

const studentNames = students.map(function(student) {
    return student.name;
});
console.log("Student names:", studentNames);

// map with arrow function - even shorter
const grades = students.map(student => student.grade);
console.log("All grades:", grades);

// map to create more complex transformations
const studentSummaries = students.map(student => {
    return `${student.name} (${student.age}): ${student.grade}% in ${student.subject}`;
});

console.log("\nStudent summaries:");
studentSummaries.forEach(summary => console.log(summary));

// filter - create new array with elements that pass a test
console.log("\n=== filter - Keep only items that match criteria ===");

const highPerformers = students.filter(function(student) {
    return student.grade >= 90;
});

console.log("High performers (90% or above):");
highPerformers.forEach(student => {
    console.log(`- ${student.name}: ${student.grade}%`);
});

// Multiple filter criteria
const youngMathStudents = students.filter(student => {
    return student.age <= 20 && student.subject === "Math";
});

console.log("\nYoung math students:");
youngMathStudents.forEach(student => {
    console.log(`- ${student.name}, age ${student.age}`);
});

// find - get the first element that matches
console.log("\n=== find - Get first match ===");

const firstHighPerformer = students.find(student => student.grade >= 90);
console.log("First high performer:", firstHighPerformer);

const scienceStudent = students.find(student => student.subject === "Science");
console.log("First science student:", scienceStudent.name);

// findIndex - get the index of first match
const topStudentIndex = students.findIndex(student => student.grade >= 95);
console.log(`Top student is at index: ${topStudentIndex}`);

// some - check if at least one element passes test
console.log("\n=== some - Check if any match ===");

const hasHighPerformer = students.some(student => student.grade >= 95);
const hasOldStudent = students.some(student => student.age >= 25);

console.log(`Has student with 95%+: ${hasHighPerformer}`);
console.log(`Has student 25+: ${hasOldStudent}`);

// every - check if all elements pass test
console.log("\n=== every - Check if all match ===");

const allPassed = students.every(student => student.grade >= 60);
const allYoung = students.every(student => student.age < 25);

console.log(`All students passed (60%+): ${allPassed}`);
console.log(`All students under 25: ${allYoung}`);

// reduce - combine all elements into single value
console.log("\n=== reduce - Combine into single result ===");

// Calculate total of all grades
const totalGrades = students.reduce(function(accumulator, student) {
    return accumulator + student.grade;
}, 0);  // 0 is the starting value

const averageGrade = totalGrades / students.length;
console.log(`Average grade: ${averageGrade.toFixed(1)}%`);

// reduce to build an object - group by subject
const studentsBySubject = students.reduce((acc, student) => {
    if (!acc[student.subject]) {
        acc[student.subject] = [];
    }
    acc[student.subject].push(student);
    return acc;
}, {});

console.log("\nStudents grouped by subject:");
for (let subject in studentsBySubject) {
    console.log(`${subject}: ${studentsBySubject[subject].map(s => s.name).join(", ")}`);
}

// Real-world example: E-commerce order processing
console.log("\n=== E-commerce Example ===");

const orders = [
    { id: 1, customer: "John", items: ["shirt", "pants"], total: 85.50, status: "pending" },
    { id: 2, customer: "Jane", items: ["shoes"], total: 120.00, status: "shipped" },
    { id: 3, customer: "Bob", items: ["hat", "socks", "belt"], total: 45.25, status: "pending" },
    { id: 4, customer: "Alice", items: ["dress"], total: 95.75, status: "delivered" },
    { id: 5, customer: "Charlie", items: ["jacket"], total: 150.00, status: "pending" }
];

// Get all pending orders
const pendingOrders = orders.filter(order => order.status === "pending");
console.log(`Pending orders: ${pendingOrders.length}`);

// Calculate total revenue from shipped/delivered orders
const completedOrders = orders.filter(order => 
    order.status === "shipped" || order.status === "delivered"
);

const totalRevenue = completedOrders.reduce((total, order) => total + order.total, 0);
console.log(`Revenue from completed orders: ${totalRevenue.toFixed(2)}`);

// Get customer names for orders over $100
const bigSpenders = orders
    .filter(order => order.total > 100)
    .map(order => order.customer);

console.log("Customers with orders over $100:", bigSpenders);

// Check if any order has more than 2 items
const hasBulkOrder = orders.some(order => order.items.length > 2);
console.log(`Has bulk orders (3+ items): ${hasBulkOrder}`);

// Method chaining - combine multiple operations
console.log("\n=== Method Chaining ===");

const processedData = students
    .filter(student => student.grade >= 80)      // Keep good students
    .map(student => ({                           // Transform data
        name: student.name,
        grade: student.grade,
        letterGrade: student.grade >= 90 ? 'A' : 'B'
    }))
    .sort((a, b) => b.grade - a.grade);          // Sort by grade (highest first)

console.log("Top students with letter grades:");
processedData.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name}: ${student.grade}% (${student.letterGrade})`);
});

// Practical example: Shopping cart calculations
console.log("\n=== Shopping Cart Processing ===");

const cartItems = [
    { name: "Laptop", price: 999.99, quantity: 1, category: "Electronics" },
    { name: "Mouse", price: 25.99, quantity: 2, category: "Electronics" },
    { name: "Keyboard", price: 79.99, quantity: 1, category: "Electronics" },
    { name: "Desk Lamp", price: 45.99, quantity: 1, category: "Furniture" },
    { name: "Notebook", price: 3.99, quantity: 5, category: "Office" }
];

// Calculate subtotal for each item
const itemsWithSubtotal = cartItems.map(item => ({
    ...item,  // Spread operator - copy all existing properties
    subtotal: item.price * item.quantity
}));

// Find most expensive single item
const mostExpensiveItem = cartItems.reduce((max, item) => 
    item.price > max.price ? item : max
);

console.log(`Most expensive item: ${mostExpensiveItem.name} (${mostExpensiveItem.price})`);

// Calculate total by category
const totalsByCategory = cartItems.reduce((totals, item) => {
    const category = item.category;
    const itemTotal = item.price * item.quantity;
    
    totals[category] = (totals[category] || 0) + itemTotal;
    return totals;
}, {});

console.log("\nTotals by category:");
Object.entries(totalsByCategory).forEach(([category, total]) => {
    console.log(`${category}: ${total.toFixed(2)}`);
});

// Get summary statistics
const cartSummary = {
    totalItems: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    totalValue: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    averageItemPrice: cartItems.reduce((sum, item) => sum + item.price, 0) / cartItems.length,
    categories: [...new Set(cartItems.map(item => item.category))]  // Unique categories
};

console.log("\nCart Summary:");
console.log(`Total Items: ${cartSummary.totalItems}`);
console.log(`Total Value: ${cartSummary.totalValue.toFixed(2)}`);
console.log(`Average Item Price: ${cartSummary.averageItemPrice.toFixed(2)}`);
console.log(`Categories: ${cartSummary.categories.join(", ")}`);

// Advanced example: Data analysis
console.log("\n=== Advanced Data Analysis ===");

const salesData = [
    { month: "Jan", sales: 45000, region: "North" },
    { month: "Jan", sales: 52000, region: "South" },
    { month: "Feb", sales: 48000, region: "North" },
    { month: "Feb", sales: 55000, region: "South" },
    { month: "Mar", sales: 51000, region: "North" },
    { month: "Mar", sales: 58000, region: "South" }
];

// Calculate monthly totals
const monthlyTotals = salesData.reduce((totals, record) => {
    const month = record.month;
    totals[month] = (totals[month] || 0) + record.sales;
    return totals;
}, {});

console.log("Monthly sales totals:");
Object.entries(monthlyTotals).forEach(([month, total]) => {
    console.log(`${month}: ${total.toLocaleString()}`);
});

// Find best performing region
const regionTotals = salesData.reduce((totals, record) => {
    const region = record.region;
    totals[region] = (totals[region] || 0) + record.sales;
    return totals;
}, {});

const bestRegion = Object.entries(regionTotals).reduce((best, [region, total]) => 
    total > best.total ? { region, total } : best
, { region: "", total: 0 });

console.log(`Best performing region: ${bestRegion.region} (${bestRegion.total.toLocaleString()})`);
```

### ⚠️ Common Beginner Mistakes
- Using `forEach` when you need `map` (forEach doesn't return a new array)
- Forgetting to `return` in `map`, `filter`, and `reduce` functions
- Mutating the original array when you meant to create a new one
- Using `map` when you just want to iterate (use `forEach` instead)
- Not understanding that these methods create new arrays (except `forEach`)

### 🎯 Practice Challenge
Create a program that processes a list of movies (with properties: title, year, genre, rating). Use array methods to: 1) Find all movies from a specific decade, 2) Get average rating by genre, 3) Create a list of just movie titles for highly-rated films (8+ rating), and 4) Check if all movies are from after the year 2000.

---

## Day 20: Error Handling: try/catch

### 🧠 Concept Analogy
Think of error handling like having safety nets and backup plans in real life. When you're learning to ride a bike, you might use training wheels (preventive measures) and have someone ready to catch you if you fall (error handling). In programming, `try/catch` is like having a safety net that catches problems before they crash your entire program and lets you handle them gracefully.

### 📝 What You'll Learn
Errors are inevitable in programming, but you can handle them gracefully instead of letting them crash your program. The `try/catch` statement lets you attempt risky operations and provide backup plans when things go wrong.

### 💻 Code Example
```javascript
// Basic try/catch structure
console.log("=== Basic Error Handling ===");

try {
    // Code that might cause an error
    console.log("Starting risky operation...");
    
    // This will cause an error
    let result = someUndefinedFunction();
    
    console.log("This won't run if error occurs above");
} catch (error) {
    // This runs if an error occurs in try block
    console.log("Caught an error:", error.message);
}

console.log("Program continues after error handling");

// Handling different types of errors
console.log("\n=== Handling Different Error Types ===");

function riskyCalculation(a, b) {
    try {
        // Check for invalid inputs
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Both parameters must be numbers");
        }
        
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        
        const result = a / b;
        console.log(`${a} / ${b} = ${result}`);
        return result;
        
    } catch (error) {
        console.log(`Error in calculation: ${error.message}`);
        return null;
    }
}

// Test different scenarios
riskyCalculation(10, 2);      // Normal case
riskyCalculation(10, 0);      // Division by zero
riskyCalculation("10", 2);    // Invalid input type
riskyCalculation(15, 3);      // Normal case

// try/catch/finally - finally always runs
console.log("\n=== try/catch/finally ===");

function processUserData(userData) {
    console.log("Starting data processing...");
    
    try {
        if (!userData) {
            throw new Error("No user data provided");
        }
        
        // Simulate processing
        console.log(`Processing data for: ${userData.name}`);
        
        if (!userData.email || !userData.email.includes("@")) {
            throw new Error("Invalid email format");
        }
        
        console.log("Data processing successful!");
        return { success: true, message: "User data processed" };
        
    } catch (error) {
        console.log(`Processing failed: ${error.message}`);
        return { success: false, error: error.message };
        
    } finally {
        // This ALWAYS runs, whether there was an error or not
        console.log("Cleaning up resources...");
        console.log("Data processing complete.\n");
    }
}

// Test with different data
processUserData({ name: "Alice", email: "alice@email.com" });
processUserData({ name: "Bob", email: "invalid-email" });
processUserData(null);

// Real-world example: API data fetching simulation
console.log("=== API Data Fetching Simulation ===");

function fetchUserProfile(userId) {
    try {
        // Simulate network delay and potential failures
        console.log(`Fetching profile for user ${userId}...`);
        
        if (!userId) {
            throw new Error("User ID is required");
        }
        
        if (typeof userId !== 'number' || userId < 1) {
            throw new Error("User ID must be a positive number");
        }
        
        // Simulate different responses based on user ID
        if (userId === 999) {
            throw new Error("Network connection failed");
        }
        
        if (userId > 100) {
            throw new Error("User not found");
        }
        
        // Simulate successful response
        const userData = {
            id: userId,
            name: `User ${userId}`,
            email: `user${userId}@example.com`,
            status: "active"
        };
        
        console.log("✅ Profile fetched successfully");
        return { success: true, data: userData };
        
    } catch (error) {
        console.log(`❌ Failed to fetch profile: ${error.message}`);
        
        // Return user-friendly error response
        return { 
            success: false, 
            error: error.message,
            fallbackData: { id: null, name: "Guest User", email: null }
        };
    }
}

// Test different scenarios
const result1 = fetchUserProfile(5);
const result2 = fetchUserProfile(150);
const result3 = fetchUserProfile(999);
const result4 = fetchUserProfile("invalid");

// JSON parsing with error handling
console.log("\n=== JSON Parsing Safety ===");

function safeJsonParse(jsonString, fallbackValue = null) {
    try {
        console.log(`Attempting to parse: ${jsonString}`);
        const parsed = JSON.parse(jsonString);
        console.log("✅ JSON parsed successfully");
        return { success: true, data: parsed };
        
    } catch (error) {
        console.log(`❌ JSON parsing failed: ${error.message}`);
        return { success: false, error: error.message, data: fallbackValue };
    }
}

// Test JSON parsing
const validJson = '{"name": "Alice", "age": 30}';
const invalidJson = '{"name": "Bob", "age": }';  // Missing value
const notJson = 'This is not JSON at all';

console.log("Valid JSON:", safeJsonParse(validJson));
console.log("Invalid JSON:", safeJsonParse(invalidJson, { name: "Unknown", age: 0 }));
console.log("Not JSON:", safeJsonParse(notJson));

// Form validation with comprehensive error handling
console.log("\n=== Form Validation with Error Handling ===");

function validateAndProcessForm(formData) {
    const errors = [];
    
    try {
        console.log("Validating form data...");
        
        // Check if formData exists
        if (!formData || typeof formData !== 'object') {
            throw new Error("Form data is missing or invalid");
        }
        
        // Validate required fields
        const requiredFields = ['name', 'email', 'age'];
        for (let field of requiredFields) {
            if (!formData[field]) {
                errors.push(`${field} is required`);
            }
        }
        
        // Validate specific field formats
        if (formData.email && !formData.email.includes('@')) {
            errors.push("Email must contain @ symbol");
        }
        
        if (formData.age && (isNaN(formData.age) || formData.age < 13)) {
            errors.push("Age must be a number 13 or greater");
        }
        
        if (formData.phone && formData.phone.length < 10) {
            errors.push("Phone number must be at least 10 digits");
        }
        
        // If we have validation errors, throw them
        if (errors.length > 0) {
            throw new Error(`Validation failed: ${errors.join(', ')}`);
        }
        
        // If we get here, validation passed
        console.log("✅ Form validation successful");
        
        // Simulate form processing
        const processedData = {
            ...formData,
            id: Math.floor(Math.random() * 1000),
            createdAt: new Date().toISOString(),
            status: 'pending'
        };
        
        return { success: true, data: processedData };
        
    } catch (error) {
        console.log(`❌ Form processing failed: ${error.message}`);
        return { success: false, error: error.message, validationErrors: errors };
    }
}

// Test form validation
const validForm = {
    name: "John Doe",
    email: "john@email.com",
    age: 25,
    phone: "1234567890"
};

const invalidForm = {
    name: "",
    email: "invalid-email",
    age: "not-a-number",
    phone: "123"
};

console.log("Valid form result:", validateAndProcessForm(validForm));
console.log("Invalid form result:", validateAndProcessForm(invalidForm));

// Nested error handling - errors within errors
console.log("\n=== Nested Error Handling ===");

function complexDataProcessing(data) {
    try {
        console.log("Starting complex data processing...");
        
        // First level of processing
        const step1Result = processStep1(data);
        console.log("Step 1 completed");
        
        // Second level of processing
        const step2Result = processStep2(step1Result);
        console.log("Step 2 completed");
        
        // Final processing
        const finalResult = processStep3(step2Result);
        console.log("✅ All processing completed successfully");
        
        return { success: true, result: finalResult };
        
    } catch (error) {
        console.log(`❌ Processing pipeline failed: ${error.message}`);
        
        // You might want to log the full error for debugging
        console.log("Full error details:", error);
        
        return { success: false, error: error.message };
    }
}

function processStep1(data) {
    try {
        if (!data || !data.input) {
            throw new Error("Step 1: Missing input data");
        }
        return { processedInput: data.input.toUpperCase() };
    } catch (error) {
        throw new Error(`Step 1 failed: ${error.message}`);
    }
}

function processStep2(data) {
    try {
        if (!data.processedInput) {
            throw new Error("Step 2: Missing processed input");
        }
        return { finalData: data.processedInput + "_PROCESSED" };
    } catch (error) {
        throw new Error(`Step 2 failed: ${error.message}`);
    }
}

function processStep3(data) {
    try {
        if (!data.finalData) {
            throw new Error("Step 3: Missing final data");
        }
        return { result: data.finalData, timestamp: new Date() };
    } catch (error) {
        throw new Error(`Step 3 failed: ${error.message}`);
    }
}

// Test the complex processing
console.log("Testing with valid data:");
const validData = { input: "hello world" };
console.log(complexDataProcessing(validData));

console.log("\nTesting with invalid data:");
const invalidData = { wrongProperty: "oops" };
console.log(complexDataProcessing(invalidData));

// Custom error types
console.log("\n=== Custom Error Types ===");

class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "NetworkError";
        this.statusCode = statusCode;
    }
}

function advancedUserRegistration(userData) {
    try {
        // Validate email
        if (!userData.email || !userData.email.includes('@')) {
            throw new ValidationError("Invalid email format", "email");
        }
        
        // Validate password
        if (!userData.password || userData.password.length < 8) {
            throw new ValidationError("Password must be at least 8 characters", "password");
        }
        
        // Simulate network call
        if (Math.random() > 0.7) {  // 30% chance of network error
            throw new NetworkError("Server temporarily unavailable", 503);
        }
        
        console.log("✅ User registered successfully");
        return { success: true, userId: Math.floor(Math.random() * 1000) };
        
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log(`❌ Validation Error in ${error.field}: ${error.message}`);
            return { success: false, type: 'validation', field: error.field, message: error.message };
            
        } else if (error instanceof NetworkError) {
            console.log(`❌ Network Error (${error.statusCode}): ${error.message}`);
            return { success: false, type: 'network', statusCode: error.statusCode, message: error.message };
            
        } else {
            console.log(`❌ Unexpected Error: ${error.message}`);
            return { success: false, type: 'unknown', message: error.message };
        }
    }
}

// Test custom error handling
console.log("Testing user registration:");
console.log(advancedUserRegistration({ email: "test@email.com", password: "securepass123" }));
console.log(advancedUserRegistration({ email: "invalid", password: "short" }));
console.log(advancedUserRegistration({ email: "test@email.com", password: "securepass123" }));
```

### ⚠️ Common Beginner Mistakes
- Not handling errors at all (letting the program crash)
- Catching errors but not doing anything useful with them
- Using try/catch for normal program flow instead of just error handling
- Forgetting that `finally` always runs, even if there's a `return` in try or catch
- Not providing meaningful error messages to users

### 🎯 Practice Challenge
Create a calculator function that handles various errors: division by zero, invalid inputs (non-numbers), and unsupported operations. Use try/catch to handle errors gracefully and provide helpful error messages. Test with different types of invalid inputs.

---


## Day 21: DOM Manipulation Basics 

### 🧠 Concept Analogy
Think of the DOM (Document Object Model) like a family tree of your webpage. Every HTML element is a family member - the `<html>` tag is the great-grandparent, `<body>` is a grandparent, and elements like `<div>` and `<p>` are children and grandchildren. JavaScript lets you visit any family member, change their appearance, add new family members, or remove them entirely.

### 💻 Code Example
```javascript
// Finding and changing elements
const title = document.getElementById('main-title');
title.textContent = "DOM Magic!";
title.style.color = "blue";

// Adding new elements
const newParagraph = document.createElement('p');
newParagraph.textContent = "I was created with JavaScript!";
document.body.appendChild(newParagraph);

// Changing CSS classes
const element = document.querySelector('.highlight');
element.classList.add('new-class');
element.classList.remove('highlight');
element.classList.toggle('active');
```

---

## Day 22: Event Handling

### 🧠 Concept Analogy
Think of event handling like setting up doorbells around your house. Each doorbell (event listener) is waiting for someone to press it (user action). When pressed, it triggers a specific response - maybe playing a sound, turning on lights, or opening the door. In JavaScript, you set up these "doorbells" on HTML elements to respond to clicks, typing, mouse movements, and more.

### 📝 What You'll Learn
Events are how users interact with your webpage. You'll learn to respond to clicks, form submissions, keyboard input, and other user actions to create interactive experiences.

### 💻 Code Example
```javascript
// Basic click event
const button = document.getElementById('my-button');
button.addEventListener('click', function() {
    alert('Button was clicked!');
});

// Form submission event
const form = document.getElementById('user-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop form from submitting normally
    const formData = new FormData(form);
    console.log('Name:', formData.get('name'));
});

// Keyboard events
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('Enter key pressed!');
    }
});

// Mouse events with event object
const box = document.getElementById('interactive-box');
box.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'lightblue';
});
```

### ⚠️ Common Beginner Mistakes
- Forgetting to use `addEventListener` and trying to assign functions directly
- Not preventing default behavior when needed (like form submissions)
- Adding event listeners inside loops without proper closure handling

---

## Day 23: Form Handling & User Input

### 🧠 Concept Analogy
Think of form handling like being a restaurant server taking orders. You need to listen carefully to what the customer says (capture input), write it down correctly (validate data), check if they want everything that's available (handle different input types), and then deliver the order to the kitchen (process the data). Good form handling ensures no orders get lost and customers get what they expect.

### 📝 What You'll Learn
Forms are the primary way users send information to your application. You'll learn to capture, validate, and process user input from various form elements safely and effectively.

### 💻 Code Example
```javascript
// Form validation and handling
const registrationForm = document.getElementById('registration');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(registrationForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const age = parseInt(formData.get('age'));
    
    // Validation
    const errors = [];
    if (name.length < 2) errors.push('Name must be at least 2 characters');
    if (!email.includes('@')) errors.push('Please enter a valid email');
    if (age < 13 || age > 120) errors.push('Age must be between 13 and 120');
    
    // Display results
    const errorDiv = document.getElementById('errors');
    if (errors.length > 0) {
        errorDiv.innerHTML = errors.map(err => `<p class="error">${err}</p>`).join('');
    } else {
        errorDiv.innerHTML = '<p class="success">Registration successful!</p>';
        console.log('User data:', { name, email, age });
    }
});

// Real-time input validation
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', function(event) {
    const email = event.target.value;
    const isValid = email.includes('@') && email.includes('.');
    
    if (isValid) {
        event.target.classList.remove('error');
        event.target.classList.add('success');
    } else {
        event.target.classList.add('error');
        event.target.classList.remove('success');
    }
});
```

### ⚠️ Common Beginner Mistakes
- Not validating data on both client and server side
- Trusting user input without sanitization
- Forgetting to prevent form submission when validation fails

---

## Day 24: Local Storage

### 🧠 Concept Analogy
Think of localStorage like a personal notebook that stays in your browser. Unlike regular variables that disappear when you close the page (like writing on a whiteboard), localStorage keeps your notes even after you close the browser and come back later. It's perfect for remembering user preferences, saving game progress, or keeping shopping cart items.

### 📝 What You'll Learn
localStorage allows you to save data in the user's browser that persists between sessions. You'll learn to store, retrieve, and manage data locally to create better user experiences.

### 💻 Code Example
```javascript
// Storing data in localStorage
const user = {
    name: 'Alice',
    preferences: { theme: 'dark', language: 'en' },
    lastVisit: new Date().toISOString()
};

// Store object (convert to JSON string)
localStorage.setItem('userData', JSON.stringify(user));

// Store simple values
localStorage.setItem('username', 'Alice');
localStorage.setItem('visitCount', '1');

// Retrieving data
const savedUser = JSON.parse(localStorage.getItem('userData'));
const username = localStorage.getItem('username');
const visitCount = parseInt(localStorage.getItem('visitCount')) || 0;

console.log('Saved user:', savedUser);
console.log('Visit count:', visitCount);

// Updating visit count
const newVisitCount = visitCount + 1;
localStorage.setItem('visitCount', newVisitCount.toString());

// Removing specific item
localStorage.removeItem('oldData');

// Clear all localStorage (use with caution!)
// localStorage.clear();

// Practical example: Theme preference
function saveTheme(theme) {
    localStorage.setItem('userTheme', theme);
    document.body.className = theme;
}

function loadTheme() {
    const savedTheme = localStorage.getItem('userTheme') || 'light';
    document.body.className = savedTheme;
    return savedTheme;
}

// Shopping cart example
const cart = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    
    addItem(item) {
        this.items.push(item);
        this.save();
    },
    
    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.save();
    },
    
    save() {
        localStorage.setItem('cartItems', JSON.stringify(this.items));
    },
    
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
};
```

### ⚠️ Common Beginner Mistakes
- Storing objects directly without JSON.stringify/parse
- Not checking if localStorage is available (some browsers/modes don't support it)
- Storing sensitive information in localStorage (it's not secure)

---

## Day 25: Fetch API - Getting Data

### 🧠 Concept Analogy
Think of the Fetch API like ordering food for delivery. You make a request (place an order), wait for a response (delivery arrives), and then handle what you receive (enjoy your meal or deal with wrong/missing items). The fetch process is asynchronous - you don't sit and wait doing nothing, you continue with other activities until your order arrives.

### 📝 What You'll Learn
The Fetch API lets your webpage communicate with servers to get or send data. You'll learn to make HTTP requests, handle responses, and deal with errors when working with external APIs or your own backend services.

### 💻 Code Example
```javascript
// Basic GET request
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('User data:', data);
        document.getElementById('user-name').textContent = data.name;
    })
    .catch(error => {
        console.error('Fetch error:', error);
        document.getElementById('error-message').textContent = 'Failed to load user data';
    });

// POST request - sending data
const newPost = {
    title: 'My New Post',
    body: 'This is the content of my post',
    userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost)
})
    .then(response => response.json())
    .then(data => {
        console.log('Created post:', data);
    })
    .catch(error => {
        console.error('Error creating post:', error);
    });

// Practical example: Weather app
async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
        
        if (!response.ok) {
            throw new Error('Weather data not available');
        }
        
        const weatherData = await response.json();
        
        return {
            temperature: Math.round(weatherData.main.temp - 273.15), // Convert from Kelvin
            description: weatherData.weather[0].description,
            city: weatherData.name
        };
    } catch (error) {
        console.error('Weather fetch error:', error);
        return null;
    }
}

// Loading states and error handling
function displayWeather(city) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = '<p>Loading weather...</p>';
    
    getWeather(city)
        .then(weather => {
            if (weather) {
                weatherDiv.innerHTML = `
                    <h3>${weather.city}</h3>
                    <p>Temperature: ${weather.temperature}°C</p>
                    <p>Conditions: ${weather.description}</p>
                `;
            } else {
                weatherDiv.innerHTML = '<p>Unable to load weather data</p>';
            }
        });
}
```

### ⚠️ Common Beginner Mistakes
- Not handling errors properly (network issues, invalid responses)
- Forgetting to check if response.ok before processing data
- Not showing loading states to users during API calls

---

## Day 26: Async/Await - Modern Asynchronous Code

### 🧠 Concept Analogy
Think of async/await like having a personal assistant handle time-consuming tasks. Instead of saying "do this, then when it's done do that, then when that's done..." (callback hell), you can write instructions like a normal to-do list: "await package delivery, then await signature, then send confirmation." The async/await syntax makes asynchronous code read like synchronous code.

### 📝 What You'll Learn
Async/await is modern syntax that makes working with promises much cleaner and easier to read. You'll learn to handle multiple asynchronous operations, error handling, and concurrent requests elegantly.

### 💻 Code Example
```javascript
// Basic async/await usage
async function fetchUserData(userId) {
    try {
        console.log('Fetching user data...');
        
        // await pauses execution until promise resolves
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        if (!response.ok) {
            throw new Error(`User not found: ${response.status}`);
        }
        
        const userData = await response.json();
        console.log('User data received:', userData.name);
        
        return userData;
    } catch (error) {
        console.error('Error fetching user:', error.message);
        return null;
    }
}

// Using the async function
async function displayUserProfile(userId) {
    const user = await fetchUserData(userId);
    
    if (user) {
        document.getElementById('profile').innerHTML = `
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
        `;
    } else {
        document.getElementById('profile').innerHTML = '<p>Failed to load user profile</p>';
    }
}

// Sequential vs Parallel operations
async function sequentialRequests() {
    console.log('Starting sequential requests...');
    const startTime = Date.now();
    
    // These run one after another
    const user1 = await fetchUserData(1);
    const user2 = await fetchUserData(2);
    const user3 = await fetchUserData(3);
    
    const endTime = Date.now();
    console.log(`Sequential requests took: ${endTime - startTime}ms`);
    
    return [user1, user2, user3];
}

async function parallelRequests() {
    console.log('Starting parallel requests...');
    const startTime = Date.now();
    
    // These run at the same time
    const [user1, user2, user3] = await Promise.all([
        fetchUserData(1),
        fetchUserData(2),
        fetchUserData(3)
    ]);
    
    const endTime = Date.now();
    console.log(`Parallel requests took: ${endTime - startTime}ms`);
    
    return [user1, user2, user3];
}

// Real-world example: Complete user dashboard
async function loadUserDashboard(userId) {
    try {
        // Show loading state
        const dashboard = document.getElementById('dashboard');
        dashboard.innerHTML = '<div class="loading">Loading dashboard...</div>';
        
        // Fetch user data and posts in parallel
        const [userData, userPosts] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(r => r.json()),
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(r => r.json())
        ]);
        
        // Process the data
        const dashboardHTML = `
            <div class="user-info">
                <h2>Welcome, ${userData.name}!</h2>
                <p>Email: ${userData.email}</p>
                <p>Company: ${userData.company.name}</p>
            </div>
            <div class="user-posts">
                <h3>Your Recent Posts (${userPosts.length})</h3>
                ${userPosts.slice(0, 3).map(post => `
                    <div class="post">
                        <h4>${post.title}</h4>
                        <p>${post.body.substring(0, 100)}...</p>
                    </div>
                `).join('')}
            </div>
        `;
        
        dashboard.innerHTML = dashboardHTML;
        
    } catch (error) {
        console.error('Dashboard loading failed:', error);
        document.getElementById('dashboard').innerHTML = 
            '<div class="error">Failed to load dashboard. Please try again.</div>';
    }
}

// Error handling with multiple operations
async function robustDataFetching() {
    const results = {
        user: null,
        posts: null,
        comments: null,
        errors: []
    };
    
    // Try to fetch each piece of data independently
    try {
        results.user = await fetchUserData(1);
    } catch (error) {
        results.errors.push('Failed to load user data');
    }
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
        results.posts = await response.json();
    } catch (error) {
        results.errors.push('Failed to load posts');
    }
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
        results.comments = await response.json();
    } catch (error) {
        results.errors.push('Failed to load comments');
    }
    
    return results;
}
```

### ⚠️ Common Beginner Mistakes
- Forgetting to mark functions as `async` when using `await`
- Not handling errors with try/catch in async functions
- Using await in loops when Promise.all would be more efficient
- Mixing async/await with .then() chains unnecessarily

---

## Day 27: ES6+ Features: Arrow Functions

### 🧠 Concept Analogy
Think of arrow functions like shorthand notation in writing. Instead of writing "I am going to the store," you might write "Going to store" in a quick note. Arrow functions are JavaScript's shorthand for writing functions - they're more concise and often clearer, especially for simple operations like transforming data or handling events.

### 📝 What You'll Learn
Arrow functions provide a shorter syntax for writing functions and have different behavior with the `this` keyword. You'll learn when to use them and when traditional functions are better.

### 💻 Code Example
```javascript
// Traditional function vs Arrow function
function traditionalAdd(a, b) {
    return a + b;
}

const arrowAdd = (a, b) => a + b;

console.log(traditionalAdd(5, 3)); // 8
console.log(arrowAdd(5, 3));       // 8

// Different arrow function syntaxes
const numbers = [1, 2, 3, 4, 5];

// Single parameter (parentheses optional)
const doubled = numbers.map(n => n * 2);
const doubled2 = numbers.map((n) => n * 2); // Same thing

// Multiple parameters (parentheses required)
const combined = numbers.map((n, index) => `${index}: ${n}`);

// No parameters (parentheses required)
const getRandom = () => Math.random();

// Block body (return statement needed)
const processNumber = (n) => {
    const doubled = n * 2;
    const message = `${n} doubled is ${doubled}`;
    return message;
};

// Returning objects (wrap in parentheses)
const createUser = (name, age) => ({
    name: name,
    age: age,
    created: new Date()
});

// Array methods with arrow functions
const products = [
    { name: 'Phone', price: 699, category: 'Electronics' },
    { name: 'Book', price: 15, category: 'Education' },
    { name: 'Laptop', price: 1299, category: 'Electronics' }
];

// Filter expensive items
const expensive = products.filter(product => product.price > 100);

// Get just the names
const names = products.map(product => product.name);

// Find total price
const total = products.reduce((sum, product) => sum + product.price, 0);

// Chain multiple operations
const expensiveElectronics = products
    .filter(p => p.category === 'Electronics')
    .filter(p => p.price > 500)
    .map(p => p.name);

console.log('Expensive electronics:', expensiveElectronics);

// 'this' behavior difference
const traditionalObject = {
    name: 'Traditional',
    greet: function() {
        console.log(`Hello from ${this.name}`);
    }
};

const arrowObject = {
    name: 'Arrow',
    greet: () => {
        console.log(`Hello from ${this.name}`); // 'this' doesn't refer to the object!
    }
};

traditionalObject.greet(); // "Hello from Traditional"
arrowObject.greet();       // "Hello from undefined"

// Practical example: Event handling
const buttons = document.querySelectorAll('.action-button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        console.log(`Button clicked: ${action}`);
    });
});
```

### ⚠️ Common Beginner Mistakes
- Using arrow functions when you need `this` to refer to the object
- Forgetting parentheses around parameters when there are multiple
- Forgetting to wrap object returns in parentheses
- Using arrow functions for methods that need to access `this`

---

## Day 28: Destructuring & Spread Operator

### 🧠 Concept Analogy
Think of destructuring like unpacking a suitcase - instead of digging through the whole suitcase to find your shirt and pants, you can directly pull out exactly what you need. The spread operator is like emptying the contents of one suitcase into another, or spreading cards from one hand across the table.

### 📝 What You'll Learn
Destructuring allows you to extract values from arrays and objects into separate variables. The spread operator lets you expand arrays and objects into individual elements or properties.

### 💻 Code Example
```javascript
// Array destructuring
const colors = ['red', 'green', 'blue', 'yellow'];

// Old way
const firstColor = colors[0];
const secondColor = colors[1];

// New way with destructuring
const [first, second, third] = colors;
console.log(first, second, third); // red green blue

// Skip elements
const [primary, , tertiary] = colors; // Skip green
console.log(primary, tertiary); // red blue

// Rest in destructuring
const [main, ...otherColors] = colors;
console.log(main);        // red
console.log(otherColors); // ['green', 'blue', 'yellow']

// Object destructuring
const user = {
    name: 'Alice',
    age: 30,
    email: 'alice@email.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

// Extract properties
const { name, age, email } = user;
console.log(name, age, email); // Alice 30 alice@email.com

// Rename while destructuring
const { name: userName, age: userAge } = user;
console.log(userName, userAge); // Alice 30

// Default values
const { name: fullName, phone = 'Not provided' } = user;
console.log(fullName, phone); // Alice Not provided

// Nested destructuring
const { address: { city, country } } = user;
console.log(city, country); // New York USA

// Spread operator with arrays
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

// Combine arrays
const allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // [1, 2, 3, 4, 5, 6]

// Copy array
const numbersCopy = [...numbers];
numbersCopy.push(4);
console.log(numbers);     // [1, 2, 3] (original unchanged)
console.log(numbersCopy); // [1, 2, 3, 4]

// Spread operator with objects
const basicInfo = { name: 'Bob', age: 25 };
const contactInfo = { email: 'bob@email.com', phone: '123-456-7890' };

// Combine objects
const fullInfo = { ...basicInfo, ...contactInfo };
console.log(fullInfo);
// { name: 'Bob', age: 25, email: 'bob@email.com', phone: '123-456-7890' }

// Override properties
const updatedInfo = { ...basicInfo, age: 26, city: 'Boston' };
console.log(updatedInfo); // { name: 'Bob', age: 26, city: 'Boston' }

// Function parameters with destructuring
function createUserCard({ name, email, age = 'Unknown' }) {
    return `
        <div class="user-card">
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <p>Age: ${age}</p>
        </div>
    `;
}

const userCard = createUserCard({ name: 'Charlie', email: 'charlie@email.com' });

// Array destructuring in functions
function getNameAndAge([name, age]) {
    return `${name} is ${age} years old`;
}

const personData = ['Diana', 28];
console.log(getNameAndAge(personData)); // Diana is 28 years old

// Practical example: API response handling
async function fetchAndDisplayUser(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData = await response.json();
        
        // Destructure the response
        const { 
            name, 
            email, 
            phone,
            address: { city, zipcode },
            company: { name: companyName }
        } = userData;
        
        // Display the information
        const userInfo = document.getElementById('user-info');
        userInfo.innerHTML = `
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Location: ${city}, ${zipcode}</p>
            <p>Company: ${companyName}</p>
        `;
        
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

// Shopping cart example with spread
const shoppingCart = {
    items: [
        { id: 1, name: 'T-Shirt', price: 20, quantity: 2 },
        { id: 2, name: 'Jeans', price: 50, quantity: 1 }
    ],
    
    addItem(newItem) {
        // Add item while keeping existing items
        this.items = [...this.items, { ...newItem, id: Date.now() }];
    },
    
    updateItem(itemId, updates) {
        this.items = this.items.map(item => 
            item.id === itemId ? { ...item, ...updates } : item
        );
    },
    
    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    },
    
    getTotal() {
        return this.items.reduce((total, { price, quantity }) => 
            total + (price * quantity), 0
        );
    }
};

// Test the shopping cart
shoppingCart.addItem({ name: 'Sneakers', price: 80, quantity: 1 });
shoppingCart.updateItem(1, { quantity: 3 });
console.log('Cart total:', shoppingCart.getTotal());
```

### ⚠️ Common Beginner Mistakes
- Trying to destructure from undefined or null values
- Forgetting that spread creates shallow copies, not deep copies
- Using destructuring when simple property access would be clearer
- Not providing default values when destructuring might encounter missing properties

---

## Day 29: Modules & Code Organization

### 🧠 Concept Analogy
Think of modules like organizing your tools into different toolboxes. Instead of having all your tools in one giant, messy box, you have separate boxes for electrical tools, plumbing tools, and carpentry tools. Each toolbox (module) contains related tools and can be easily carried to where it's needed. Modules help you organize code into logical, reusable pieces.

### 📝 What You'll Learn
Modules allow you to split your code into separate files, making it more organized, reusable, and maintainable. You'll learn to export and import functions, objects, and classes between files.

### 💻 Code Example
```javascript
// mathUtils.js - A utility module
export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

export const PI = 3.14159;

// Default export
export default function calculate(operation, a, b) {
    switch (operation) {
        case 'add': return add(a, b);
        case 'multiply': return multiply(a, b);
        default: return 0;
    }
}

// userService.js - Service module
const API_BASE = 'https://jsonplaceholder.typicode.com';

export class UserService {
    static async getUser(id) {
        const response = await fetch(`${API_BASE}/users/${id}`);
        return response.json();
    }
    
    static async createUser(userData) {
        const response = await fetch(`${API_BASE}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        return response.json();
    }
}

export const userHelpers = {
    formatName: (user) => `${user.name} (${user.email})`,
    isAdult: (user) => user.age >= 18
};

// main.js - Using the modules
import calculate, { add, multiply, PI } from './mathUtils.js';
import { UserService, userHelpers } from './userService.js';

// Use imported functions
console.log(add(5, 3));        // 8
console.log(multiply(4, 7));   // 28
console.log(PI);               // 3.14159
console.log(calculate('add', 10, 5)); // 15

// Use imported classes and objects
async function displayUser(userId) {
    try {
        const user = await UserService.getUser(userId);
        const formattedName = userHelpers.formatName(user);
        console.log('User:', formattedName);
    } catch (error) {
        console.error('Failed to load user:', error);
    }
}

// Named vs default imports
import defaultCalculate from './mathUtils.js';           // Default import
import { add as addNumbers } from './mathUtils.js';      // Named import with alias
import * as mathUtils from './mathUtils.js';             // Import all as namespace

// Use namespace import
console.log(mathUtils.add(1, 2));
console.log(mathUtils.default('multiply', 3, 4));
```

### ⚠️ Common Beginner Mistakes
- Forgetting file extensions in import paths
- Mixing up named and default import syntax
- Not understanding that modules have their own scope
- Trying to use modules without proper server setup (CORS issues)

---

## Day 30: Building Your First Project

### 🧠 Concept Analogy
Think of building your first project like cooking your first complete meal from scratch. You've learned individual techniques (chopping, sautéing, seasoning) - now you're combining them all to create something complete and satisfying. You'll use all the JavaScript concepts you've learned to build a real, working application that users can interact with.

### 📝 What You'll Learn
This is where everything comes together! You'll build a complete interactive web application that uses DOM manipulation, event handling, local storage, and modern JavaScript features to create a functional user experience.

### 💻 Code Example

```javascript
// Task Manager Application - Complete Project

class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.nextId = parseInt(localStorage.getItem('nextId')) || 1;
        this.filter = 'all'; // all, completed, pending
        this.sortBy = 'date'; // date, priority, name
        
        this.initializeElements();
        this.attachEventListeners();
        this.render();
    }
    
    initializeElements() {
        // Get DOM elements
        this.taskInput = document.getElementById('taskInput');
        this.prioritySelect = document.getElementById('prioritySelect');
        this.dueDateInput = document.getElementById('dueDateInput');
        this.addButton = document.getElementById('addTask');
        this.taskList = document.getElementById('taskList');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.sortSelect = document.getElementById('sortSelect');
        this.searchInput = document.getElementById('searchInput');
        this.clearCompleted = document.getElementById('clearCompleted');
        this.taskCounter = document.getElementById('taskCounter');
    }
    
    attachEventListeners() {
        // Add task
        this.addButton.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });
        
        // Filter tasks
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setFilter(e.target.dataset.filter);
            });
        });
        
        // Sort tasks
        this.sortSelect.addEventListener('change', (e) => {
            this.sortBy = e.target.value;
            this.render();
        });
        
        // Search tasks
        this.searchInput.addEventListener('input', () => this.render());
        
        // Clear completed tasks
        this.clearCompleted.addEventListener('click', () => this.clearCompletedTasks());
        
        // Task list events (event delegation)
        this.taskList.addEventListener('click', (e) => this.handleTaskClick(e));
        this.taskList.addEventListener('change', (e) => this.handleTaskChange(e));
    }
    
    addTask() {
        const text = this.taskInput.value.trim();
        const priority = this.prioritySelect.value;
        const dueDate = this.dueDateInput.value;
        
        if (!text) {
            this.showNotification('Please enter a task!', 'error');
            return;
        }
        
        const task = {
            id: this.nextId++,
            text,
            completed: false,
            priority,
            dueDate: dueDate || null,
            createdAt: new Date().toISOString(),
            completedAt: null
        };
        
        this.tasks.push(task);
        this.saveToStorage();
        this.clearForm();
        this.render();
        this.showNotification('Task added successfully!', 'success');
    }
    
    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            task.completedAt = task.completed ? new Date().toISOString() : null;
            this.saveToStorage();
            this.render();
        }
    }
    
    deleteTask(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.tasks = this.tasks.filter(t => t.id !== id);
            this.saveToStorage();
            this.render();
            this.showNotification('Task deleted!', 'info');
        }
    }
    
    editTask(id, newText) {
        const task = this.tasks.find(t => t.id === id);
        if (task && newText.trim()) {
            task.text = newText.trim();
            this.saveToStorage();
            this.render();
        }
    }
    
    setFilter(filter) {
        this.filter = filter;
        
        // Update active filter button
        this.filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        
        this.render();
    }
    
    clearCompletedTasks() {
        const completedCount = this.tasks.filter(t => t.completed).length;
        if (completedCount === 0) {
            this.showNotification('No completed tasks to clear!', 'info');
            return;
        }
        
        if (confirm(`Delete ${completedCount} completed task(s)?`)) {
            this.tasks = this.tasks.filter(t => !t.completed);
            this.saveToStorage();
            this.render();
            this.showNotification(`${completedCount} task(s) cleared!`, 'success');
        }
    }
    
    getFilteredTasks() {
        let filtered = [...this.tasks];
        
        // Apply filter
        switch (this.filter) {
            case 'completed':
                filtered = filtered.filter(t => t.completed);
                break;
            case 'pending':
                filtered = filtered.filter(t => !t.completed);
                break;
        }
        
        // Apply search
        const searchTerm = this.searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            filtered = filtered.filter(t => 
                t.text.toLowerCase().includes(searchTerm)
            );
        }
        
        // Apply sort
        filtered.sort((a, b) => {
            switch (this.sortBy) {
                case 'name':
                    return a.text.localeCompare(b.text);
                case 'priority':
                    const priorityOrder = { high: 3, medium: 2, low: 1 };
                    return priorityOrder[b.priority] - priorityOrder[a.priority];
                case 'dueDate':
                    if (!a.dueDate && !b.dueDate) return 0;
                    if (!a.dueDate) return 1;
                    if (!b.dueDate) return -1;
                    return new Date(a.dueDate) - new Date(b.dueDate);
                default: // date
                    return new Date(b.createdAt) - new Date(a.createdAt);
            }
        });
        
        return filtered;
    }
    
    render() {
        const tasks = this.getFilteredTasks();
        
        // Update task counter
        const totalTasks = this.tasks.length;
        const completedTasks = this.tasks.filter(t => t.completed).length;
        this.taskCounter.textContent = `${completedTasks}/${totalTasks} completed`;
        
        // Render tasks
        if (tasks.length === 0) {
            this.taskList.innerHTML = `
                <div class="empty-state">
                    <p>No tasks found</p>
                    <small>Try adjusting your filters or add a new task</small>
                </div>
            `;
            return;
        }
        
        this.taskList.innerHTML = tasks.map(task => this.createTaskHTML(task)).join('');
    }
    
    createTaskHTML(task) {
        const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !task.completed;
        const formattedDate = task.dueDate ? new Date(task.dueDate).toLocaleDateString() : '';
        
        return `
            <div class="task-item ${task.completed ? 'completed' : ''} ${isOverdue ? 'overdue' : ''}" data-id="${task.id}">
                <div class="task-content">
                    <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
                    <span class="task-text" ${task.completed ? '' : 'contenteditable="true"'}>${task.text}</span>
                    <div class="task-meta">
                        <span class="priority priority-${task.priority}">${task.priority}</span>
                        ${formattedDate ? `<span class="due-date">${formattedDate}</span>` : ''}
                        ${isOverdue ? '<span class="overdue-badge">Overdue!</span>' : ''}
                    </div>
                </div>
                <div class="task-actions">
                    <button class="edit-btn" title="Edit">✏️</button>
                    <button class="delete-btn" title="Delete">🗑️</button>
                </div>
            </div>
        `;
    }
    
    handleTaskClick(e) {
        const taskItem = e.target.closest('.task-item');
        if (!taskItem) return;
        
        const taskId = parseInt(taskItem.dataset.id);
        
        if (e.target.classList.contains('delete-btn')) {
            this.deleteTask(taskId);
        } else if (e.target.classList.contains('edit-btn')) {
            this.enableTaskEdit(taskItem);
        }
    }
    
    handleTaskChange(e) {
        if (e.target.classList.contains('task-checkbox')) {
            const taskId = parseInt(e.target.closest('.task-item').dataset.id);
            this.toggleTask(taskId);
        }
    }
    
    enableTaskEdit(taskItem) {
        const textElement = taskItem.querySelector('.task-text');
        const originalText = textElement.textContent;
        
        textElement.contentEditable = true;
        textElement.focus();
        
        // Select all text
        const range = document.createRange();
        range.selectNodeContents(textElement);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        
        const saveEdit = () => {
            const newText = textElement.textContent.trim();
            if (newText && newText !== originalText) {
                const taskId = parseInt(taskItem.dataset.id);
                this.editTask(taskId, newText);
            } else {
                textElement.textContent = originalText;
            }
            textElement.contentEditable = false;
        };
        
        textElement.addEventListener('blur', saveEdit, { once: true });
        textElement.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                textElement.blur();
            }
        }, { once: true });
    }
    
    clearForm() {
        this.taskInput.value = '';
        this.prioritySelect.value = 'medium';
        this.dueDateInput.value = '';
        this.taskInput.focus();
    }
    
    saveToStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        localStorage.setItem('nextId', this.nextId.toString());
    }
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Export/Import functionality
    exportTasks() {
        const dataStr = JSON.stringify(this.tasks, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `tasks-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
        this.showNotification('Tasks exported successfully!', 'success');
    }
    
    importTasks(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedTasks = JSON.parse(e.target.result);
                if (Array.isArray(importedTasks)) {
                    this.tasks = [...this.tasks, ...importedTasks];
                    this.saveToStorage();
                    this.render();
                    this.showNotification(`${importedTasks.length} tasks imported!`, 'success');
                }
            } catch (error) {
                this.showNotification('Invalid file format!', 'error');
            }
        };
        reader.readAsText(file);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create the app instance
    window.taskManager = new TaskManager();
    
    // Add export/import functionality
    document.getElementById('exportTasks')?.addEventListener('click', () => {
        window.taskManager.exportTasks();
    });
    
    document.getElementById('importTasks')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            window.taskManager.importTasks(file);
            e.target.value = ''; // Reset file input
        }
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + N: Focus on new task input
        if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
            e.preventDefault();
            document.getElementById('taskInput').focus();
        }
        
        // Ctrl/Cmd + F: Focus on search
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            document.getElementById('searchInput').focus();
        }
    });
    
    console.log('🎉 Task Manager loaded successfully!');
    console.log('💡 Keyboard shortcuts:');
    console.log('   Ctrl/Cmd + N: New task');
    console.log('   Ctrl/Cmd + F: Search tasks');
});

// Utility functions for advanced features
const TaskUtils = {
    // Generate task statistics
    getStatistics(tasks) {
        const total = tasks.length;
        const completed = tasks.filter(t => t.completed).length;
        const overdue = tasks.filter(t => 
            t.dueDate && new Date(t.dueDate) < new Date() && !t.completed
        ).length;
        
        const byPriority = {
            high: tasks.filter(t => t.priority === 'high').length,
            medium: tasks.filter(t => t.priority === 'medium').length,
            low: tasks.filter(t => t.priority === 'low').length
        };
        
        return { total, completed, overdue, byPriority };
    },
    
    // Format time ago
    timeAgo(dateString) {
        const now = new Date();
        const date = new Date(dateString);
        const diffInMs = now - date;
        const diffInMins = Math.floor(diffInMs / (1000 * 60));
        const diffInHours = Math.floor(diffInMins / 60);
        const diffInDays = Math.floor(diffInHours / 24);
        
        if (diffInMins < 1) return 'Just now';
        if (diffInMins < 60) return `${diffInMins}m ago`;
        if (diffInHours < 24) return `${diffInHours}h ago`;
        return `${diffInDays}d ago`;
    }
};
```

### ⚠️ Common Beginner Mistakes

- **Not planning the structure first** - Start with a clear idea of what features you want before coding
- **Writing everything in one file** - Break your code into logical functions and classes
- **Forgetting error handling** - Always handle cases where things might go wrong (empty inputs, network failures, etc.)
- **Not testing edge cases** - Test with empty data, maximum limits, and unusual user behavior
- **Ignoring user experience** - Add loading states, confirmations, and helpful feedback messages
- **Poor data validation** - Always validate and sanitize user input before processing
- **Not saving user data** - Remember to persist important data to localStorage or a backend
- **Overcomplicating the first version** - Start simple and add features incrementally

### 🎯 Project Features Implemented

This complete Task Manager includes:

- ✅ **Core Functionality**: Add, edit, delete, and toggle tasks
- ✅ **Filtering & Sorting**: Filter by status, sort by date/priority/name
- ✅ **Search**: Find tasks by text content
- ✅ **Local Storage**: Persist data between sessions
- ✅ **Due Dates**: Set and track task deadlines with overdue indicators
- ✅ **Priority Levels**: Organize tasks by importance
- ✅ **Bulk Actions**: Clear all completed tasks at once
- ✅ **Statistics**: Track completion progress
- ✅ **Import/Export**: Backup and restore tasks
- ✅ **Keyboard Shortcuts**: Power user features
- ✅ **Notifications**: User feedback for all actions
- ✅ **Responsive Design**: Works on all device sizes
- ✅ **Accessibility**: Proper ARIA labels and keyboard navigation

### 🚀 Next Steps

Congratulations! You've built a complete, functional web application. Here's how to continue growing:

1. **Add a backend** - Connect to a real database using Node.js or Firebase
2. **User authentication** - Add login/signup functionality
3. **Real-time sync** - Share tasks between devices
4. **Mobile app** - Convert to a Progressive Web App (PWA)
5. **Team collaboration** - Add sharing and collaboration features
6. **Advanced UI** - Implement drag-and-drop, animations, and themes
