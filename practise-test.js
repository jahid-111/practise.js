// console.log("HELLO JS");

/* 
=======================================
                            Convert Celsius to Fahrenheit
======================================= */


function temperture(degrees) {
    sum = (degrees * 9 / 5) + 32;
    return sum;
}
let heat = 1;
const OutputTemp = temperture(heat);
console.log("Your Temperture converted are ", OutputTemp, "Degress Farenheight");


/* 
=======================================
                            Convert farenheight to se Celsius.
======================================= */

/* 
function temperture(degrees) {
    sum = (degrees - 32) * (5 / 9);
    return sum;
    // console.log(sum);
}
let bodyTemp = 98.4;
const OutputBody = temperture(98);
console.log(OutputBody); */