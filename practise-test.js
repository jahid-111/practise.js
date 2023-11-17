// console.log("HELLO JS");

/* 
=======================================
                            Convert Celsius to Fahrenheit
======================================= */


/* function temperture(degrees) {
    sum = (degrees * 9 / 5) + 32;
    return sum;
}
let heat = 1;
const OutputTemp = temperture(heat);
console.log("Your Temperture converted are ", OutputTemp, "Degress Farenheight");
 */

/* 
=======================================
                            Convert farenheight to Celsius.
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


/*=======================================
                        SIMPLE INTEREST  6%
======================================= */


function principal(money) {

    let month6 = money * 6;
    yearlyInt = month6 / 100;
    threeYearsInt = yearlyInt * 3;
    totalInt = money + threeYearsInt

    return totalInt;
    // console.log(month6, yearlyInt, threeYearsInt, totalInt);
}
let mymoney = 20000;
const myInt = principal(mymoney);
console.log("your moneys 6% Interest", myInt, "$");

let yourmoney = 30000;
const yourInt = principal(yourmoney);
console.log("your moneys 6% Interest", yourInt, "$");


