// Task 1
function power(a,b)
{
    var result=Math.pow(a,b);
    document.write("the Custom power is.."+result);

}
power(2,3);





// Task 2
function leap_year( input )
{
    var input=+prompt("Enter year for checking leapyear...");
    if(input%4===0)
    {
        document.write("Leap year.."+input);

    }
    else
    {
        document.write("Leap year not");
    }
}
leap_year();




// Task 3
function traingle()
{
    var a=2;
    var b=3;
    var c=5;
    var s= a+b+c/2;
    var area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
    document.write("the area of a traigle is.."+area)

}
traingle();





// Task 4
var sub1 = 89;
function result() {
    var sub1=78;
    var sub2 = 67;
    var sub3 = 76;

    function averageMarks() {
        var avg =( sub1 + sub2 + sub3);
        document.write("The obtaining marks is ..." + avg);

    }
    function percentage() {
        var p = ((sub1+sub2+sub3) / 300) * 100;
        document.write("The percentage is.." + p);
    }
    averageMarks();
    percentage();
}
result();




// Task 5
function indexOf(customfunction, singleChar) 
{
  for (var i = 0; i <= customfunction.length; i++)
   {
    if (customfunction[i] == singleChar)
     {
      document.write(customfunction + "<br>" + "index of " + customfunction[i] + "is" + i);

    }

  }

}
indexOf("Muzammil", "h");




// Task 6
alert ("The sentence is not more than 25 characters...");
function disemvowel(str) 
{
    var str=prompt("Enter some string..");
    alert(str.replace(/[aeiou]+/ig, ''));
  }
disemvowel();




// Task 7
function findOccurrences()
 {
  var str = "Pleases read this application and give me gratuity";
  var count = 0;
  var count2 = 0;

  for (var i = 0; i <str.length; i++)
  {
    switch (str.slice(i, i + 2)) 
    {
      case 'ea':
        count++;
        break;
      case 'ui':
        count2++;
        break;
    }
  }
  document.write("Pleases read this application and give me gratuity" + "<br>" + count+count2 )
}
findOccurrences();




// Task 8
function convertor(input)
{
  var input=+prompt("Enter your city distance in km ..?");
  function meter()
  {
    var meter=parseFloat (input)*1000;
    document.write("Conert into meter your city distance is..."+meter);
  }
  function centiMeter()
  {
    var c_meter=parseFloat (input)*10000;
    document.write("Conert into Centemeter your city distance is..."+c_meter);
  }
  function feet()
  {
    var feet=parseFloat (input)*	3280.839895013;
    document.write("Conert into feet your city distance is..."+feet);
  }
  function inch()
  {
    var inch=parseFloat (input)*39370.07874015;
    document.write("Conert into inch your city distance is..."+inch);
  }
  feet();
  inch();
  centiMeter();
  meter();

}
convertor();                                                                                                                          h




// Task9
var employ,otime,opay,hours;
var hours = prompt("Enter The Number Of Hours Worked By Employee");
for (employ=1;employ<=10; employ++);
{
if(hours>40)
{
var otime=hours-40;
var opay=otime*12;
document.write( + "The Overtime Pay Of Employeee Is " + opay);
}
else if(hours<40){
    document.write("There Is No Overtime Pay For Employee ");
}
}



// Task 10
function currencyDenomination() {
	var cash = +prompt("Please input amount for withdraw : ");
	document.write("\n\nRequired notes of Rs. 100  :", cash / 100);
	document.write("\n\nRequired notes of Rs. 50   :", (cash % 100) / 50);
	document.write("\n\nRequired notes of Rs. 10   :", (((cash % 100) % 50) / 10));
	document.write("\n\nAmount still remaining Rs. :", (((cash % 100) % 50) % 10));
}

