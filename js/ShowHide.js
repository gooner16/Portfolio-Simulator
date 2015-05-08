function hideStem() {
    var hide = document.getElementById('Stem');
    var show = document.getElementById('Parameters');
        hide.style.display = 'none';
        show.style.display = 'block';
};

function showSim() {
	var hide = document.getElementById('Parameters');
    var show = document.getElementById('Simulator');
        hide.style.display = 'none';
        show.style.display = 'block';
};

function showTrade() {
	var hide = document.getElementById('Simulator');
    var show = document.getElementById('Trade');
        hide.style.display = 'none';
        show.style.display = 'block';
};

function hideTrade() {
	var hide = document.getElementById('Trade');
    var show = document.getElementById('Simulator');
        hide.style.display = 'none';
        show.style.display = 'block';
};

function showPortfolios() {
	var hide = document.getElementById('Simulator');
    var show = document.getElementById('Stem');
        hide.style.display = 'none';
        show.style.display = 'block';
};

function showMarket() {
	var hide = document.getElementById('Simulator');
    var show = document.getElementById('Market');
        hide.style.display = 'none';
        show.style.display = 'block';
};

function hideMarket() {
	var hide = document.getElementById('Market');
    var show = document.getElementById('Simulator');
        hide.style.display = 'none';
        show.style.display = 'block';
};

