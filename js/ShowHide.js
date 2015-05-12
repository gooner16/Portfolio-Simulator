'use strict'; 
var index = -1

function showWindow(index) {
	//Refer to different windows (divs)
	var divStem = document.getElementById('Stem');
	var divPara = document.getElementById('Parameters');
	var divSim = document.getElementById('Simulator');
	var divPopTrade = document.getElementById('Trade');
	var divPopMarket = document.getElementById('Market');

	//Hide every window first
	divStem.style.display = 'none';
	divPara.style.display = 'none';
	divSim.style.display = 'none';
	divPopTrade.style.display = 'none';
	divPopMarket.style.display = 'none';

	//Show specific window
	if (index == 0) {
		divStem.style.display = 'block';
	};
	if (index == 1) {
		divPara.style.display = 'block';
	};
	if (index == 2) {
		divSim.style.display = 'block';
	};
	if (index == 3) {
		divPopTrade.style.display = 'block';
	};
	if (index == 4) {
		divPopMarket.style.display = 'block';
	};
}

function showWindow(index) {
	//Refer to different windows (divs)
	var divStem = document.getElementById('Stem');
	var divPara = document.getElementById('Parameters');
	var divSim = document.getElementById('Simulator');
	var divPopTrade = document.getElementById('Trade');
	var divPopMarket = document.getElementById('Market');

	//Hide every window first
	divStem.style.display = 'none';
	divPara.style.display = 'none';
	divSim.style.display = 'none';
	divPopTrade.style.display = 'none';
	divPopMarket.style.display = 'none';

	//Show specific window
	if (index == 0) {
		divStem.style.display = 'block';
	};
	if (index == 1) {
		divPara.style.display = 'block';
	};
	if (index == 2) {
		divSim.style.display = 'block';
	};
	if (index == 3) {
		divPopTrade.style.display = 'block';
	};
	if (index == 4) {
		divPopMarket.style.display = 'block';
	};

}
