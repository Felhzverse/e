// JavaScript Document
function redirect(){
"use strict"; 
	var url = window.location.pathname;
	var x = url.length;
	var y= x-5; 
	var z= url.substring(0,y);
	if(url.substring(0,18)==="/C:/Users/prett/e/"){
	  "fail";
	   }
	else{
		window.location.replace(z);
		"fail";

	   }
}