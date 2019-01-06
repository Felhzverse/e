// JavaScript Document
//COMIC: THE DIFFERENCES BETWEEN US

// Pages array (include links)
var pageNumber=[];
pageNumber[0]= "chapter/index.html";
/* pageNumber[1]= "chapter/02.html";
pageNumber[2]= "chapter/03.html";
pageNumber[3]= "chapter/04.html";
pageNumber[4]= "chapter/05.html";
pageNumber[5]= "chapter/06.html";
pageNumber[6]= "chapter/07.html";
pageNumber[7]= "chapter/08.html";
pageNumber[8]= "chapter/09.html";
pageNumber[9]= "chapter/10.html";
pageNumber[10]= "chapter/11.html";
*/

//actual code
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
}

//EXECUTE
document.getElementById("first").onclick = function() {
"use strict"; 
	first();};
document.getElementById("previous").onclick = function() {
"use strict"; 
	previous();};
document.getElementById("next").onclick = function() {
"use strict"; 
	next();};
document.getElementById("latest").onclick = function() {
"use strict"; 
	latest();};

//ARCHIVE
function archiveOne(){
"use strict";
	window.alert("./"+pageNumber[1]);
	   	   document.location="./"+pageNumber[1]; 
}