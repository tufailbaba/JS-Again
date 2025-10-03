let Car  = {
    make : "Toyata",
    model : "Camry",
    year : "2020",

    start : function (){
        return` ${this.make} car got started in ${this.year}`
    },
}
console.log(Car.start());
