let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '';
}

function appendToDisplay(value) {
    display.innerText += value;
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}
