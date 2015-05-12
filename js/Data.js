'use strict';
/*(save data and functions)*/

var x1 = 0

//Create a new portfolio, used in "<!-- Set Parameters -->"
function newPort () {
	var portName = document.getElementById("portfolioName").value.trim();
	var portCash = Number(document.getElementById('cash').value);
	var portCommis =Number(document.getElementById('commission').value);

	console.log(portName);
	console.log(portCash);
	console.log(portCommis);

	if (portName !== "" && portCash >= 0 && portCommis >= 0) {

		var Port = new Object();
		
		Port.name = portName;
		Port.cash = portCash;
		Port.commis = portCommis;

		
		showWindow(2);	
	}
	console.log (Port.name);
	console.log (Port.cash);
	console.log (Port.commis);
}


