let a = [10, 20, 30, 40];
console.log(a);
let arr = ["39", 40, "golu", 65] //index of these arry is [0] , [1], [2], [3] 
console.log(a[2]); //2 is a index of golu
console.log(arr[2]); //1 is a index of 20

//--------------------------------
var ary = [10, 29, 39, 49, 38];
for (var i = 0; i <= 4; i++) { //i initialization is zero because index of arry starts with 0 and with 4
    console.log(ary[i]);
}

//------ADDING ARRAY IN INTIGERS VALUE-------
let numbers = [
    10, 50, 29, 60, 48,
]
let sum = 0;
for (let n = 0; n <= 4; n++) {
    console.log(numbers[n]);
    sum = sum + numbers[n];
}
console.log("the total sum of all array is " + sum);

//----------------------------