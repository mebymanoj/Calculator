let display = document.getElementById('display');
let currentInput = '';

function appendCharacter(char) {
    if (currentInput === '0' && char !== '.') {
        currentInput = '';
    }
    currentInput += char;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    display.textContent = currentInput;
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0';
    }
    display.textContent = currentInput;
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}