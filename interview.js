const a = [1,10,2,3,4,5];

function mazP(a) {
    let assending = [...a].sort((a,b) => a - b);
    let dessending = [...a].sort((c,d) => d - c);
    // mutation prpoblem(same output) when u using same like this 
    // let assending = a.sort((a,b) => a - b);
    // let dessending = a.sort((c,d) => d - c);
    
    return {
        assending,
    dessending}
}

const r = mazP(a);
console.log(`assending ${r.assending} 
dessending ${r.dessending}`);

console.log(typeof(r))



const arr = [3,4,2,6,8,1,9,10];


function Product(arr) {
    const sorted_array = arr.sort((a, b) => a - b);
    const len = arr.length;

    return {
        len,
        sorted_array,
        max : sorted_array[len - 1] * sorted_array[len - 2],
        min : sorted_array[0] * sorted_array[1],
};
}


const {len,sorted_array,max,min} = Product(arr);

// console.log(` Sorted : ${sorted_array} 
//     Len : ${len}
//     MAX : ${max}
//     MIN : ${min}`)

// MUTATION EXAMPLE 
// const arre = [3,4,2];

// const sorted = arre.sort((a,b) => a-b);

// console.log(arre);    // ✅ [3,4,2] (unchanged)
// console.log(sorted); // ✅ [2,3,4]

function maxProduct(a) {
    a.sort((x, y) => x - y);

    const n = a.length;

    return {
        L : a[n-1] * a[n-2], // two largest
        S : a[0] * a[1]    // two smallest (possibly negative)
    };
}

const res = maxProduct([2,3,4,5,6,7,23,24])

// console.log(res.L)
// console.log(res.S)



















// need to find anyother logic for this , and also this logic  explaination too 
// rest function 
// meta tag , progress tag