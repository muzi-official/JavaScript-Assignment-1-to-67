//Task 1 
var k = "karachi"; var cityName;
cityName = (prompt("Enter Your City name"));
if (cityName == k) {
    alert("Welcome to city of lights");
}

else {
    alert(cityName);
}



//Task 2
var maLe = "male", feMale = "female";
var inputUser = (prompt("Enter Your Gender"));
if (inputUser == maLe) {
    alert("Good Morning Sir.");
}
else if (inputUser == feMale) {
    alert("Good Morning Ma'am.");
}



//Task 3
yellow = "yellow", green = "green", red = "red";
var colorRoad = (prompt("Input Color Of Road Traffic Signal"));

if (red = colorRoad) {
    document.write("<table align='center'><tr><td>" + colorRoad + "</td><td>Must Stop</td></tr></table>");
}

else if (yellow = colorRoad) {
    document.write("<table align='center'><tr><td>" + colorRoad + "</td><td>Ready To Move</td></tr></table>");
}

else if (colorRoad = green) {
    document.write("<table align='center'><tr><td>" + colorRoad + "</td><td>Move Now</td></tr></table>");
}



//Task 4
var fuelLess = 0.25;
var remainingFuel = (prompt("Input Remaining Fuel In car (In Litres)"));
if (remainingFuel < fuelLess) {
    alert("Please refill the fuel in your car");
}



//Task 5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}

if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}


//Task 6 --->>>> Index File --------> //

//Task 7
var secretNumber = 3, guessSecret, guessNumber = +3;
var guessSecret = (prompt("Guess The Secret Number 1 to 10:" + " "));
if (guessSecret == secretNumber) {
    alert("Bingo! Correct Answer.");
}

else if (guessSecret == guessNumber) {
    alert("Close enough to the correct answer");
}
else {
    alert("Sorry Rong Answer");
}



//Task 8
var a = prompt("Enter Any Number");
if (a % 3 === 0) {
    document.write("Number Is Divisible By 3");
}
else { document.write("Number Is Not Divisible By 3"); }



//Task 9  html index file go--------->
function check() {
    var a;
    a = Number(document.getElementById("a").value);
    if (a % 2 == 0) {
        alert("This Is Even Number:");
    }
    else {
        alert("This Is Odd Number:")
    }
}


//Task 10
var e;
var e = (prompt("Input Temperature."));

if (e >= 40) {
    alert("It is too hot outside.");
}

else if (e >= 30) {
    alert("The Weather today is Normal.");
}

else if (e >= 20) {
    alert("Today’s Weather is cool.");
}
else if (e >= 10) {
    alert("OMG! Today’s weather is so Cool.");
}


//Task 11 ----->>>>>>  ----------- Go index Files---Calculator---->>>