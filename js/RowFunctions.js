'use strict';

var rowLength = 3;

function addRow(ind) {

	if (ind == 0) { //0 for adding to Stem
		var table = document.getElementById("stem1");
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
	};

	if (ind == 1) { //1 for adding to Sim
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
	};

	//Settings_all(); //Change text size
}

//deletes current row
function deleteRow(r) {
	var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("sim1").deleteRow(i);
	rowLength -- ;

	Settings_rowColor(); //Change color of rows
}

//clears all added rows
function deleteRowAll() {
	for (var i = 0; i < rowLength - 3; i++) {
		document.getElementById("sim1").deleteRow(2);
	};

	rowLength = 3;
}