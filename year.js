


function leap_year(year) {
    var calculate = year % 4;

    if (calculate === 0) {
        console.log("leap year");
    }

    else {
        return calculate, "Not leap year";
    }
}

var theYear = 2024;

result = leap_year(theYear);
console.log(result);
