//-----.length method in string
var str = "Rohit patel"
var a = str.length; //.length method is how many block in whole string include spaces
console.log(a);



//----toLowerCase()function method-----

var str1 = "I am Learning a Javascript Programing Language"
var b = str1.toLowerCase(); //convert all strings to lower case
console.log(b);



//----toUpperCase()function method--------

var str2 = "I am Learning a Javascript Programing Language"
var c = str2.toUpperCase(); //convert all strings to upper case
console.log(c);



//----includes() function method-----

var str3 = "I am Learning a Javascript Programing Language"
var d = str3.includes("Programing");
var e = str3.includes("Java") /*checking/search string in this method is present  return true and checking Case-sensitive*/
var f = str3.includes("programing"); //return false
console.log(d); //true
console.log(f); //true 
console.log(e); //false



//------startsWith()function method-----------
var str4 = "I am Learning a Javascript Programing Language"
var g = str4.startsWith("I am"); //checking string in starting not any string.//return true
var h = str4.startsWith("i am"); //checking string in starting not any string //return false
console.log(g);



//-----endsWith()function method-------
var str5 = "I am Learning a Javascript Programing Language"
var i = str5.endsWith("language") //checking last of the string case-sensitive 
console.log(h);

//-----search()function method-------
var str6 = "this is a javascript"
var j = str6.search(" ");
console.log(j);
//-----match()function method-------
//-----indexOf()function method-------
//-----lastIndexOf()function method-------
//-----replace() function method-------
//-----trim()function method-------
//-----charAt()function method-------
//-----charCodeAt()function method-------
//-----fromCharCode()function method-------
//-----concat()function method-------
//------split()function method-------
//------repeat()function method-------
//-----slice()function method-------
//-----substring()function method-------
//-----toString()function method-------
//-----valueOf()function method-------