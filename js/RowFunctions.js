'use strict';


var rowLength1 = 2;

function addRow(ind,text,value,amount) {

	if (ind == 0) { //0 for adding to Stem

		var table = document.getElementById("stem1");
		var rowLength = table.rows.length;

		var row = table.insertRow(rowLength - 1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		
		cell1.innerHTML = text;
		cell2.innerHTML = "[Change]";
		cell3.innerHTML = "[Ranking]";
		cell4.innerHTML = '<input type = "button" value = "X" onclick = "deleteRow(0, this)">';
	};

	if (ind == 1) { //1 for adding cash to Simulator
		
		var table = document.getElementById("sim1");
		var rowLength = table.rows.length;

		var row = table.insertRow(rowLength - 1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);

		cell1.innerHTML = "Cash";
		cell2.innerHTML = "$" + text;
		cell3.innerHTML = "[Change]";
		cell4.innerHTML = ""
	};

	if (ind == 2) { //2 for adding stock to Simulator
		
		var table = document.getElementById("sim1");
		var rowLength = table.rows.length;

		var row = table.insertRow(rowLength - 2);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);

		cell1.innerHTML = text;
		cell2.innerHTML = "$" + value;
		cell3.innerHTML = amount;
		cell4.innerHTML = ""

		if (x==1) {
			cell5.innerHTML = '<input type = "button" id = "hello" value = "Sell" onclick = "showWindow(5);selling(this)">'
			document.getElementById("hello").id= rowLength - 2
		}else{
			cell5.innerHTML = '<input type = "button" value = "Buy" onclick = "">'
		};

	};

	//Settings_all(); //Change text size
}

//deletes current row
function deleteRow(ind, r) {
	
	if (ind == 0) { //0 for deleting from Stem
		
		var i = r.parentNode.parentNode.rowIndex;
		document.getElementById("stem1").deleteRow(i);
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