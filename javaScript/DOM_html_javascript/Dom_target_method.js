//*---------Target particular element in dom----------

//-------------------------------
var elements = document.body;
console.log(elements);




//-----------------
var element = document.links;
var elem = document.links[2];
//2 is index of link
//.link return length of links in arrays
console.log(element);
console.log(elem);


//---------------
var ele = document.getElementById("header");
//return id name of header all elements 
console.log(ele);


//------------------------------------------------
var el = document.getElementsByClassName("perentdiv");
console.log(el);
console.log(el.length);



//-----------------------------
var elemen = document.getElementsByTagName("input"); //("input")[5];//this or
// console.log(elemen[5]);//this both are same
console.log(elemen);




//*-----Dom Get and Set method--------------------


//*------.innerText---------
//*-----.innerHTML----------
//*-----.getAttribute-------
//*-----.getAttributeNode---
//*-----Attributes----------

//----innerText-----
var ement = document.getElementById("paragraph").innerText;
console.log(ement);



//---innerHTML--------.
var e = document.getElementById("paragraph").innerHTML;
console.log(e);



//----getAttribute-----