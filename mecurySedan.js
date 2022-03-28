//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

class Car extends Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPass = 5;
        this.pass = 0;
        this.numWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService  = false;
    }
    //if passenger less than maximumPassengers 
    //then availableRoom == true
    loadPassenger(inPass){
        let availableRoom = false;
        if(inPass+this.pass<=this.maxPass){
            availableRoom = true;
        }
    }
    start(){
        if(this.fuel > 0){
            start = true;
        }
    }
    scheduleService(mileage){
        if(mileage > 30000){
            this.scheduleService = true;
        }
    }
}
//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

