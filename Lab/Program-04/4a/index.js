let growInterval = setInterval(textGrow, 1000);
let shrinkInterval;
let fontSize = 5;
const element = document.getElementById('result');

function textGrow() {
    element.innerHTML = 'TEXT-GROWING';
    element.setAttribute('style', "font-size: " + fontSize + "px; color: red;");
    fontSize += 5;
    if(fontSize >= 50) {
        clearInterval(growInterval);
        shrinkInterval = setInterval(textShrink, 1000);
    }
}

function textShrink() {
    element.innerHTML = 'TEXT-SHRINKING';
    element.setAttribute('style', "font-size: " + fontSize + "px; color: blue;");
    fontSize -= 5;
    if(fontSize <= 5) {
        clearInterval(shrinkInterval);
    }
}