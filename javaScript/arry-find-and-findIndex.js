//-------Arrays find method-----------

let a = [12, 24, 35, 18, 20];
let b = a.find(adultAge);

function adultAge(age) {
    return age >= 18;
    /*find() method return the value of the first element(not all element checking) in an arrays that pass a test*/
}
console.log(b);


//------Arrays find-index------
let x = [12, 24, 35, 18, 20];
let y = a.findIndex(adultAge_);

function adultAge_(age) {
    return age >= 18;
}
console.log(y);