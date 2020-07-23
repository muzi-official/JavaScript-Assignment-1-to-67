// //Task 1  
// var today = new Date();
// document.write("<h1 style='font-size:24px;'>" + today + "</h1>");


// // Task 2  
// var monthNames = ["January" , "February" , "March" , "April" , "May" , "June" ,"July" , "August" , "September" , "October" , "November" , "December"];
// var d = new Date();
// alert("Current month: "+ " " + monthNames[d.getMonth()]);


// //Task 3
// var today = new Date();
// today.toString();
// var b =today.toString();
// var c = b.slice(0,3);
// alert("Today is " + " " + c);


// //Task 4
//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
// if (nameOfToday === "Sat" || nameOfToday === "Sun"){
//     alert("It's Fun day")
// }



// //Task 5
// var b = new Date();
// if (b < 16) {
//     alert("First fifteen days of the month");
// }
// else 
// {
// alert("Last fifteen days of the month");
// }



// //Task 6
// var a = new Date();
// var b = a.getTime();
// var c = b/(1000*60);
// document.write("<h4 style='font-size:24px;'>" + a + "<br/>" + "Elapsed millisecond since january" + "  " + b + "<br/>" + "Elapsed minutes since january"  + "  " + c + "</h4>");

 
// //Task 7
// var hour;
// if(hour>=12){
//     alert( "It's AM" )
// }
// else {
//     alert("It's PM")
// }



//task 8
// var later=new Date("Dec,31,2020");
// document.write("Later date: ".bold()+later); 
 


//task 9:
// var currentDate=new Date("april,26,2020");
// var CDateMiili=currentDate.getTime();
// var today=new Date();
// var todayMilli=today.getTime();
// var diff=todayMilli-CDateMiili;
// var day=Math.floor(diff/(1000*60*60*24));
// document.write(day+" days have passed since 1st ramzan,2020");


//task 10;
// var today=new Date();
// var todayMiili=today.getTime();
// var firstDay=new Date("Jan,01,2020");
// var firstDayMilli=firstDay.getTime();
// var diff=todayMiili-firstDayMilli;
// var sec=Math.floor( diff/(1000*60));
// document.write("On referance date "+today+", "+sec+" second had passed since begening of 2020");


//task 11;
// var today=new Date();
// var todayMiili=today.getTime();
// var hundYears=new Date("June,23,2020,11:24:25");
// var hundYearMilli=hundYears.getTime();
// var diff=todayMiili-hundYearMilli;
// var sec=Math.floor( diff/(1000*60*60*24));
// document.write("current date"+today+"<br> "+Math.abs(sec)+" hour back it was"+hundYears);


//task 12:
// var today=new Date();
// var todayMiili=today.getTime();
// var hundYears=new Date("June,23,1920,00:20");
// var hundYearMilli=hundYears.getTime();
// var diff=todayMiili-hundYearMilli;
// var sec=Math.floor( diff/(1000*60*60*24*30*12));
// document.write("current date"+today+"<br> "+sec+" year back it was"+hundYears);


//task 13:
// var today=new Date();
// var todayMiili=today.getTime();
// var birthDay=new Date("nov,21,1999");
// var birthDayMilli=birthDay.getTime();
// var diff=todayMiili-birthDayMilli;
// var sec=Math.floor( diff/(1000*60*60*24*30*12));
// document.write("your age is "+sec+"</br>Your birth year is 1999");


//task 14:
var cus_name=prompt("entre your name..");
var cur_month=prompt("entre your bill's current month.");
var num_unit=prompt("entre your bill's number of unit..");
var number=parseInt(num_unit);
var charge_unit=16;
var net=number*charge_unit;
var sur_charge=350;
var gross=net+sur_charge;
document.write( "<div id='two'><h1>K-Electric Bill<br/></h1>" +"Custumer Name: "+cus_name+"<br>Month: "+cur_month+"<br>Number of unit: "+num_unit+"<br>Charges per unit: "+charge_unit+"<br><br>Net amount Payable(within due date: )"+net+"<br>Late payment sur charge: "+sur_charge+"<br>Gross amount payable(After due date): "+gross+ "</div>");