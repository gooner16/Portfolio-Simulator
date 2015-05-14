'use strict';

function buyStock (ind) {

	var amount = document.getElementById("amount"); //get amount input

	//Transaction calculations

	if (Port0.commis > 1) {
		var buyPrice = (currentPrice * amount) + Port0.commis;
	}else{
		var buyPrice = (currentPrice * amount) + (Port0.commission(currentPrice * amount));
	};
	
	Port0.cash = Port0.cash - buyPrice;

	console.log(Port0.cash)

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
