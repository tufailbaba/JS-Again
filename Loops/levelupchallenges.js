let Teas = [ "Green tea" , "Black tea" , "Chai", "Oolong tea"];

let selectedteas = [];

for (let i = 0; i < Teas.length; i++) {
    if(Teas [i] == 'Chai'){
        break;
    }
    selectedteas.push(Teas[i])
    
}
// console.log(selectedteas);

//Practicing it//

let teas = [ "Green tea" , "Black tea" , "Chai", "Oolong tea"];
let selectedTeas = []

for (let i = 0; i < teas.length; i++) {
   
    if ( teas [i] == 'Chai') {
        break;
        
    }
    
    selectedTeas.push(teas[i])
}
// console.log(selectedTeas);

//practicing Again 

let tees = ["Green tea" , "Black tea" , "Chai", "Oolong tea" ]

let selectedtees = []

for (let i = 0; i < tees.length; i++) {
    if ( tees [i] == 'Black tea'){
        break;
    }
    
    selectedtees.push(tees[i])
}
// console.log(selectedtees);

let cities = [ "London" , "New york", "Paris" , "Berlin"];
let visitedCities = []
for (let i = 0; i < cities.length; i++) {
    if (cities[i] === 'Paris') {
        continue;
        
    }
    visitedCities.push(cities[i])

}
// console.log(visitedCities);

//practicing it again//

let num = [1 ,2 , 3, 4, 5]
let newnum = []
for (let i = 0; i < num.length; i++) {
    if(num[i] === 3){
        continue;
    }
    newnum.push(num[i])
}
console.log(newnum);
// newnum.pop()
newnum.shift()
console.log(newnum);




