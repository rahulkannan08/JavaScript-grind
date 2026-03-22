// // const student = {
// //     name: "Rahul",
// //     normalFunc: function() {
// //         console.log(this.name);
// //     },
// //     arrowFunc: () => {
// //         name = "sr"
// //         console.log(this.name);
// //     }
// // };

// // student.normalFunc(); // Rahul
// // student.arrowFunc();  // undefined


// // const { add, multiply } = require('math');

// // console.log(add(10,10))

// const math = require('./math');

// console.log(math.add(10, 5));
// console.log(math.multiply(4, 3));


console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");
