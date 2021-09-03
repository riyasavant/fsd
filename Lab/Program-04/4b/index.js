function calculateVowel() {
    let inputString = document.getElementById('string').value;
    let input = inputString.split("");
    for(let x = 0; x < input.length; x++) {
        if(input[x] == 'a' || input[x] == 'e' || input[x] == 'i' || input[x] == 'o' || input[x] == 'u'
        || input[x] == 'A' || input[x] == 'E' || input[x] == 'I' || input[x] == 'O' || input[x] == 'U') {
            document.getElementById('strResult').innerHTML = 'Position: ' + (x + 1);
            return;
        }
    }
    document.getElementById('strResult').innerHTML = 'No Vowel Present';
}

function calculateReverse() {
    let inputNumber = document.getElementById('number').value;
    document.getElementById('numResult').innerHTML = inputNumber.split("").reverse().join("");
}

function clearFirst() {
    document.getElementById('strResult').innerHTML = '';
    document.getElementById('string').value = '';
}

function clearSecond() {
    document.getElementById('numResult').innerHTML = '';
    document.getElementById('number').value = '';
}