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
