// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Using eval() for calculation; be cautious of security risks in a real-world application
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
