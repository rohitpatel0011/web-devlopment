var name = rohit
var lastname = patel
var temp = `${name} "is a good boy" ${lastname}` // var string = "this";
var string = 'thi"s';
var name = 'Rohit';
var lastname = 'patel';
var message = 'rohit is a good boy';
var temp = `${name} is a 'nice' person "and" his full name is  ${lastname}`;
console.log(temp);
var len = name.length;
console.log(`Length of name is ${len}`)

console.log("Hello \\nworld\nrohit\tand");
var y = new String("this");
console.log(y);
document.getElementById('content').innerHTML = '<h3>this is an h3 heading</h3>'
document.getElementById('name').innerHTML = '<h1>rohit patel </h1>'


//logical operator
var name = "rohit";
var gender = "male";
if (gender == "male") {
    console.log("hello mr." + name);
} else {
    console.log("hello miss." +
        name);
}

var marks = 30
if (marks >= 70 && marks <= 100) {
    console.log("yes you are in merit");
} else {
    console.log("you are not in merit list");
}


//frist "if"  and "if else " program

var per = 60;
if (per >= 80 && per < 100) {
    console.log("you in  merit")

} else if (per >= 60 && per < 80) {
    console.log("you in 1st div")
} else if (per >= 45 && per < 60) {
    console.log("you in 2st div")
} else if (per >= 34 && per < 80) {
    console.log("you in 3st div")
} else if (per < 33) {
    console.log("you are fail")
} else {
    console.log("please enter valid number")
}