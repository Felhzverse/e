// JavaScript Document
//COMIC: DON'T TAKE IT SERIOUSLY 

// Pages array (include links)
var pageNumber=[];
pageNumber[0]= "/1/index.html";
/* pageNumber[1]= "/1/02.html";
pageNumber[2]= "/1/03.html";
pageNumber[3]= "/1/04.html";
pageNumber[4]= "/1/05.html";
pageNumber[5]= "/1/06.html";
pageNumber[6]= "/1/07.html";
pageNumber[7]= "/1/08.html";
pageNumber[8]= "/1/09.html";
pageNumber[9]= "/1/10.html";
pageNumber[10]= "/1/11.html";
*/
var i= (pageNumber.length-1);
var thisPage=thisPage-1; 

//ENABLE BUTTONS
document.getElementById("first").disabled = false;
document.getElementById("previous").disabled = false;
document.getElementById("next").disabled = false;
document.getElementById("latest").disabled = false;

//HOME PAGE
//first
function homeFirst(){
"use strict"; 
	   	   document.location="./"+pageNumber[0]; 
}
//latest
function homeLatest(){
"use strict";
	   	   document.location="./"+pageNumber[i]; 
}

//first button
function first(){
"use strict";
	   	   document.location=pageNumber[0]; 
}

//previous button
function previous(){
"use strict"; 
//for loop
thisPage=thisPage-1; 
if (thisPage <0) { 
window.alert("Welcome back to the start!"); 
} 
else{ 
document.location=pageNumber[thisPage]; 
} }

//middle button
function middle(){
"use strict"; 
//for loop
window.alert("honk honk"); }

//next button
function next(){
"use strict"; 
//for loop
thisPage=thisPage+1;
if (thisPage > i) { 
window.alert("All caught up!"); 
} 
else{ 
document.location=pageNumber[thisPage]; 
} }

//latest button
function latest(){
"use strict"; 
	   	   document.location=pageNumber[i]; 
}//EXECUTE
document.getElementById("first").onclick = function() {
"use strict"; 
	first();};
document.getElementById("previous").onclick = function() {
"use strict"; 
	previous();};
document.getElementById("middle").onclick = function() {
"use strict"; 
	middle();};
document.getElementById("next").onclick = function() {
"use strict"; 
	next();};
document.getElementById("latest").onclick = function() {
"use strict"; 
	latest();};

//ARCHIVE
function archiveOne(){
"use strict";
	window.alert("./"+"dtis"+pageNumber[1]);
	   	   document.location="./"+"dtis"+pageNumber[1]; 
}




