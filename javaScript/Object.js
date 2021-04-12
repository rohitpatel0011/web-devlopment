let employee = {
        names: "Rohit",
        age: 20,
        gender: "male",
        email: "abc@gmail.com",
        country: "india"
    }
    //The values are written as name : value pairs (name and value separated by a colon).
console.log(employee); //print the all object 
console.log(employee.gender); //print gender properties of the value
console.log(employee.country);

//-------Replace Arrays in Object -------
let employee_1 = {
    names: "Rohit",
    age: 20,
    gender: "male",
    language: ["python", "java"], //replacing arrays in object
    email: "abc@gmail.com",
    country: "india"
}
console.log(employee_1);
console.log(employee_1.language[0]); //print arrays in 

console.log(employee_1.language[0]);
//------------------------
function Book(type, author) {
    this.type = type;
    this.author = author;
    this.all = function() {
        return this.type + " written by " + this.author;
    }
}
var book = new Book("Rohit", "Patel");
console.log(book.all()); //