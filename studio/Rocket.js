"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacity) {
        this.cargoItems = []; //initialized to empty array
        this.astronauts = []; //initialized to empty array
        this.name = name;
        this.totalCapacityKg = totalCapacity;
    }
    //Returns the sum of all items using each item's massKg property
    Rocket.prototype.sumMass = function (items) {
        var output = 0;
        for (var i = 0; i < items.length; i++) {
            output += items[i].massKg;
        }
        return output;
    };
    //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    Rocket.prototype.currentMassKg = function () {
        var astronautMass = this.sumMass(this.astronauts);
        var cargoMass = this.sumMass(this.cargoItems);
        return astronautMass + cargoMass;
    };
    //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    Rocket.prototype.canAdd = function (item) {
        var overweight = false;
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg) {
            overweight = true;
        }
        return overweight;
    };
    //Uses this.canAdd() to see if another item can be added.
    //If true, adds cargo to this.cargoItems and returns true.
    //If false, returns false.
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    //Uses this.canAdd() to see if another astronaut can be added.
    //If true, adds astronaut to this.astronauts and returns true.
    //If false, returns false
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
