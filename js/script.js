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

// FUNZIONE CHE NASCONDE I NUMERI E MOSTRA IL FORM
function hideNumbers() {
    numbersList.innerHTML = '';
    answersForm.classList.remove('d-none');
}

// FUNZIONE CHE CONFRONTA LE RISPOSTE DELL'UTENTE CON I NUMERI CORRETTI
function checkAnswers(correctNumbers, userAnswers) {
    let correctCount = 0;
    let correctAnswers = [];

    for (let i = 0; i < userAnswers.length; i++) {
        if (correctNumbers.includes(parseInt(userAnswers[i]))) {
            correctCount++;
            correctAnswers.push(userAnswers[i]);
        }
    }

    if (correctCount > 0) {
        messageElement.textContent = `Hai indovinato ${correctCount} numeri! I numeri corretti erano: ${correctAnswers.join(', ')}`;
    } else {
        messageElement.textContent = 'Non hai indovinato nessun numero, riprova!';
    }
}

// FUNZIONE CHE GESTISCE L'INVIO DEL FORM E VERIFICA LE RISPOSTE
answersForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const userAnswers = [
        answersForm.querySelectorAll('input')[0].value,
        answersForm.querySelectorAll('input')[1].value,
        answersForm.querySelectorAll('input')[2].value,
        answersForm.querySelectorAll('input')[3].value,
        answersForm.querySelectorAll('input')[4].value
    ];

    checkAnswers(numbers, userAnswers);
});

// INIZIALIZZAZIONE DEL GIOCO
const numbers = generateRandomNumbers();
displayNumbers(numbers);
startCountdown();