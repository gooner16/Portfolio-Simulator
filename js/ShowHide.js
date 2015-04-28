function hideStem() {
    var hide = document.getElementById('Stem');
    var show = document.getElementById('Parameters');
    if (hide.style.display !== 'none') {
        hide.style.display = 'none';
        show.style.display = 'block';
    }
    else {
        hide.style.display = 'block';
    }
};

function showSim() {
    var show = document.getElementById('Simulator');
        show.style.display = 'block';

};