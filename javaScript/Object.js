//Objects in javascript------

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
    language: ["python", "java", "php", "javascript"], //replacing arrays in object
    email: "abc@gmail.com",
    country: "india"
}
console.log(employee_1);
console.log(employee_1.language[0]); //o 0 is index of value




//--------------------in object function (methods)-----
let employee_2 = {
    names: "Golu",
    age: 20,
    gender: "male",
    language: ["python", "java", "php", "javascript"], //replacing arrays in object
    email: "abc@gmail.com",
    country: "india",
    salary: function() { //making function method in objects and return value
        return 30000;
    },
}
console.log(employee_2.salary());




//------------------this method in object-----
let employee_3 = {
    names: "Golu",
    age: 20,
    gender: "male",
    language: ["python", "java", "php", "javascript"], //replacing arrays in object
    email: "abc@gmail.com",
    country: "india",
    //-----this is object method---
    salary: function() { //making function method in objects and return value
        return 30000;
    },
    full_name: function() { //print tow properties for this function
        return this.names + "/" + this.age;
        /*this means target employee_3 and 
               this.name means employee_3 in name and age*
               (variable properties of value)*/
        //----------------------
    },
}
console.log(employee_3.salary());
console.log(employee_3.full_name());




//another example of this. method------------------------
function Book(type, author) {
    this.type = type;
    this.author = author;
    this.all = function() {
        return this.type + " written by " + this.author;
    }
}
var book = new Book("computer_science", " Rohit Patel");
console.log(book.all());





//---making object in object----------
let employee_4 = {
    names: "Golu",
    age: 20,
    gender: "male",
    language: ["python", "java", "php", "javascript"], //replacing arrays in object
    email: "abc@gmail.com",
    country: "india",
    salary: function() {
        return 50000;
    },
    living: { //object in object
        "city": "patna",
        "state": "bihar",
        "country": "india"

    },
}
console.log(employee_4.salary());
console.log(employee_4.living.city); //printing object in objects