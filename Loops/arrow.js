const user = {
    username : "Tufail",
    price: 999,

    welcomeMessage : function(){
        console.log(` ${this.username} ,welcome to website`);
        
    }
}
// user.welcomeMessage()

//Arrow

const addtwo= (num1 ,num2) => num1 +num2;


// console.log(addtwo (6,4));

//practicing Arrow


const addthree = (numm1, numm2 ,num3)=>num3+numm1+numm2;

// console.log(addthree (50,50,10));

//practicing for

let Arr = [5,6,1,23]

Arr.forEach(element => {
    console.log(element);
    
});
