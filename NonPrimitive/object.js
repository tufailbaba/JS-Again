let username = { 
    firstname: "Tufail", 
    isLoggedin : true,
}

console.log(username);
console.log(typeof username);

const username2 = {
    firstname: "Tufi",
    isLoggedin: "False"
}

console.log(username2);
console.log(typeof username2);



//Array

let heros = ["A" ,"B", "C", true]
let anotherUser = ["Tufail" , true ]
// console.log(heros);
console.log(anotherUser [0]);

let add = [...heros, ...anotherUser]

console.log(add);


