// DICHIARAZIONI VARIABILI E ELEMENTI DAL DOM
const countdownElement = document.getElementById('countdown');
const numbersList = document.getElementById('numbers-list');
const answersForm = document.getElementById('answers-form');
const messageElement = document.getElementById('message');

// CREO FUNZIONE CHE GENERA I 5 NUMERI RANDOM DA 1 A 50
function generateRandomNumbers() {
    let numbers = [];

    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * 50) + 1;
        numbers.push(randomNumber);
    }

    return numbers;
}

// FUNZIONE CHE AGGIUNGE GLI ELEMENTI LI NEL UL
function displayNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = numbers[i];
        numbersList.appendChild(listItem);
    }
}

// FUNZIONE CHE GESTISCE IL COUNTDOWN DI 30 SECONDI
function startCountdown() {
    let timeLeft = 30;

    const countdownInterval = setInterval(() => {
        countdownElement.textContent = `Tempo rimasto: ${timeLeft}s`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            hideNumbers();
        }
    }, 1000);
}