const message = document.querySelector('.message');
const guess = document.querySelector('input');
const button = document.querySelector('button');
let inplay = false;
let scramble = '';
let scrambled = '';
let score = 0;

const myArray = ['Christmas', 'holiday', 'vacation', 'presents', 'family'];
button.addEventListener('click', function() {
  console.log('clicked');
  if (!inplay) {
    inplay = true;
    score = 0;
    button.innerHTML = 'Guess';
    guess.classList.toggle('hidden');
    scramble = createWord();
    scrambled = randomArray(scramble.split('')).join('');
    rescrambled = randomArray(scrambled.split('')).join('');
    message.innerHTML = scrambled;
  } else {
    let tempGuess = guess.value;
    score++;
    if (tempGuess === scramble) {
      inplay = false;
      message.innerHTML = 'Correct it was ' + '"' + scramble + '"';
      button.innerHTML = 'Start';
      guess.value = '';
      guess.classList.toggle('hidden');
    } else {
      message.innerHTML = 'Wrong, try again - ' + rescrambled;
      guess.value = '';
    }
  }
});

function createWord() {
  let randomIndex = Math.floor(Math.random() * myArray.length);
  let tempWord = myArray[randomIndex];
  return tempWord;
}

function randomArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
