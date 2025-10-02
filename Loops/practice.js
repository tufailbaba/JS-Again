for (let i = 0; i <= 5; i++) {
  // console.log(i);
}
//
//Program to add n natural numbers

let sum = 0;
let n = 5;

for (let i = 0; i <= n; i++) {
  sum = sum + i;
}
// console.log(sum);

// let Sum = 0;
// let N = prompt("Enter the value of N");
// N = Number.parseInt(N)
// for(let i = 0; i<=N ; i++){
//     Sum = Sum+i;
// }

// console.log("Sum of first " + N + "Natural number is" + Sum );

//
let Factorials = [];
let result = 1;

for (let i = 1; i <= 5; i++) {
  result = result * i;
  Factorials.push(result);
}
// console.log(result);
// console.log(Factorials);
//For in

let obj = {
  Harry: 90,
  sahoor: 90,
  Tung: 90,
  Baba: 90,
  Tufail: 90,
};

// for (let a in obj) {
//   console.log("Marks of " + a + " are " + obj[a]);
// }


let myobj = {
    tufi : 100,
    safi : 100,
    musi : 100,
}

// for (  let a  in myobj) {
//     console.log("Your makrs are " + a + myobj [a] );
    
   
    
// }

//For each

let num = [2,3,4,5,6]
num.forEach(element => {
    // console.log(element*element);
    
});


let arr = ["Tufail ", "Baba" , "Ahmad"]

arr.forEach(element => {
    // console.log(element + "!");
    
    
});
// Array.from


let name = 'Tufail'
let arr1 = Array.from(name)
// console.log(arr1);

//for of

for (let i of num){
    // console.log(i);
    
}

let newarr = ["Tufail" , 1, "Ahmad" , 2 , "Baba", 3]

for (let element of newarr) {
    // console.log(element);
    


}
//for in

// for (let element in newarr) {
//     console.log(newarr[element]);
// }

//functions

function  saymyname(){
    console.log('T');
    console.log('u');
    console.log('f');
    console.log('a');
    console.log('i');
    console.log('l');
    
}
// saymyname();

function addTwoNumbers (num1, num2){
//  console.log(num1 + num2);
 
}
// addTwoNumbers(3,4)

function loginUser (username){
    if (!username){
        console.log("please enter username");
        return 
    }
    return`${username} Just logged in`

}
console.log(loginUser ())