//Task 1
var a = 3;
var b = 5;
var c = a + b;
document.write("<h3>" + "Sum of" + "  " + a + " " + "and" + " " + b + " " + "is" + " " + c + "</h3>");

//Task 2
//for subtraction
var a = 3;
var b = 5;
var c = a - b;
document.write("<h3>" + "Sum of" + "  " + a + " " + "and" + " " + b + " " + "is" + " " + c + "</h3>");

//for multiplication
var a = 3;
var b = 5;
var c = a * b;
document.write("<h3>" + "Sum of" + "  " + a + " " + "and" + " " + b + " " + "is" + " " + c + "</h3>");

//for  division
var a = 3;
var b = 5;
var c = a / b;
document.write("<h3>" + "Sum of" + "  " + a + " " + "and" + " " + b + " " + "is" + " " + c + "</h3>");

//for  modulus
var a = 3;
var b = 5;
var c = a % b;
document.write("<h3>" + "Sum of" + "  " + a + " " + "and" + " " + b + " " + "is" + " " + c + "</h3>");



//Task 3
var a;
document.write("<p style='font-size: 20px; font-weight: 500;'>" + "Value after variable declaration is" + "  " );
document.write("<p style='font-size: 20px; font-weight: 500;'>" + "Initial Value:" + "  "  +  " ");
document.write("<p style='font-size: 20px; font-weight: 500;'>" + "Value after increment is:" + "  " );
document.write("<p style='font-size: 20px; font-weight: 500;'>" + "Value after addition is:" + "  " );
document.write("<p style='font-size: 20px; font-weight: 500;'>" + "Value after decrement is:" + "  ");
document.write("<p style='font-size: 20px; font-weight: 500;'>" + "The remainder is:" + "  ");


//Task 4
var ticketPrice = 600;
var b = 5;
var c = ticketPrice * b;
document.write("<h3>" + "Total cost to buy" + "  " + b + " " + "tickets to a movie is" + " " + c + "PKR"+ "</h3>");



//Task 5
var x = 4, i;
for(i=1;i<=10;i++)
document.write("<h3>"  + "4x" + i + "=" + i*x + "</h3>");


//Task 6
var celSius=30, fahreNheit=86, conversion1, conversion2;
conversion1=(fahreNheit-32)*5/9;
conversion2=(celSius*9/5)+32
document.write("Fahrenheit Is:"+ " " + conversion1 + "<br/>" + "Celsius Is:" + " " + conversion2);


//Task 7
var  priceOfitem1 = 650,  priceOfitem2 = 100, quantity1 = 3, quantity2 = 7, shippingCharges = 100, 
totalCost =priceOfitem1*quantity1+priceOfitem2+shippingCharges*quantity2;
document.write("<h1>"+ "Shopiing Cart " + "</h1>" + "<br/>");
document.write("<p style='font-size: 20px; font-weight: 500;'>" + " Price of item 1 is" + " " + priceOfitem1 + "<br/>" + "Quantity of item 1 is" + " " + quantity1 + "<br/>" + "Price of item 2 is" + " " + priceOfitem2 + "<br/>" + "Quantity of item 2 is" + " " + quantity2 + "<br/>" + " Sipping Charges" + " " + shippingCharges + "<br/>" +  "<br/>" + "Total cost of your ordered is" + " " + totalCost + "</p>");



//Task 8
document.write("<h1>"+ "Marks Sheets " + "</h1>" + "<br/>");
var total = "980", ob = "804", per;
per=ob*100/total;
document.write("<p style='font-size: 20px; font-weight: 500;'>" + "Total Marks:" + " " + total + "<br/>" + "Marks Obtained:" + " " + ob + "<br/>" + "Percentage" + " " + per + "</p>");



//Task 9
var usDollars = 104.80*10, saudiRiyals = 25*28, pakistaniRupee;
 pakistaniRupee= usDollars+saudiRiyals;
document.write("<h1>"+ "Currency In PKR" + "</h1>" + "<br/>");
document.write("<p style='font-size: 20px; font-weight: 500;'>" + "Total Currency in PKR:" + " " + pakistaniRupee + "</p>");


//Task 10
a=5, b=2, c=a*b, d=c/a;
document.write("<p style='font-size: 20px; font-weight: 600;'>" + "a. Add" + " " + a + "<br/>" + "b. Multiply by" + " " + c + "<br/>" + "c. Divide the result by" + " " + d + "</p>");


//Task 11
document.write("<h1 style='font-size: 38px; font-weight: 900;'>" + "Age Calculator" + "</h1>" + "<br/>");
var currentYear = 2020, birthYear = 1999, age=currentYear-birthYear;
document.write("<p style='font-size: 22px; font-weight: 500;'>" + "Current Year: " + " " + currentYear + "<br/>" + "Birth Year:" + " " + birthYear + "<br/>" + "Your Age Is:"+ " " + age);



//Task 12
var area, r, pi = 3.142, coc;
r=parseInt(prompt("Enter The Radius"));
area=pi*r*r;
coc=2*pi*r;
document.write("<h1 style='font-size: 38px; font-weight: 900;'>" + "The Geometrizer" + "</h1>" + "<br/>");
document.write("<p style='font-size: 22px; font-weight: 500;'>" + "Radius of a circle: " + " " + r + "<br/>" + "The circumference is:" + " " + coc +  "<br/>" + "The area is:" + " " + area + "</p>");



//Task 13
var favoriteSnack="Potato Chips", currentAge=21,  maximumAge=70,  amountPerday=2, totalForrest;
totalForrest = currentAge+maximumAge*amountPerday;
document.write("<h1 style='font-size: 38px; font-weight: 900;'>" + "The Lifetime Supply Calculator" + "</h1>" + "<br/>");
document.write("<p style='font-size: 20px; font-weight: 500;'>" + "Favourite Snack:"  + " " + favoriteSnack + "<br/>" + "Current Age:" + " " + currentAge + "<br/>" + "Extimated Maximum Age:"+ " " + maximumAge + "<br/>" + "Amount Of Snacks Per Day" + " " + amountPerday + "<br/>" + "You will need" + " " + totalForrest + " " + "to last you until the ripe old age of" + "  " + maximumAge + "</p>" );
