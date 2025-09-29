let teaflavors = [ "Green Tea" , "Black tea"]

let teaFl = new Array ("Green tea" , "Black  Tea" ,"Pink Tea")

const first = teaflavors[0]


// console.log(teaFl);
// console.log(teaflavors);
// console.log(first);


let teaTypes = ["Herbal Tea" , "White Tea " , "Masala Chai"]

teaTypes[1] = "Jasmine tea";

// console.log(teaTypes);

let citiesvisted = ["Mumbai" , "Sydney"]

let AontherCitiesVisited = ["Berlin"]

// const Allcitiesvisited = citiesvisted.concat(AontherCitiesVisited)

// console.log(Allcitiesvisited);


citiesvisted.push(...AontherCitiesVisited)
// console.log(citiesvisted);

let allcitiesvisited = [...citiesvisted, ...AontherCitiesVisited]


// console.log(allcitiesvisited);

let TeaOrders = ["Chai" , "Ice tea", "mathca" ,"earl grey"]

TeaOrders.pop ();
// console.log(TeaOrders);


let popularTeas = ["Green tea" , 'oolong tea','chai']

let softcopy = [...popularTeas]
// console.log(softcopy);

let newarr = ["Tufail" , "Baba", ]

const newarr1 = newarr[1]
// console.log(newarr1);


let fruits = ["Apple", "Banana" ,"Mango"]

fruits [1] = ("Grapes")
// console.log(fruits);

let fruitseaten = ["Apple", "Mango" ]
let fruiteaten = ["Grapes"]

fruiteaten.push(...fruitseaten)
// console.log(fruiteaten);

let allfruits = [fruiteaten  + "" + fruitseaten]
// console.log(allfruits);

// fruiteaten.pop()
// console.log(fruiteaten);

let europeanCities = ["Paris" , "Rome" ]

let asianCities = ["Tokyo", "Bangkok"]

// let worldCities = [...europeanCities, ...asianCities]
let worldCities = europeanCities.concat(asianCities)
// let worldCities = europeanCities + asianCities

// console.log(worldCities);

let teaMenu = ["Masala chai", "Oolong tea", "Green tea" , "Early grey" ]

let menuLength = teaMenu.length
// console.log(menuLength);

let cityBucketlist = ["Kyoto", "London", "Cape Town", "Vancouver"]

let isLondinInlist = cityBucketlist.includes("London");
// console.log(isLondinInlist);







