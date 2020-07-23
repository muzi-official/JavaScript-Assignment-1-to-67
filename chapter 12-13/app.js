//Task 1
var ch;
var ch =(prompt("Enter a character or string"));
if(ch>=65 && ch<=90) {
    alert("It is an Uppercase Letter");
}

else if(ch>=97 && ch<=122){
    alert("It is a Lowercase Letter")
}

else{
    alert("It Is A Number");
}



//Task 2
var fnum = +prompt("Enter First Integer");
var snum = +prompt("Enter Second Integer");

if(fnum>snum) {
    alert("First Integer Is Larger" + " " + fnum);
}

else if(snum>fnum) {
    alert("First Integer Is Larger" + " " + snum);
}

else if(fnum===snum) {
    alert("Both Are Equal");
}
else {
    alert("You Entered Rong Input");
}




//Task 3
var num = (prompt("Input Number"));
if(num <=0){
    alert("Negative Number");
    }
    else 
    {
     alert("Positive Number");
    }



//Task 4
var c;
var c= prompt("Enter Character");
if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u') {
    alert("it is a vowel");
}
else {
    alert("false");
}



//Task 5
var correctPass="muzammil", userPass;
var userPass= (prompt("Enter Password"));
if (userPass==""){
    alert("Plese Enter Password");
}

else if (correctPass==userPass){
    alert("Correct! The password you entered matches");
}

else if (correctPass!=userPass){
    alert("Incorrect password");
}



//Task 6
var hour;
var hour = (prompt("enter hour"));
if (hour < 18) {
 alert("Good day");
}

else {
alert("Good evening");
}


//Task 7
var time = 1900;
var time = (prompt("Input Time"));
if (time >=0000 && time < 1200)
{
    alert("Good Morning");
}

else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
}

else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
}

else if (time >= 2100 && time < 2359) {
    alert("Good Afternoon");
}

