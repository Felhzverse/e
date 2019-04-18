// JavaScript Document
function all(){
	for (var i=0; i<=20; i++){
		qB(i);
	}
}

function qB(num) {
	var a = document.getElementById("aB"+num);
	if (a.style.display === "block") {
    a.style.display = "none";
	} else {
	a.style.display = "block";
	}
}