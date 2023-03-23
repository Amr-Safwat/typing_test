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

// call inputs radio
let easy = document.getElementById('easy');
let normal = document.getElementById('normal');
let hard = document.getElementById('hard');
let box = document.querySelector('.checkbox');

// Default Level
let defaultLevelName = 'Easy';
let defaultLevelSeconds = Levels[defaultLevelName];

easy.onclick = () => {
	if (easy.checked === true) {
		// Default Level
		defaultLevelName = easy.value;
		defaultLevelSeconds = Levels[defaultLevelName];
		levelName.innerHTML = defaultLevelName;
		seconds.innerHTML = defaultLevelSeconds;
		timeLeft.innerHTML = defaultLevelSeconds;
	}
};
normal.onclick = () => {
	if (normal.checked === true) {
		// Default Level
		defaultLevelName = normal.value;
		defaultLevelSeconds = Levels[defaultLevelName];
		console.log(defaultLevelSeconds);
		levelName.innerHTML = defaultLevelName;
		seconds.innerHTML = defaultLevelSeconds;
		timeLeft.innerHTML = defaultLevelSeconds;
	}
};
hard.onclick = () => {
	if (hard.checked === true) {
		// Default Level
		defaultLevelName = hard.value;
		defaultLevelSeconds = Levels[defaultLevelName];
		levelName.innerHTML = defaultLevelName;
		seconds.innerHTML = defaultLevelSeconds;
		timeLeft.innerHTML = defaultLevelSeconds;
	}
};

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

let btn = document.querySelector('.icon');

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
	box.remove();
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
	showWords();
	theWord.innerHTML = randomWord;
	// call start play function
	startPlay();
}

function showWords() {
	for (let i = 0; i < words.length; i++) {
		let div = document.createElement('div');
		let word = document.createTextNode(words[i]);
		div.appendChild(word);
		upComingWords.appendChild(div);
	}
}
timeLeft.innerHTML = defaultLevelSeconds;

function startPlay() {
		timeLeft.innerHTML = scoreGot.innerHTML === '0'?defaultLevelSeconds+3:defaultLevelSeconds;
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
					showGood();
				}
			} else {
				showBad();
			}
		}
	}, 1000);

}

function showGood() {
	finish.style.display = 'block';
	let span = document.createElement('span');
	let btn = document.createElement('i');
	let txtSpan = document.createTextNode('Good🥳');
	span.className = 'good';
	btn.className = 'fa-solid fa-rotate-right icon';
	span.appendChild(txtSpan);
	finish.appendChild(span);
	finish.appendChild(btn);
	btn.onclick = () => {
		location.reload();
	}
}

function showBad() {
	finish.style.display = 'block';
	let span = document.createElement('span');
	let btn = document.createElement('i');
	let txtSpan = document.createTextNode('Game Over');
	span.className = 'bad';
		btn.className = 'fa-solid fa-rotate-right icon';
	span.appendChild(txtSpan);
	finish.appendChild(span);
	finish.appendChild(btn);
	btn.onclick = () => {
		location.reload();
	}
}

