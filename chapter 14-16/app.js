// //Task 1
// var studentNames = [];
// studentNames[0] = "Muzammil";
// studentNames[1] = "Haris";

// //Task 2
// const StudentNames = new Array();

// //Task 3
// const stringArray = ["muzammil"];
// alert(stringArray);

// //Task 4
// const numberArray = [0];
// alert(numberArray);

// //Task 5
// var nump = 5;     
// var anyBoxesChecked = new Array(nump).fill(false);
// console.log(anyBoxesChecked);

// //Task 6
// const numberString = ["muzammil" + " " + 315];
// alert(numberString);


// //Task 7 
// var qualifications = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M. Phil" ,  "PhD"];
// document.write("<div id='main-content'>" + "<h1>" + "Qualifications:"+ "<br/>" +"</h1>" + "<h2>" + "1)" + " " +  qualifications[0] + "<br/>" + "2)" + " " +  qualifications[1]  +  "<br/>" + "3)" + " " +  qualifications[2] + "<br/>" + "4)" + " " +  qualifications[3] + "<br/>" + "5)"+ " " + qualifications[4] + "<br/>"  +"6)"+ " " +  qualifications[5] + "<br/>" + "7)"+ " " +  qualifications[6] + "<br/>" + "8)"+ " " +  qualifications[7] + "</h2>" + "</div>")



// //Task 8    
// var std=["Tanzeel", "Ramish", "Muzammil"];
// var marks=[320,230,480];
// var totalMarks=500;
// for (let i=0; i<std.length; i++){
// document.write("<div class='second-head'>" + "<h3>" + "Score of "+std[i]+ " " + "is "+ marks[i]+". Percentage:"+ " " +marks[i]/totalMarks*100+ "%" + "<br>"+ "</h3>" + "</div>");
// }



//Task 9
var colors = ["red", "green", "blue", "black"];
document.write(colors);


var a = prompt(" enter color that you  wants to add to the beginning");
colors.splice(0, 0, a);
document.write("<br>" + colors);

var b = prompt(" enter color that you  wants to add to the end");
colors.splice(3, 0, b);
document.write("<br>" + colors);

colors.splice(0, 0, "grey", "purple");
document.write("<br>" + colors);

colors.splice(0, 1);
document.write("<br>" + colors);

colors.splice(3, 1);
document.write("<br>" + colors);

var c = prompt("enter the index num at which you want to add color");
var d = prompt("enter the color ");
colors.splice(c, 0, d);
document.write("<br>" + colors);

var l = prompt("enter the index num at which you want to delete color");
var m = prompt("how many colors you want to delete ");
colors.splice(l, m);
document.write("<br>" + colors);


// //Task 10
// var arr1=[320,230,480,120];
//  document.write("<h2 style='font-size:16px;'>" + "Scores Of Students"+ " " + arr1 +"<br>"+ "</h2>");
//  document.write("<h2 style='font-size:16px;'>" + "Ordered Scores Of Students"+ " " + arr1.sort (function(a, b){return a-b}) + "</h2>");



// //Task 11
// var cityList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// copyList = cityList.slice(2,4)
// document.write("<div class='third-container'>" + "<h3>" + "Cities List:" + "<br/>" + cityList + "<br/>"+ "<br/>" + "Selected Cities List:" + "<br/>" + copyList +"</h3>" + "</div>");


// //Task 12
// var arr = ["This", "is" , "my ", " cat"];
// document.write("Array <br>"+arr);
// document.write(" <br>String<br>"+(arr.join(" ")));



// //Task 13
// var devices=[];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write("<h4>Devices</h4>"+devices);
// document.write("<br>Out<br>"+devices.shift());
// document.write("<br>Out<br>"+devices.shift());
// document.write("<br>Out<br>"+devices.shift());
// document.write("<br>Out<br>"+devices.shift());



// //Task 14
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write("<h4>Devices</h4>"+devices);
// document.write("<br>Out<br>"+devices.pop());
// document.write("<br>Out<br>"+devices.pop());
// document.write("<br>Out<br>"+devices.pop());
// document.write("<br>Out<br>"+devices.pop());
// document.write("<br>Out<br>"+devices);


// //Task 15
// var manuFacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select> ")
// for (var i=0; i < manuFacturer.length; i++) {
//     document.write("<option>" + manuFacturer[i] + "</option>")
// }
// document.write("</select>");




