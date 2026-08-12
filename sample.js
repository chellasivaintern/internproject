//declarative function
console.log(HelloDec()); // return hello
function HelloDec() {
    return "Hello";
}

//Expression function
var sum = function(x,y) {
    return x + y;
}

console.log(sum(2,3)); // return 5

//arrow function
const sumarrow = (a,b) => a*b;
console.log(sumarrow(2,3)); // return 6

//Immediatly invoked function
const res = (function() {
    var a ="isolated func";
    return a;
})();

console.log(res);

//spread operator
//unpacks a element into single ary
const arr1 = [10,20];
const arr2 = 50;
const arr3 = [30,40];
const comb = [...arr1,arr2];
const con = [...comb,...arr3];
console.log(comb);
console.log(con);

//Rest operator
//packs a element into single array
const numbers = [1,2,3,4];
console.log(Math.max(...numbers));

//Array
const fruits = ["apple","banana","melon","kiwi"];
//add the element to first
fruits.unshift("orange");
console.log(fruits);

//add the element to last
fruits.push("mango");
console.log(fruits);

//remove the element to first
fruits.pop();
console.log(fruits);

//remove the element to last
fruits.shift();
console.log(fruits);

//modifying the array
fruits[2] = "blueberry"; //by index
console.log(fruits);

//map,filter,reduce
const products = [
    {prdname : "keyboard",price:300},
    {prdname : "mouse",price :350},
    {prdname : "monitor" , price : 500},
    {prdname : "cpu" , price : 320},
];

const total = products
.filter(p => p.price <= 400)
.reduce((sum,p) => sum+p.price,0);
console.log(total);

//objects

const student = {
    name :"anu",
    age : 22,
    skills : ["react","ai"]
};

//add/modify object
console.log(student["name"]); //bracket notation
console.log(student.age); //dot notation
student["location"] = "NY";
console.log(student);
console.log(student["skills"][0]);


//Destructuring
const { name , ...remain} = student;
console.log(remain);
