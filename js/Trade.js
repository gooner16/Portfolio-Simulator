'use strict';

function buyStock () {

	var amount = Number(document.getElementById("amount").value); //get amount input

	//Transaction calculations

	if (Port0.commis > 1) { //for fixed commission
		var buyPrice = (currentPrice * amount) + Port0.commis;
	}else{					//for percent commission
		var buyPrice = (currentPrice * amount) + (Port0.commission*(currentPrice * amount));
	};
	
	console.log("Buy Price: " + buyPrice)

	Port0.cash = Port0.cash - buyPrice;

	console.log("Total Cash: " + Port0.cash)

}

function sellStock () {
	
	var amount = document.getElementById("amount"); //get amount input

//Transaction calculations

	if (Port0.commis > 1) {
		sellPrice = (currentPrice * amount) - Port0.commis;
	}else{
		sellPrice = (currentPrice * amount) - (Port0.commission(currentPrice * amount));
	};

	
	port.cash = port.cash + sellPrice;

} 

function sellAll () {
	// body...
}

function shortSell () {
	// body...
}
