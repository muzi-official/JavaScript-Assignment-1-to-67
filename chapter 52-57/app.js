//Task 1 image

var imageArray = ["images/others/1.jpg", "images/others/2.jpg", "images/others/3.jpg", "images/others/5.jpg",];
var display_images= document.getElementById("display_image");
for(var i=0 ; i<imageArray.length ; i++){
    var image= document.createElement("img");
    var image_src=image.setAttribute("src" , imageArray[i]);
    var image_src=image.setAttribute("class" , "imgclass");
    var image_src=image.setAttribute("onclick" , "imagesfun(this)");
    display_images.appendChild(image);
}
function imagesfun(e){
    var model=document.getElementById("model");
    var model_image=document.getElementById("modelImage");
    model_image.src = e.src ;
    model.style.display="inline" ;

}
var model=document.getElementById("model");
var modelClass= model.setAttribute("class" , "model_open");
model.style.display="none" ;

var close_btn = document.getElementById("close");
var close_class = close_btn.setAttribute("class" , "model_close");
function close_model(){
    model.style.display = "none"; 
}

//Task 2 paragraph size control
var fontSize = 1;
function zoomIn() {
	fontSize += 0.1;
	document.body.style.fontSize = fontSize + "em";
}
function zoomOut() {
	fontSize -= 0.1;
	document.body.style.fontSize = fontSize + "em";
}

