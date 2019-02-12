function searchName() {
	"use strict";
    var input, filter, section, span, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    section = document.getElementById("chars");
    span = section.getElementsByTagName("span");
    for (i = 0; i < span.length; i++) {
        a = span[i].getElementsByTagName("a")[0];
        txtValue = span.textContent || span.id;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            span[i].style.display = "";
        } else {
            span[i].style.display = "none";
        }
    }
}