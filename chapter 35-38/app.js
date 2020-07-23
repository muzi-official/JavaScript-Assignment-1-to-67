// //Task 1 
// function displayDate()
// {
//     document.write("<h1>" + new Date() + "</h1>");
// }
// displayDate();


// //Task 2
// function name()
// {
//     var firstName = prompt("Enter Your First Name","enter first name");
//     var lastName = prompt("Enter Your Last Name","enter last name");
// alert("Welcome " + " " +firstName+ " " +lastName)
// }
// name(2,3);


// //Task 3 htmlcode function call ------->
// function add(){
//     var a,b,c;
//     a=Number(document.getElementById("first").value);
//     b=Number(document.getElementById("second").value);
//     c= a + b;
//     document.getElementById("answer").value= c;
//     }


// //Task 4
// function calculate(){
// var val1=prompt('Enter your first value');
// var sign=prompt('Enter your operator');
// var val2=prompt('Enter your second value');

// if(sign === '+'){
//     alert((+val1)+(+val2));
//     return
// }
// else if(sign === '-'){
//     alert(val1-val2);
//     return
// }
// else if(sign === '*'){
//     alert(val1*val2);
//     return
// }
// else if(sign === '/'){
//     alert(val1/val2);
//     return
// }
// else if(sign === '%'){
//     alert(val1/val2*100);
//     return
// }
// else{
//     alert("Rong Input");
//     return
// }
// }
// calculate();


// //Task 5
// var function  sumOfSquares(num) {
//     var i, sum = 0;
//     for (i = 1; i <= num; i += 1) {
//       sum += i * i;
//     }
//     return sum;
//   }
//   var num = parseInt(prompt("Enter a number:"), 10);
// document.write("The sum of squares for numbers up to and including " + num + " is " +
// sumOfSquares(num)) ;


// //Task 6 
// function factNum(){
//     var num, f=1;
//     num = prompt("Input Number");
// for (var i=num; i >= 1; i--){
//     f = f * i;
// }

// document.write("Factorial Of   A Number Is:" + "  " + f);

// }
// factNum();




// //Task 7
// function cont() {
//     var fnum, lnum;
//     var fnum = prompt("Input Start number");
//     var lnum = prompt("Input End number");
//     for (var i = fnum; i <=lnum; i++){
//         document.write("<table id='cont'>" + "<tr id='cont'>" + "<td >" + i + "</td>" +"</tr>" + "</table>");
//     }
//     }
//     cont();
    



//Task 8
function hypotenuse (a , b) {
    var x = 46;
    function square (x) {
        console.log(x);
         return x*x;
         }
    return Math.sqrt(square(a) + square(b));
}
hypotenuse(3,4);



//Task 9 
// function areaRectangular(w,h,area){
//     var w,h,area;
//     area=w*h;
//     document.write("Area is" + " " + area);
// }
// areaRectangular(45,65);



// //Task 10
// function wordCheck() {
// var  wordUser = prompt("Enter Your word");
// var check = "";
// for (var i = wordUser.length - 1; i >= 0; i--) {
// check += wordUser[i]
// }
// if (wordUser === check){
//   alert(wordUser + " " + "is palindrome word")
// }
// }
// wordCheck();



// //Task 11
// function user() {
// var userText = (prompt("Input text"));
// var firstChar = userText.slice(0,1);
// var otherChar = userText.slice(1);
// firstChar = firstChar.toUpperCase()
// otherChar = otherChar.toLowerCase()

// var userText = firstChar + otherChar;
// alert(userText);
// }

// user();



// //Task 12 
// const str = 'Web Development Tutorial';
// const longestWord = (str) => {
// const strArray = str.split(' ');
// const sortedStrArray = strArray.sort(
//     (strA, strB) => {
//           return strB.length - strA.length;
//     }
// );
// return sortedStrArray;
// }
// alert(longestWord(str));



// //Task 13
// function txtcount(a = "JSResourceS.com" , count = 0) {
// for(var i = 0; i < a.length; i++) {
//     if(a.charAt(i) === 'c'){
//         count++;
//     }
// }

// alert(count);
// }
// txtcount();



// //Task 14

// function Circumference(radius,coc){
// coc=2*Math.PI*radius;
// document.write("The circumference is" + " " + coc + "<br/><br/>");
// }
// Circumference(45);

// function calcArea(radius,aoc){
//  var radius, aoc;
// aoc=Math.PI*radius*radius;
// document.write("The area is" + " " + aoc);
//  }
//  calcArea(45);

