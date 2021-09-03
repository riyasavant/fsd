let expression = '0';

function clicked(value) {
    if(expression === '0')
        expression = value;
    else
        expression += value;
    document.getElementById("res").innerHTML = expression;
}

function calculate() {
    expression = String(eval(expression));
    document.getElementById("res").innerHTML = eval(expression);
}

function clr() {
    expression = '0';
    document.getElementById("res").innerHTML = expression;
}