// console.log("HELLO");


// =================================
// 

function player_height(height) {
    let inches = 30.48;
    let result = inches * height;
    return result;
    // console.log(result);
}

/* let Jahid = 5.7;
const jahidrResult = player_height(Jahid);
console.log("Jahid Your Height is :", jahidrResult, "CM");

let sajim = 4.9;
const sajimResult = player_height(sajim);
console.log("Sajim,Your Heght is : ", sajimResult, "CM"); */


// FIND EVEN AND  ODD NUMBER
// ===========================================
// let number = 98;
/* let number2 = 117;

sum1 = number % 2;
sum2 = number2 % 2;
// console.log(sum2);

if (sum1 === 0) {
    console.log("even number")
}
if (sum2 !== 0) {
    console.log("ODD number")
}
else (
    console.log("error 404...!")
) */




// ==========================================
// FIND LEAP YEAR

/* let year = 2023;

if (year % 4 === 0) {
    console.log("Leap Year");
}
else (
    console.log("not leap year")
) */


// ================================ 95% done
// FROM ARRAY TO SUM BY FUNCTION



/* function the_number(digit) {
    let sum = 0;
    for (i = 0; i < digit.length; i++) {
        let arrayIndex = i;
        let countValue = digit[i]
        sum = sum + countValue;
        // console.log(countValue, sum);
    }



    return sum;
}
let arraysAre = [10, 20, 31, 40, 55];
const totalNumber = the_number(arraysAre);
console.log(totalNumber); */



// ================================== 100% DONE
// FIND ODD NUMBER FROM ARRAY

/* function the_number(digit) {
    let sum = 0;
    for (i = 0; i < digit.length; i++) {
        let arrayIndex = i;
        let countValue = digit[i]
        if (countValue % 2 !== 0) {
            console.log("This Is in Arrays ODD Number", countValue);
        }
    }
}
let arraysAre = [10, 20, 31, 40, 55, 51, 43, 903];
const totalNumber = the_number(arraysAre); */
// console.log(totalNumber);



/* ======================================================================
HOURS TO MINUTES CONVERT                                                       100% DONE
====================================================================== */

/*
function total_minutes(minute) {
    let second = 60;
    minutes = second * minute;
    console.log("Your Calculate Output are", minutes, "Minutes");
}
let hours = 300;
const result = total_minutes(hours) */


/* ================================================================
            FIND LEAP YEAR FROM ARRAYS VALUE AND MAKE OUTPUT IN THE ARRAY------------------ 90%done
================================================================
 */

/* function find_leap_year(year) {

    const ArrayBox = [];

    for (i = 0; i < year.length; i++) {
        theIndex = i;
        theValue = year[i];
        if (theValue % 4 === 0) {
            // console.log(theValue);
            ArrayBox.push(theValue);
        }
    }
    return ArrayBox;
}
let theYear = [2000, 2005, 2008, 2012, 2018, 2014, 2020, 2023, 2024]
const Output = find_leap_year(theYear)
console.log("Those are the Leap Year", Output); */

// RESULT ::: // Those are the Leap Year[2000, 2008, 2012, 2020, 2024]



/* var greet = function (name) {
    console.log("Hello, " + name + "!");
};

console.log(greet); */

/* let greet = (name) => {
    console.log("Hello, " + name + "!");
}; */
/* let greet = (name) => {
    console.log("Hello, " + name + "!");
};

console.log(greet); */

// ===============


function the_year(year) {
    let arrayBox = [];
    for (i = 0; i < year.length; i++) {
        indexofyear = i;
        mixiing = year[indexofyear];
        if (mixiing % 4 === 0) {
            // console.log(mixiing)
            arrayBox.push(mixiing)
        }
    }
    return arrayBox;
}
let theYearOf = [2018, 2023, 2024, 2032, 2042, 2035, 3000];
const Output = the_year(theYearOf);
console.log(Output);