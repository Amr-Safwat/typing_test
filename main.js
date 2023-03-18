// Array Of Words
const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing"
];

// Setting Levels
const Levels = {
  "Easy": 5,
  "Normal": 3,
  "Hard": 2,
}

// Default Level
let defaultLevelName = 'Normal';
let defaultLevelSeconds = Levels[defaultLevelName];

// catch Selectors
let startButton = document.querySelector('.start');
let levelName = document.querySelector('.message .lvl');
let seconds = document.querySelector('.message .seconds');
let theWord = document.querySelector('.the-word');
let upComingWords = document.querySelector('.upcoming-words');
let input = document.querySelector('.input');
let timeLeft = document.querySelector('.time span');
let scoreGot = document.querySelector('.score .got');
let scoreTotal = document.querySelector('.score .total');
let finish = document.querySelector('.finish');

// Setting Levels + Seconds + Score
levelName.innerHTML = defaultLevelName;
seconds.innerHTML = defaultLevelSeconds;
timeLeft.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// Disable Paste Event
input.onpaste = function () {
  return false;
}

// Start Game
startButton.onclick = () => {
  startButton.remove();
  input.focus()
  // Generate Word Function
  generateWords();
}

function generateWords() {
  let randomWord = words[Math.floor(Math.random()*words.length)];
  theWord.innerHTML = randomWord;
  console.log(randomWord);
}
// console.log(Levels['Normal']);

