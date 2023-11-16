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

// ==================================
// FIND ODD NUMBER FROM ARRAY 

function the_number(digit) {
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
const totalNumber = the_number(arraysAre);
// console.log(totalNumber);