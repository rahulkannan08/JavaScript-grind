arr = [1,6,3,27,21,7,234,0,0,1,5,6,3];

// pre build and usig spread *ithout spread it won't work
// console.log(Math.max( ...arr))



function largestMaxwithoutprebuiuld(arr){
                let maxx = arr[0];

            for ( let num of arr){
                if ( num > maxx){
                    maxx = num ;
                }  
            }
            return maxx
            }
// console.log(" Max without pre buiuld " + largestMaxwithoutprebuiuld(arr))





// set * used for uniquye values
function rmvDupPBF(arr) {
  return [...new Set(arr)]
}
// console.log("filter with pre build function " +rmvDupPBF(arr))

function rmvDupWPBF(arr){

    rst =[];
    for(item of arr) {
    if(!rst.includes(item)) {

        rst.push(item)
    }
}

return rst;
}

// console.log("filter without pre build function " +rmvDupWPBF(arr))

// filter 

