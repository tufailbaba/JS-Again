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

newarr[0]
console.log(newarr);


