const thodathabtn = document.getElementById("thodatha")
const thodrabtn = document.getElementById("thodra")

thodathabtn.addEventListener("click",function(){
    window.scrollTo({
        top : 10000,
        behavior:"smooth",
    });
});

thodrabtn.addEventListener("click",function(){
    window.scrollTo({
       top : 0,
       behavior:"smooth",
    });
    });








//(traversy media 've 4 to 5 sep vid for DOM)










/*


const b = [1,2,3,4,5,6,7]
console.log(b.length)
b[2] = "hi"
console.log(b)
b[2] = 674
console.log(b)
b[2] = "bye"
console.log(b[2])
console.log(b)
console.log(b.length)
b[7] = 1000
console.log(b)
console.log(b.length)
console.log(b.pop())
console.log(b.length)
console.log(Array.isArray(b))
console.log(b)
*/


/*
const A = 10
let a = [1,2,3,4,5,5,4,'sr',true]
console.log('script.js la irunthu');

console.log(typeof(a),'5+5=',5+5); 
console.log('hi')
console.error("error by mannual")
console.log(a)
console.error(a)
console.warn(a)
console.log(typeof(null))
console.log(typeof(NaN))
let na = 'hahaha'
na.toUpperCase()

let an = 1234
console.log(na+an)
console.log(na,"hi")
console.log(na+"hi")
console.log(`bakc tick ${na} ${an}`)

console.log("simple",na,an)

console.log("simple",na + an)
am = na+an
console.log(typeof(am))
let num = '1'

console.log(typeof((num)))
console.log(am.length)
let spli = "hi bye , gn gm "
console.log(spli.split(" , "))*/


const obj = [
{
    id : 1,
    a : "A",
    b : 5,
    c :[1,2,3,4,5,6],
    d : (7,8,9,0),
    e: {
        inc : "namathan"
    }

},
{
    id : 2,
    a : "A",
    b : 2,
    c :[1,2,3,4,5,6],
    d : (7,8,9,0),
    e: {
        inc : "namailaaa"
    }

},
{
    id : 3,
    a : "A",
    b : 10,
    c :[1,2,3,4,5,6],
    d : (7,8,9,0),
    e: {
        inc : "mamaaaa"
    }

},

];
/*
for ( i of obj){
    console.log(i)
}

// for each 
obj.forEach(function(o)
{
    console.log(o.id)
})

//map
const mapobj = obj.map(function(mo)
{
    return mo.b 
});
console.log(mapobj)

//json

const jsonobj = JSON.stringify(obj)
console.log(jsonobj)

// conditional

const x = 10 
const y = 10

if ( x > 1 && ||  5 > y) {
    console.log("x is ",x)

}else  {
    console.log(`x iis not a ${x}`)
}

//turnary op 
const check = x > 1 ? "ama":"ila"


switch(check){
    case "ama":
        console.log(check,"amava ?")
        break;
    case "ila":
        console.log(check,"ilaiy ?")
        break;
    default:
        console.log("rendume ila")
        break;
}
*/

function add(a,b){
    return a+b;
}

function div(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function mod(a,b){
    x = 10;
    return a%b;
    
}
/*
console.log(add(10,10))
console.log(div(10,10))
console.log(mul(10,10))
console.log(div(10,10))
console.log(mod(10,10))


const arith = (a,b) => {
        console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
return "hiiiiiiiii"
};
console.log(arith(100,2))

let n = 1
const m = "1"

console.log(n+=5,n=+5,isNaN(n))
        //5+n and n+5




// objects (constructors)


function fn(a,b,c,d='10-10-2000') {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = new Date(d).getDate();
}

fn.prototype.getBirthDate = function() {
    return this.d.getFullYear()
}




//class
class kilas {
    constructor(a,b,c,d){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = new Date(d);
    }

    first(){
        return `"this is kidding" ${this.a}`
    }
}

const fn1 = new kilas(5,10,15,'10-10-2000');
console.log(fn1)
const fn2 = new kilas(10,15,20,'24-3-2010');
console.log(fn2)

*/





