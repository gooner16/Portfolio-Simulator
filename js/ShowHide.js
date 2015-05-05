'use strict'; 

function hideStem() {
	var divStem = document.getElementById('Stem');
	var divPara = document.getElementById('Parameters');
	if (divStem.style.display == 'block') {
		divStem.style.display = 'none';
		divPara.style.display = 'block';
	}
	else {
		divStem.style.display = 'block';
	}
}

function showSim() {
	var divPara = document.getElementById('Simulator');
		divPara.style.display = 'block';
}
