const message = document.querySelector('message');
const guess = document.querySelector('input');
const button = document.querySelector('button');
let inplay = false;
let scramble ='';
let scrambled = '';

const myArray = ['Christmas', 'holiday', 'vacation', 'presents', 'family'];

button.addEventListener('click', function() {

    if(!inplay) {
        inplay = true;
        button.innerHTML = 'Guess';
        guess.classList.toggle('hidden')
        scramble= createWord();
        scrambled = randomArray(scramble.split('')).join('');
        message.innerHTML = scrambled;
    } else {
        let tempGuess = guess.value;
        if (tempGuess === scramble) {

        } else {
            
        }
    }

})

function createWord() {
    let randomIndex = Math.floor(Math.random() *
    myArray.length);
    let tempWord = myArray[randomIndex];
    let rand = randomArray(tempWord.split(''));
    return tempWord;
}

function randomArray(arr) {
for (let i = arr.length - 1;i > 0 ; i--) {
    let temp =arr[i];
    let j = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[j];
    arr[j] = temp
}
return arr;
}
