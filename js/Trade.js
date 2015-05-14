'use strict';

function buyStock (ind) {

	var amount = document.getElementById("amount"); //get amount input
	var portId = "Port" + ind						//get current porfolio id
	var port = document.getElementById(portId)

	//Transaction calculations

	if (Port0.commis > 1) {
		buyPrice = (currentPrice * amount) + Port0.commis;
	}else{
		buyPrice = (currentPrice * amount) + (Port0.commission(currentPrice * amount));
	};
	
	port.cash = port.cash - buyPrice;

}

function sellStock (ind) {
	
	var amount = document.getElementById("amount"); //get amount input
	var portId = "Port" + ind						//get current portfolio id
	var port = document.getElementById(portId)

//Transaction calculations

	if (Port0.commis > 1) {
		sellPrice = (currentPrice * amount) - Port0.commis;
	}else{
		sellPrice = (currentPrice * amount) - (Port0.commission(currentPrice * amount));
	};

	
	port.cash = port.cash + sellPrice;

} 
