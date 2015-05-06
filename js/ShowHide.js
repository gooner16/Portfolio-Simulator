'use strict'; 
var divStem = document.getElementById('Stem');
var divPara = document.getElementById('Parameters');
var divSim = document.getElementById('Simulator');

function setPara() {
	var divStem = document.getElementById('Stem');
	var divPara = document.getElementById('Parameters');
		
	divStem.style.display = 'none';
	divPara.style.display = 'block';
}

function showSim() {
	divSim.style.display = 'block';
}
