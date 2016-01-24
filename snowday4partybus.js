// + 1) include party bus file
var PartyBus = require("./PartyBus.js");
var Passenger = require("./passenger.js");

// + 2) create a party PartyBus(driverName, startLocation, destination)
var tonightsPartyBus = new PartyBus("Shamoon", "New York City", "New Brunswick");


// 3) Log to the console who is on the bus // Print out in text "No passengers on bus"
console.log(tonightsPartyBus.howManyPassengers());

// + 4) Add Sarah, female, 25. Print to the command line Sarah's Info
tonightsPartyBus.addPassenger("Sarah", "Female", 25);
tonightsPartyBus.addPassenger("John", "Male", 21);
tonightsPartyBus.addPassenger("Steve", "Male", 29);
tonightsPartyBus.addPassenger("Jessica", "Female", 32);
tonightsPartyBus.addPassenger("Shamoon", "Male", 32);

console.log(tonightsPartyBus.howManyPassengers());
debugger

// Print out the destination and who is on the bus
"We've arrived at DESTINATION and Sarah, John, Steve, Jessica, and Shamoon are on board";



// PartyBus.js

var Passenger = require("./passenger.js");

function PartyBus(driverName, startLocation, destination){
    this.driverName = driverName;
    this.startLocation = startLocation;
    this.destination = destination;
    this.passengers = [];
    this.addPassenger = function(name, gender, age){
        var passenger = new Passenger(name, gender, age);
        this.passengers.push(passenger);
    }
    this.howManyPassengers = function(){
        if(this.passengers.length > 0) {
            console.log(this.passengers);
        } else {
            console.log("No passengers on bus");                
        }
        
    }
}

module.exports = PartyBus;




// Passenger.js

function Passenger(name, gender, age){
  this.name = name;
  this.gender = gender;
