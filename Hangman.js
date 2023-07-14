let fruits = [
    "apple",
    "pinapple",
    "banana",
    "watermelon",
    "orange",
    "mango",
    "papaya"
]
let answer = '';
let maxWrong = 7;
let mistakes = 0;
let guessed = [];
let wordStatus = null;
function randomWord(){
    answer = fruits[Math.floor(Math.random()*fruits.length)];
}
function generateButtons(){
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
    <button
    class="btn btn-info btn-primary m-2"
    id='`+ letter +`'
    onclick="handleGuess('` + letter + `')"
    >
    ` + letter + `
    </button>
    `).join('');
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}
function handleGuess(chosenLetter){
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if (answer.indexOf(chosenLetter) >= 0){
        guessedWord();
        checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1){
        mistakes++;
        updateMistakes();
        checkIfGameLost();
        updateLetters();
    }
}
function updateLetters(){
    document.getElementById('canceller').innerHTML = + mistake + letter++ 
}
function checkIfGameWon(){
    if (wordStatus === answer){
        document.getElementById('keyboard').innerHTML = 'You Won!!!';
    }
}
function checkIfGameLost(){
    if(mistakes === maxWrong){
        document.getElementById('wordSpotlight').innerHTML = 'The answer is:' +answer;
        document.getElementById('keyboard').innerHTML = 'You Lost!!!';
    }
}
function updateMistakes(){
    document.getElementById('mistakes').innerHTML = mistakes;
}
function reset(){
    mistakes = 0;
    guessed = [];
    
    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
}
function guessedWord(){
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : "_ ")).join('');
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}
document.getElementById('maxWrong').innerHTML = maxWrong;
randomWord();
generateButtons();
guessedWord();