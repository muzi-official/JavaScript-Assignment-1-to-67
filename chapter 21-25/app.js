//task 1
// var firstName=prompt("Entre your first name..");
// var lastName=prompt("Entre your last anme..");
// var merge=firstName+" "+lastName;
// alert("welcome "+merge+" in our website");


//task 2
// var phoneName=prompt("Entre your fovourite mobile phone with model..");;
// var leng=phoneName.length;
// document.write("<h2>My favourite Phone is: "+phoneName+"<br>Length of string: "+leng+"</h3>");


//task 3
// var citizen="pakistani";
// var citizenIndex =citizen.IndexOf("n");
// document.write("<h3>String: "+citizen+"<br>Index of 'n': "+citizenIndex+"</h3>");


//task 4
// var greet="Hello World!";
// var greetIndex =greet.lastIndexOf("l");
// document.write("<h3>String: "+greet+"<br>Last Index of 'l': "+greetIndex+"</h3>");


//task 5
// var citizen="pakistani";
// var citizenIndex =citizen.slice(3,4);
// document.write("<h3>String: "+citizen+"<br>Character at index 3: "+citizenIndex+"</h3>");


//task 6
// var firstName=prompt("Entre your first name..");
// var lastName=prompt("Entre your last anme..");
// var merge= firstName.concat(lastName);
// document.write("welcome "+merge+" in our website");


//task 7
// var city="Hyderabad";
// var cityIndex=city.splice("Hyder");
// var replacingTxt="Islam";
// var remainingTxt=city.slice(cityIndex+5);
// document.write("City: "+city+"<br> After Replacement: "+replacingTxt+remainingTxt); 


//task 8
// var text="Haris and muzammil are best friends. They play cricket and football together.";
// for(var i=0;i<text.length;i++){
//     if(text.slice(i , i+3)==="and"){
//         text = text.slice(0, i) + "&" + text.slice(i + 3);
//     }
// }
// document.write(text);


//task 9
// var str="472";
// var typeStr=typeof(str);
// var num=parseInt(str);
// var typeNum=typeof(num);
// document.write("Value: "+str+"<br>Type:"+typeStr+"<br>Value: "+num+"<br>Type: "+typeNum); 


//task 10
// var input=prompt("Entre your favourite fruit..");
// var cap_input=input.toUpperCase();
// document.write("User input: "+input+"<br>Upper case: "+cap_input);


//task 11
// var input=prompt("Entre your favourite fruit..");
// var firstChar=input.slice(0,1);
// var otherTxt=input.slice(1);
// var otherTxtCap=otherTxt.toLowerCase()
// var firstCharCap=firstChar.toUpperCase();
// document.write("User input: "+input+"<br>Upper case: "+firstCharCap+otherTxtCap);


//Task 12
// var num=35.36;
// var str=num.toString();
// var type1=typeof(str);
// document.write("Number: "+str+"<br>");
// var first=str.slice(0,2);
// var dot=str.slice(3);
// document.write("result: "+first+dot);
 

//task 13
// var userName=prompt("Entre your name..");
// for (var i=0;i<=userName.length;i++){
//     if(userName[i]==="," || userName[i]==="." || userName[i]==="@" || userName[i]==="!"){
//     alert("Please entre a valid name");
//     break;
//     }
// }
// document.write("<h1>"+userName+"</h1>");


// tas 14
// var array=["cake","apple pie","cookie","chips","patties"]
// var fav=prompt("Entre your favourite item");
// var a=fav.toLowerCase();
// for(var i=0;i<=array.length;i++){
//     if(a===array[i]){
        
//         alert(a+" is available at index "+i+" in our bakery");    
//     }     
// }
// alert(fav+"Not available");



// //Task 15 -----> index file----->
// function test_str() { 
//     var res; 
//     var str = (prompt("Enter Password"));
//     if (str.match(/[a-z]/g) && str.match( 
//             /[A-Z]/g) && str.match( 
//             /[0-9]/g) && str.match( 
//             /[^a-zA-Z\d]/g) && str.length >= 6) 
//         res = "TRUE"; 
//     else 
//         res = "FALSE"; 
//     alert("Please enter a valid password");
// } 
// test_str();


//Task 16
// var university="University of Karachi";
// var arr=university.split();
// for(var i=0;i<university.length;i++){
//     document.write(university[i]+"<br>");
// }



//task 17
// var country="Pakistan";
// var lasChar=country.slice(-1);
// document.write("User Input: "+country+"<br>Last Character of input: "+ lasChar);
// //task 18 not solved
// var text="the quick brown fox jumps over the lazy dog";
// document.write(text);


// //Task 18
// var txt = "The quick brown fox jumps over the lazy dog";
// count= 0;
// for (var i = 0; i < txt.length; i++){
//     if(txt.charAt(i)==='c') {
//         count++;
//     }
// }
// document.write("The quick brown fox jumps over the lazy dog"  + "<br/>" + "There are"+ " " + count + " " + "occurence(s) of word 'the'");