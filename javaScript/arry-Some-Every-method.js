//-------Arrays some method--------
let ages = [22, 24, 35, 127, 20];
let b = ages.some(checkAdult);
/*some method make with function
 to return in test*/

function checkAdult(age_) {
    return age_ >= 200;
    /*or (return x <= 18;)test value in an arrays
     check every condition .
       if any one condition is true then output is true*/
}
console.log(b);

//----------Arrys Every Method--------
let ages_ = [12, 24, 35, 18, 20];
let i = ages_.every(checkAdult2);

function checkAdult2(age1) {
    return age1 <= 10;
    /*if all condition is 
       true then output is true*/
}
console.log(i);


//-------------function arrays-----------------
function adding(m, n) {
    var x = m + n;
    return x;
}

var add = adding(23, 45);
console.log(add);