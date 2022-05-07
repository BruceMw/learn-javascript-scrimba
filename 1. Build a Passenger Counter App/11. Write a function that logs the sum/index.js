let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times
function sumLaps(){
    let lapTime = lap1+lap2+lap3; // note that lapTime can not be call outside of the scope of this function.
    console.log(lapTime);
}
sumLaps();
