const cps = document.getElementById('cps');

let value = 0;

function start() {
    cps.innerHTML = ++value;
}

function reset() {
    value = 0;
    cps.innerHTML = value;
}