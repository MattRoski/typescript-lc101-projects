// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


//make sure to run tsc--version is your project root folder..or install globally??
//then make sure you are in the correct directory of the file you want to compile
//if want to compile parts1-5.js...cd exercises...tsc parts1-5.ts... node parts1-5.js


// Part 1: Declare (5) Variables With Type
let spacecraftName : string = 'Determination';
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

let milesToMars: number = kilometersToMars * milesPerKilometer;
let hoursToMars: number =  milesToMars / speedMph;
let daysToMars: number = hoursToMars / 24;



// Part 2: Print Days to Mars



// Code an output statement here (use a template literal):

console.log(`Days to Mars: ${spacecraftName} ${daysToMars}`);

// Part 3: Create a Function ("getDaysToLocation")



// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.




// Part 4: Create a Spacecraft Class
function getDaysToLocation(kilometersAway: number): number {
    let milesAway: number = kilometersAway * milesPerKilometer;
    let hours: number = milesAway / speedMph;
    return hours / 24;
 }

 console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} to get to the Moon.`);


// Create an instance of the class here:



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
