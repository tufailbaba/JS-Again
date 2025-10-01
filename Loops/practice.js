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

let obj = {
  Harry: 90,
  sahoor: 90,
  Tung: 90,
  Baba: 90,
  Tufail: 90,
};

for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]);
}
