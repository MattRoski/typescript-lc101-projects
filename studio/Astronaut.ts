import { Payload } from "./Payload";
//need to important the Payload for it to work

//while the Astronaut class implements payload,
//and without massKg declared as a variable in the constructor
//will get error bcuz of the "contract". If implements Payload..must have massKg
export class Astronaut implements Payload {
    //Class variables
    massKg: number;
    name: string;

    //constructor
    constructor(massKg: number, name: string){
        this.massKg =  massKg;
        this.name = name;
    }
 }