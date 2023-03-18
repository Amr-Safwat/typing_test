// Array Of Words
const words = [
	'Hello',
	'Programming',
	'Code',
	'Javascript',
	'Town',
	'Country',
	'Testing',
	'Youtube',
	'Linkedin',
	'Twitter',
	'Github',
	'Leetcode',
	'Internet',
	'Python',
	'Scala',
	'Destructuring',
	'Paradigm',
	'Styling',
	'Cascade',
	'Documentation',
	'Coding',
	'Funny',
	'Working',
	'Dependencies',
	'Task',
	'Runner',
	'Roles',
	'Test',
	'Rust',
	'Playing',
];

// Setting Levels
const Levels = {
	Easy: 5,
	Normal: 3,
	Hard: 2,
};

// Default Level
let defaultLevelName = 'Easy';
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
};

// Start Game
startButton.onclick = () => {
	startButton.remove();
	input.focus();
	// Generate Word Function
	generateWords();
};

function generateWords() {
	let randomWord = words[Math.floor(Math.random() * words.length)];
	// Get Word Index
	let index = words.indexOf(randomWord);
	// Remove Word From Array
	words.splice(index, 1);
	// Empty Upcoming Words
	upComingWords.innerHTML = '';
	// Generate Words
	for (let i = 0; i < words.length; i++) {
		let div = document.createElement('div');
		let word = document.createTextNode(words[i]);
		div.appendChild(word);
		upComingWords.appendChild(div);
	}
	theWord.innerHTML = randomWord;
	// call start play function
	startPlay();
}

function startPlay() {
	timeLeft.innerHTML = defaultLevelSeconds;
	let id = setInterval(() => {
		timeLeft.innerHTML--;
		if (timeLeft.innerHTML === '0') {
			clearInterval(id);
			if (
				input.value.toLocaleLowerCase() ===
				theWord.innerHTML.toLocaleLowerCase()
			) {
				input.value = '';
				scoreGot.innerHTML++;
				// check if array is not empty
				if (words.length > 0) {
					generateWords();
				} else {
          finish.style.display = 'block';
					let span = document.createElement('span');
					let txtSpan = document.createTextNode('🥳congratulations');
					span.className = 'good';
					span.appendChild(txtSpan);
					finish.appendChild(span);
				}
			} else {
        finish.style.display = 'block';
				let span = document.createElement('span');
				let txtSpan = document.createTextNode('Game Over');
				span.className = 'bad';
				span.appendChild(txtSpan);
				finish.appendChild(span);
			}
		}
	}, 1000);
}

// console.log(Levels['Normal']);
