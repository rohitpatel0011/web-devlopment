//-------Arrays some method--------
let ages = [12, 24, 35, 18, 20];
let b = ages.some(checkAdult);
/*some method make with function
 to return in test*/

function checkAdult(age) {
    return age <= 18; /*or (return x <= 18;)test value in an arrays . if any one condition is true then output is true*/
}
console.log(b);

//----------Arrys Every Method--------
let ages_ = [12, 24, 35, 18, 20];
let i = ages_.some(checkAdult2);

function checkAdult2(age1) {
    return age1 <= 10; /*if all condition is true then output is true*/
}
console.log(i);