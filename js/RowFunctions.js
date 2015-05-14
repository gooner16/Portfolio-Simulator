'use strict';

var rowLength0 = 2;
var rowLength;

function addRow(ind,name) {

	if (ind == 0) { //0 for adding to Stem
		var table = document.getElementById("stem1");
		var row = table.insertRow(rowLength0 - 1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		
		rowLength0++; //Next row will be added below this one

		cell1.innerHTML = name;
		cell2.innerHTML = "[Change]";
		cell3.innerHTML = "[Ranking]";
		cell4.innerHTML = '<input type = "button" value = "X" onclick = "deleteRow(0, this)">';
	};

	if (ind == 1) { //1 for adding to Simulator
		var table = document.getElementById("sim1");
		var row = table.insertRow(rowLength - 1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		
		rowLength++; //Next row will be added below this one

		cell1.innerHTML = '<select id = "selectBox0" onchange = "Swagger(this, this.id)">';
		cell2.innerHTML = "<p id = 'label0'>";
		cell3.innerHTML = "[Change]";
		cell4.innerHTML = ""
	};

	//Settings_all(); //Change text size
}

//deletes current row
function deleteRow(ind, r) {
	
	if (ind == 0) { //0 for deleting from Stem
		
		var i = r.parentNode.parentNode.rowIndex;
		document.getElementById("stem1").deleteRow(i);
		rowLength0 -- ;
	}
	if (ind == 1) { //1 for adding to Simulator
		var table = document.getElementById("sim1");
		var row = table.insertRow(rowLength - 1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		
		rowLength++; //Next row will be added below this one

		cell1.innerHTML = '<select id = "selectBox0" onchange = "Swagger(this, this.id)">';
		cell2.innerHTML = "<p id = 'label0'>";
		cell3.innerHTML = "[Change]";
		cell4.innerHTML = '<input type = "button" value = "X" onclick = "deleteRow(this)">';
	}
}