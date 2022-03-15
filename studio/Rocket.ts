import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";


export class Rocket{
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = []; //initialized to empty array
    astronauts: Astronaut[] = []; //initialized to empty array

    constructor(name:string, totalCapacity:number,){
        this.name = name;
        this.totalCapacityKg = totalCapacity;
    }

    //Returns the sum of all items using each item's massKg property
    sumMass(items: Payload[] ): number{
        let output = 0;
        for(let i = 0; i< items.length; i++){
            output += items[i].massKg;
        }
        return output;
    }

    //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    currentMassKg(): number{
        let astronautMass: number = this.sumMass(this.astronauts);
        let cargoMass: number = this.sumMass(this.cargoItems);
        return astronautMass + cargoMass;
    }

    //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    canAdd(item: Payload): boolean{
        let overweight: boolean = false;
        if( (this.currentMassKg() + item.massKg) <= this.totalCapacityKg ){
            overweight = true;
        }
        return overweight;
    }
    //Uses this.canAdd() to see if another item can be added.
    //If true, adds cargo to this.cargoItems and returns true.
    //If false, returns false.
    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    //Uses this.canAdd() to see if another astronaut can be added.
    //If true, adds astronaut to this.astronauts and returns true.
    //If false, returns false
    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }

 }