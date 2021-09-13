document.addEventListener('keydown', changeColor);

function changeColor(e) {
    switch(e.key) {
        case 'b': {
            document.getElementById('bg').innerHTML = '';
            document.getElementById('bg').style.backgroundColor = '#002366';
            break;
        }
        case 'r': {
            document.getElementById('bg').innerHTML = '';
            document.getElementById('bg').style.backgroundColor = '#B22222';
            break;
        }
        case 'g': {
            document.getElementById('bg').innerHTML = '';
            document.getElementById('bg').style.backgroundColor = '#99EDC3';
            break;
        }
        case 'p': {
            document.getElementById('bg').innerHTML = '';
            document.getElementById('bg').style.backgroundColor = 'pink';
            break;
        }
        default: {
            document.getElementById('bg').style.backgroundColor = 'white';
            document.getElementById('bg').innerHTML = '<h1 style="display: flex; justify-content: center; padding-top: 100px;">Press a valid key</h1>';
            break;
        }
    }
}