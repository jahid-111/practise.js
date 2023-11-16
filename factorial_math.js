/* function factorial(number) {

    let result = 1;

    for (i = 1; i <= number; i++) {

        result = result * i;
    }

    return result;
}
const result = factorial(6); */

// console.log(result);




/* function factorial(number) {

    let result = 1;

    for (i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;

}
sum = factorial(6);
console.log(sum);
 */


/*
function factorial(digit) {
    let multi = 1;

    for (i = digit; i >= 1; i--) {
        multi = multi * i
        // console.log(i);
    }
    return multi;
}
theNumber = 6;
const func = factorial(theNumber);

console.log(func); */

/*NOTE :::
TAKE FUNCTION FACTORIAL THEN
-2 MAKE LOOP INSITE
-3 loop firs var will be first function paramiter
-4 2nd var will be what time you finish this loop >=.
-5 3rd every loop are decrement ;
---
-1th take var outside the "for" var = 1;
-2nd inside  "for" take out side var and
var = var * your value.
3rd outside the for loop make it return.
*/

/* function the_number(digit) {
    let sum = 1;
    for (i = digit; i >= 1; i--) {
        sum = sum * i
        console.log(i);
    }
    return sum;
}
let num = 6
const func = the_number(num);
console.log(func); */


// ================ BLIND PRACTISE (((( GOOD BUT I DID DEBUG)))) 90%+


/* function the_multiOf(num) {
    let multi = 1;
    for (i = num; i >= 1; i--) {
        multi = multi * i;
        console.log(i);
    }
    return multi;
}

let num = 5;
const fac = the_multiOf(num);
console.log(fac); */


// ======================
function the_moneyOf(money) {
    let sum = 1;
    for (i = money; i >= 1; i--) {
        sum = sum * i;
        console.log(i);
    }

    return sum;
}

let num = 6;

const func = the_moneyOf(num);
console.log(func);