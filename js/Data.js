'use strict';
/*(save data and functions)*/

var x1 = 0;
var Port0 = new Object();

//Create a new portfolio, used in "<!-- Set Parameters -->"
function newPort () {
	var portName = document.getElementById('portfolioName').value.trim();
	var portCash = Number(document.getElementById('cash').value).toFixed(2);
	var portCommis =Number(document.getElementById('commission').value);

	if (portName !== "" && portCash >= 0 && portCommis >= 0) {
		
		

		Port0.name = portName;
		Port0.cash = portCash;

		//Radio button selection
		if (document.getElementById('fixed').checked) {
			Port0.commis = portCommis.toFixed(2);
		} 
		if (document.getElementById('percent').checked) {
			Port0.commis = (portCommis / 100).toFixed(3);
		}

		showWindow(2);	
	}

	console.log (Port0.name);
	console.log (Port0.cash);
	console.log (Port0.commis);
	console.log (Port0.id);
}


