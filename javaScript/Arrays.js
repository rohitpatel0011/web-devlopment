let x = [10, 20, 30, 40];
console.log(x);
let arr = ["39", 40, "golu", 65] //index of these arry is ([0]is index of "39") , [1], [2], [3] 
console.log(x[2]); //2 is a index of golu
console.log(arr[2]); //1 is a index of 20

//--------------------------------
var ary = [10, 29, 39, 49, 38];
for (var i = 0; i <= 4; i++) { //i initialization is zero because index of arry starts with 0 and with 4
    console.log(ary[i]);
}

//----ADDING ARRAY IN INTEGERS VALUE-------

let numbers = [
    10, 50, 29, 60, 48,
]
let sum = 0;
for (let n = 0; n <= 4; n++) {
    console.log(numbers[n]);
    sum = numbers[n];
}
console.log("the total sum of all array is =" + sum);


//------------------Array new method--------
var a = new Array(10, 20, 30, 40, 50, 60);
console.log(a);


//---- -- -- -- --
var arry = new Array(); //creating blank arrays to fill unlimited value 
var d = new Array(2); //(4); fix the values of array 
d[0] = 20; //fill value using index of array
d[1] = "rohit";
d[2] = "subham";
d[3] = "name";
d[4] = "others";
for (var a = 0; a < ary.length; a++) {
    console.log(ary[a]);

}

ary[1] = "mohit";
ary[4] = "rahul";
ary[5] = "naman";

console.log(ary);
console.log(ary[a]);