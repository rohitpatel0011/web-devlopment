//-------Arrays some method--------
let ages = [12, 24, 35, 18, 20];
let b = ages.some(checkAdult);
/*some method make with function
 to return in test*/

function checkAdult(_age) {
    return x <= 18; /*or (return x <= 18;)test value in an arrays . if any one condition is true then output is true*/
}
console.log(b);

//----------Arrys Every Method--------
let ages = [12, 24, 35, 18, 20];
let b = ages.some(checkAdult);

function checkAdult(age) {
    return age <= 12; /*if all condition is true then output is true*/
}
console.log(b);