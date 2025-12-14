/*
//console.log(window)
// window.alert()
//insted that we can use easier alert()


console.log(document.getElementById('f1'))
console.log(document.querySelector('h1'))
  // it will select only one even there's multiple h1 that takes 1rst one 

console.log(document.querySelectorAll("items"))
console.log(document.getElementsByClassName("item"))

console.log(document.getElementsByClassName("sec"))
console.log(document.getElementsByTagName("li"))

const items = document.querySelectorAll(".item");
console.log(items)


items.forEach((items) => console.log(items) );
*/

/* const ul = document.querySelector('.items')
const divmsg = document.querySelector(".msg")
const btn = document.querySelector('.btn');
const namefld = document.querySelector('#name');
const mailfld = document.querySelector('#mail');
const form = document.querySelector('#f1');
const user = document.querySelector('#users')
const themebtn = document.querySelector('#theme'); */

const og_price = document.querySelector('#og_amt');
const discount_amount = document.querySelector('#disc_amt');
const chkbtn = document.querySelector('#chk_btn');
const rslt = document.querySelector(".rslt");

/* console.log(divmsg)
ul.firstElementChild.textContent = "added at fir";
ul.lastElementChild.remove()
ul.firstElementChild.remove()
ul.children[1].innerHTML = "c ila b " ;
ul.lastElementChild.innerHTML = '<a href="www.google.com">link</a>';

themebtn.addEventListener('click',(e)=> {
  //e.preventDefault();
  document.querySelector('body').style.background = ' #fcbfb0ff';
  if(document.querySelector('body').style.background = ' #fcbfb0ff' === true){
    document.querySelector('body').style.background = ' #0a9b33ff';
  }
}); */

/*
btn.addEventListener('click', (e) => {
  e.preventDefault();
      //alert("clicked");
      console.log("clicked");
      console.log(e)
      console.log(e.target.className);
      console.log(e.target.id)
      
      document.querySelector('#f1').style.background = '#f00505ff' ;
      document.querySelector('#b1').style.background = '#ffff'
      document.querySelector('body').style.background = ' #02ec0eff'
      // document.getElementsByClassName('msg').innerHTML = " shows ?";
      //document.querySelector("msg").innerHTML = "'<h1> hi </h1>'";
      //document.querySelector("msg").textContent = "hi'";
      
      ul.children[1].innerHTML = "b ila a" ;
      divmsg.innerHTML = '<h1> Clicked </h1>';
    
    }); 
    
btn.addEventListener('mouseover', (e) => {
 
      //alert("clicked");
      console.log("clicked");
      console.log(e)
      console.log(e.target.className);
      console.log(e.target.id)
      
      document.querySelector('#f1').style.background = '#f0058eff' ;
      document.querySelector('#b1').style.background = '#f8f408ff'
      document.querySelector('body').style.background = ' #1404c0ff'
    
    }); 

btn.addEventListener('mouseout', (e) => {
  
      //alert("clicked");
      console.log("clicked");
      console.log(e)
      console.log(e.target.className);
      console.log(e.target.id)
      
      document.querySelector('#f1').style.background = '#000000ff' ;
      document.querySelector('#b1').style.background = '#f8f408ff'
      document.querySelector('body').style.background = ' #ffffffff'
    
    }); 
*/

/* form.addEventListener('submit',onSubmit);

  function onSubmit(e) {
    
    e.preventDefault();
    if ( namefld.value === '' && mailfld.value === '' ) {
      divmsg.innerHTML = 'Please enter both fields';
      divmsg.style.color = '#ff0000ff' ;
      btn.style.background = '#fb0000ff'
      setTimeout(() => {
        btn.style.background = '#fff';
      }, 1000);

      setTimeout( () => divmsg.remove(),1000);
    } 
    else if ( namefld.value === '') {
      divmsg.innerHTML = 'Please enter name field';
      setTimeout( () => divmsg.remove(),1000);
      divmsg.style.color = '#ff0000ff' ;
    }
    else if ( mailfld.value === '') {
      divmsg.innerHTML = 'Please enter mail field';
      setTimeout( () => divmsg.remove(),1000);
      divmsg.style.color = '#ff0000ff' ;
    }
    else {
      divmsg.innerHTML = "successfully logged";
      setTimeout( () => divmsg.remove(),500);
      setTimeout( () => divmsg.style.color = '#fff',500);
      divmsg.style.color = '#15ff00ff' ;
      btn.style.background = '#00fb9bff';

      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${namefld.value} : ${mailfld.value}`));
      user.appendChild(li);
      namefld.value ='';
      mailfld.value = '';

    }
  }; */


chkbtn.addEventListener('click', (e) => {
     e.preventDefault();
     rslt.style.background = '#c3f61dff';
     //setTimeout( () => rslt.innerHTML = '',1000);
     if(og_price.value === '' && discount_amount.value === '') {
        rslt.innerHTML = "Please enter both fields";
     }
     else {
      if(og_price.value === '') {
        rslt.innerHTML = "Please enter original price";
      }
      else if(discount_amount.value === '') {
        rslt.innerHTML = "Please enter discount amount";
      }
     }
     if(og_price.value !== '' && discount_amount.value !== '') {
      const final_price = og_price.value - discount_amount.value;
      rslt.innerHTML = "Final Price after Discount: " + final_price + "<br> you saved amount of : " + discount_amount.value;
     }
      
      
});
    
//     //const prompt = require ('prompt-sync')();
// const og_price = prompt("enter original price: ");
// const discount = prompt("enter discount : ");
// //const discount = prompt("enter discount percentage: ");
// //const discount_amount = (og_price * discount) / 100;
// const final_price = og_price - discount;


