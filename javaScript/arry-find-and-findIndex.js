let a = [12, 24, 35, 18, 20];
let b = a.find(adultAge);

function adultAge(age) {
    return age >= 18;
}
console.log(b);