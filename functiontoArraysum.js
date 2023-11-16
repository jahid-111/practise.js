


function get_sum_array(number) {

    let sum = 0;
    for (i = 0; i < number.length; i++) {
        index = i;
        indexvar = number[index];
        sum = sum + indexvar;
        avg = sum / number.length;
        console.log(index, indexvar, avg);


    }

}

const myNumber = [20, 30, 30, 100, 10, 5, 5,]
// get_sum_array(myNumber);


/* function money_taken(money) {

    let sum = 0;
    for (i = 0; i < money.length; i++) {
        var indexOfTheArray = i;
        indexOfValue = money[i];
        sum = sum + indexOfValue;
        console.log(indexOfTheArray, indexOfValue, sum);

    }
}
iHave = [10, 10, 30, 50, 50, 60]
totalWithVar = money_taken(iHave); */

// ---------------
/*NOTE::: IN FUNTION 
1-FIRST YOU FIND THE INDEXNUMBER
2-THEN YOU FIND THE VALUE OF INDEX
3-DECLEARE A VARIVALE OUTSIDE THE FUNCTION
4-OUT SIDE VARIABLE PUT INTO THE FUNCTION VARIABLE,AND 
5-OUTSIDE VARIABLE = OUTSIDE VARIABLE + ARRAYS VALUE VARIABLE;
*/

function theNumber(money) {
    sum = 0;
    for (i = 0; i < money.length; i++) {
        let countIndex = i;
        let countValue = money[i];
        sum = sum + countValue;
        // console.log(countIndex, countValue, sum);
    }
}

let jahidMoney = [50, 50, 100, 2000, 3000];

theNumber(jahidMoney);



/*NOTE::: IN FUNTION 
1-FIRST YOU FIND THE INDEXNUMBER
2-THEN YOU FIND THE VALUE OF INDEX
3-DECLEARE A VARIVALE OUTSIDE THE FUNCTION
4-OUT SIDE VARIABLE PUT INTO THE FUNCTION VARIABLE,AND 
5-OUTSIDE VARIABLE = OUTSIDE VARIABLE + ARRAYS VALUE VARIABLE;
*/

function the_moneyOf(PersonMoney) {

    sum = 0;
    for (i = 0; i < PersonMoney.length; i++) {

        let quantity = i;
        let quantityValue = PersonMoney[i];
        sum = sum + quantityValue;
        // console.log(i, quantityValue, sum);
    }
}

let jahid = [1000, 2000, 1500, 490];
// the_moneyOf(jahid);

/* let sajim = [200, 300];
the_moneyOf(sajim); */


function totalNumber(number) {
    let array = [];
    for (i = 0; i < number.length; i++) {
        let index = i;
        let value = number[index];
        // sum = sum + value;

        if (value % 3 !== 0) {
            // console.log(index, value);
            array.push(value);
        }
        // return array;

        /*         if (value % 4 !== 0) {
                    console.log("the number is ODD Number ", index, value)
                } */
    }
}


theNumber = [2000, 2003, 2004, 2010, 137, 43, 2022, 2023];

numbervar = totalNumber(theNumber);
// console.log(numbervar);



// ===================================  BLIND PRACTISE AFTER 3 HRS


function the_product(price) {

    sum = 0;
    arrayIn = [];
    for (i = 0; i < price.length; i++) {
        let fruiQty = i;
        fruiPrice = price[i];
        sum = sum + fruiPrice

        arrayIn.push(sum);
        console.log(arrayIn);

    }

}

let fruiPrice = [20, 42, 133, 421, 50, 51];

let totaFruit = the_product(fruiPrice);
// console.log(totaFruit);
/////////////////////////////////////////////////////// DONE 98%