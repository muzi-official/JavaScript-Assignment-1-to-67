// Task 1
function myDataFun() {
    var un = document.f1.uname.value;
    var up = document.f1.upass.value;
    var uem = document.f1.uemail.value;
    var gen = document.f1.gender.value;
    var uc = document.f1.ucity.value;
    document.write("User Name:" + "  " + "  " + un + "<br/>" + "Password:" + "  " + "  " + up + "<br/>" + "Email:" + "  " + "  " + uem + "<br/>" + " Gender:" + "  " + "  " + gen + "<br/>" + "City:" + "   " + "  " + uc);
}



// Task 2
var pera = document.getElementById("pera").hidden = true;
function aboutme() {
    var pera = document.getElementById("pera").innerHTML;
    var about = document.getElementById("about")
    about.innerHTML = pera;
}
document.getElementById("text").hidden = true;
function readmore() {
    var text = document.getElementById("text").innerHTML;
    var pera = document.getElementById("pera")
    pera.innerHTML = text;
}



// Task 3
var rIndex,
    table = document.getElementById("table");

function checkEmptyInput() {
    var isEmpty = false,
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        course = document.getElementById("course").value;

    if (fname === "") {
        alert("PLese Input First Name");
        isEmpty = true;
    }
    else if (lname === "") {
        alert("Plese Input Last Name");
        isEmpty = true;
    }
    else if (course === "") {
        alert("Plese Input Course");
        isEmpty = true;
    }
    return isEmpty;
}

function addHtmlTableRow() {
    if (!checkEmptyInput()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            fname = document.getElementById("fname").value,
            lname = document.getElementById("lname").value,
            course = document.getElementById("course").value;

        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = course;
        selectedRowToInput();
    }
}

function selectedRowToInput() {

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            document.getElementById("fname").value = this.cells[0].innerHTML;
            document.getElementById("lname").value = this.cells[1].innerHTML;
            document.getElementById("course").value = this.cells[2].innerHTML;
        };
    }
}
selectedRowToInput();

function editHtmlTbleSelectedRow() {
    var fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        course = document.getElementById("course").value;
    if (!checkEmptyInput()) {
        table.rows[rIndex].cells[0].innerHTML = fname;
        table.rows[rIndex].cells[1].innerHTML = lname;
        table.rows[rIndex].cells[2].innerHTML = course;
    }
}

function removeSelectedRow() {
    table.deleteRow(rIndex);
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("course").value = "";
}


