//Task 1
var mul_arr=[["muz"],20,"b"]
alert(mul_arr);


//Task 2
 var arr1=[[0 , 1 , 2 , 3],[1,0,1,2],[2,1,0,1]];
 document.write(arr1[0]+"<br>"+arr1[1]+"<br>"+arr1[2]);


//Task 3
 for(var i=1;i<=10;i++){
     document.write(i +"<br>");
 }


//Task 4
 var a=prompt("Entre a number to show its multiplication table");
 var b=prompt("Entre length of multiplication table");
 var x=a;
 var y=b;
 for(var i=1;i<=b;i++){
     document.write(a+"x"+i+"="+a*i+"<br>");
 }
 

//Task 5
 var fruits = ["apple", "banana", "mango", "orange","strawberry"];
 for(var i=0;i<fruits.length;i++){
   document.write(fruits[i]+"<br>");
    
 }
for(var i=0;i<fruits.length;i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
    

 }


//Task 6
 document.write("Counting: <br><br>");
 for(var i=1;i<=15;i++){
    document.write(i+",");
 }

//part
document.write("<br><br>Reverse Counting: <br><br>");
 for(var i=10;i>=1;i--){
     document.write(i+",");
}

 document.write("<br><br>Even <br><br>");
 for(var i=0;i<=20;i+2){
     document.write(i+",");
 }

 document.write("<br><br>Odd <br><br>");
 for(var i=1;i<=20;i+2){
     document.write(i+",");
 }

 document.write("<br><br>Series <br><br>");
for(var i=2;i<=20;i+2){
     document.write(i+"k,"); 
 }



//Task 7
 var array=["cake","apple pie","cookie","chips","patties"]
 var a=prompt();
 for(var i=0;i<array.length;i++){
     if(a===array[i]){
         alert(a+"is available at index "+i+" in our bakery");
     }
     else{
         alert("we are sorry"+a+" is not available in our bakery");
    }

 }


//Task 8
 var array = [3 , 6, 2, 56, 32, 5, 89, 32];
 var largest= 0;
 document.write(array);

 for (i=0; i<=largest;i++){
   if (array[i]>largest) {
         var largest=array[i];
     }
 }
 document.write("<br>"+largest);



//Task 9
 var array = [3 , 6, 2, 56, 32, 5, 89, 32];
 var smallest= 100;
 document.write(array+"<br>");

 for (i=0; i<=smallest;i++){
     if (array[i]<smallest) {
         var smallest=array[i];
     }
 }
 document.write(smallest);


//Task 10
 for(var i=1;i<=100;i++){
     if(i%5==0){
         document.write(i+" ,")
     }
}
