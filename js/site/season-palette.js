var month;
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var d = new Date();
var m = d.getMonth(); 
var n = month[d.getMonth()];
function seasonLoad(){
"use strict"; 

if(m<=2){
Winter(); 
   }
if(m<=5){
Spring(); 
   }
if(m<=8){		
Summer(); 
   }
if(m<=11){ 
Fall(); 
   }
	
function Winter(){
window.alert("Winter");
document.getElementByClass("trees").src = "images/WinterLogoTree.png";
}
function Spring(){
window.alert("Spring");
document.getElementByClass("trees").src = "images/SpringLogoTree.png";
}
function Summer(){
window.alert("Summer");
document.getElementByClass("trees").src = "images/SummerLogoTree.png";
}
function Fall(){
window.alert("Fall");
document.getElementByClass("trees").src = "images/FallLogoTree.png";
}
	

}
