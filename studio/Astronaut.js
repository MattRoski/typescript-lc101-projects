"use strict";
exports.__esModule = true;
exports.Astronaut = void 0;
//need to important the Payload for it to work
//while the Astronaut class implements payload,
//and without massKg declared as a variable in the constructor
//will get error bcuz of the "contract". If implements Payload..must have massKg
var Astronaut = /** @class */ (function () {
    //constructor
    function Astronaut(massKg, name) {
        this.massKg = massKg;
        this.name = name;
    }
    return Astronaut;
}());
exports.Astronaut = Astronaut;
