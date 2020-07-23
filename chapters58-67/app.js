
// Task 1
// (i)
var mainContent = document.childNodes[1].childNodes[1].childNodes[0].childNodes[2];

// (ii)
console.log(mainContent.childNodes)

// (iii)
var render=document.childNodes[1].childNodes[1].childNodes[0].childNodes[2]
document.write(render.innerHTML)

// (iv)
var firstName=document.getElementById('first-name').value="Muzammil";
console.log(firstName)

// (v)
        var lastName=document.getElementById('last-name').value='Ashfaque'
console.log(lastName)
        var email=document.getElementById('email').value='syedmuzammilashfaque@gmail.com'
console.log(email)


// Task2
// (i)
var formContect=document.getElementById('form-content')
console.log(formContect.nodeType)

// (ii)
var lastName=document.getElementById('lastName')
console.log(lastName.nodeType)
console.log(lastName.childNodes)

// (iii)
var lastName=document.getElementById('lastName')
console.log(lastName.childNodes[0].nodeValue='Last Name :Ashfaque')

// (iv)
var firstAndLast=document.getElementById('main-content')
console.log(firstAndLast.firstChild)
console.log(firstAndLast.lastChild)

// (v)
var nextPervious=document.getElementById('lastName')
console.log(nextPervious.nextSibling)
console.log(nextPervious.previousSibling)

// (vi)
 var nodeParent=document.getElementById('email')
 console.log(nodeParent.nodeType)
 console.log(nodeParent.parentNode)


