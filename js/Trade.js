'use strict';

var x;

function buyStock () { //when buying stock in the trade window

	var amount = Number(document.getElementById("amount").value); //get amount input

	//Transaction calculations

	if (Port0.commis > 1) { //for fixed commission
		var buyPrice = (currentPrice * amount) + Port0.commis;
	}else{					//for percent commission
		var buyPrice = (currentPrice * amount) + (Port0.commis*(currentPrice * amount));
	};
	
	console.log("Buy Price: " + buyPrice)  //Total amount spent

	Port0.cash = Port0.cash - buyPrice;

	console.log("Total Cash: " + Port0.cash) //Cash left

	x = 1; //1 is a buy transaction

	//Add transaction to table
	addRow(2, (document.getElementById("autocomplete").value).toUpperCase(), (currentPrice * amount), amount);
	//Update remaining cash
	updateCash();
	
}

function sellStock () { //when selling part of a transaction from the simulator
	
	var amount = Number(document.getElementById("amount").value); //get amount input

	//Transaction calculations

	if (Port0.commis > 1) {
		var sellPrice = (currentPrice * amount) - Port0.commis;
	}else{
		var sellPrice = (currentPrice * amount) - (Port0.commis*(currentPrice * amount));
	};

	console.log("Sell Price: " + sellPrice)

	Port0.cash = Port0.cash + sellPrice;

	console.log("Total Cash: " + Port0.cash)

	//Update remaining cash
	updateCash();
} 

function sellAll () { //when selling an entire transaction from the simulator
	// body...
}

function shortSell () { //when using short sell 
	// body...
}

function updateCash () {
	
	//Update available cash
	var table = document.getElementById("sim1");
	var rowLength = table.rows.length;
	table.rows[rowLength-2].cells[1].innerHTML = "$" + Port0.cash;

}