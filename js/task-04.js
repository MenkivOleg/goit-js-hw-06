const counterValue = document.getElementById('value')
const decrementButton = document.querySelector('button[data-action="decrement"]')
const incrementButton = document.querySelector('button[data-action="increment"]')

let value = 0;

function updateCounterValue() {
    counterValue.textContent = value;
}

function incrementCounter() {
    value += 1;
    updateCounterValue();
}

function decrementCounter() {
    value -= 1;
    updateCounterValue();
}

incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);