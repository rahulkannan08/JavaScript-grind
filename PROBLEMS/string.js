// reverse a string 
function reverse() {
s = " hello";

// using per build method
function revPreBuildFuc(rs){

return rs.split("").reverse().join("");
}
console.log("with prebuild reverse " + revPreBuildFuc(s))

// without using per build method

data = ""
for ( let i = s.length - 1; i>=0; i--) {
    data += s[i]
    
}
console.log("without prebuild reverse " + data)
}
// reverse()

// palindrome 
function palind(s) {
    let left = 0 ;
    let right = s.length -1
    while( left < right ) {
        if( !s[left] !== s[right]){
           console.log( s+" is not a palindrome");
        }
        left ++ ;
        right --
    }
        console.log( s+"  is a palindrome");
}
s = "madam"
// palind(s)


// count a character


function CAC(s) {

    obj = {} ;
    for ( chat of s) {
        obj[chat] = (obj[chat] || 0)+1 ;
    }

    return obj;
}
// console.log(CAC("abcdefabcsefdga"))



