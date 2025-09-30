let sum = 0;

let i = 1;

while (i <= 5) {
  sum = sum + i;
  i++;
}

// console.log(sum);

let countdown = [];
let j = 5;
while (j > 0) {
  countdown.push(j);
  j--;
}

// console.log(countdown);

let Arr = [];
let k = 1;
while (k < 5) {
  Arr.push(k);
  k++;
}
// // console.log(Arr);
// let teaCollection = [ ]
// let tea  =

// do {
//     tea = prompt(`Enter Your Favourite Tea (type "stop" to finish)`)

//     if (tea !== "stop"){
//         teaCollection.push(tea)
//     }
// } while (tea !== "stop");

let total = 0;
let m = 1;

do {
  // total = total +k;
  total += m;

  m++;
} while (m < 4);

// console.log(total);

let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let l = 0; l < numbers.length; l++) {
//   takeNumber = numbers[l] * 2;
//   multipliedNumbers.push(takeNumber);
multipliedNumbers.push(numbers[l]*2)
}
// console.log(multipliedNumbers);

let cities = [ "Paris", "New York " , "Tokyo" , "London"];

let cityList = []

for (let c = 0; c < cities.length; c++) {
    const mycity = cities [c];
    cityList.push(mycity);
}
console.log(cityList);

