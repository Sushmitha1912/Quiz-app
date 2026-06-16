const questions = [
  {
    question: "What does MERN stand for?",
    options: [
      "MySQL, Express, React, Node",
      "MongoDB, Express, React, Node",
      "MongoDB, Ember, Redux, Node",
      "MySQL, Ember, React, Next"
    ],
    answer: 1
  },
  {
    question: "Which database does the MERN stack use?",
    options: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    answer: 2
  },
  {
    question: "In MongoDB, data is stored in which format?",
    options: ["Tables & Rows", "XML Documents", "BSON (JSON-like) Documents", "CSV Files"],
    answer: 2
  },
  {
    question: "What is Express.js used for in the MERN stack?",
    options: [
      "Frontend styling",
      "Building the backend/server and APIs",
      "Managing the database",
      "State management"
    ],
    answer: 1
  },
  {
    question: "Which hook is used to manage state in React?",
    options: ["useEffect", "useContext", "useRef", "useState"],
    answer: 3
  },
  {
    question: "What does the useEffect hook in React do?",
    options: [
      "Creates a new component",
      "Handles side effects like API calls",
      "Manages global state",
      "Styles a component"
    ],
    answer: 1
  },
  {
    question: "Which Node.js package manager is most commonly used?",
    options: ["yarn", "pip", "npm", "brew"],
    answer: 2
  },
  {
    question: "What is mongoose in the MERN stack?",
    options: [
      "A React UI library",
      "A Node.js testing tool",
      "An ODM library to interact with MongoDB",
      "An Express middleware for authentication"
    ],
    answer: 2
  },
  {
    question: "Which HTTP method is used to UPDATE data in a REST API?",
    options: ["GET", "POST", "DELETE", "PUT"],
    answer: 3
  },
  {
    question: "What does 'props' mean in React?",
    options: [
      "A way to store local component state",
      "Properties passed from parent to child component",
      "A lifecycle method",
      "A CSS styling technique"
    ],
    answer: 1
  }
];

let currentIndex = 0;
let score = 0;
let answered = false;

const startScreen  = document.getElementById('startScreen');
const quizScreen   = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

document.getElementById('startBtn').addEventListener('click', startQuiz);
document.getElementById('nextBtn').addEventListener('click', nextQuestion);
document.getElementById('restartBtn').addEventListener('click', restartQuiz);

function startQuiz() {
  currentIndex = 0;
  score = 0;
  startScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  answered = false;
  const q = questions[currentIndex];
  const total = questions.length;

  document.getElementById('progressFill').style.width = `${(currentIndex / total) * 100}%`;
  document.getElementById('questionCount').textContent = `Question ${currentIndex + 1} of ${total}`; 
  document.getElementById('questionText').textContent = q.question;
  document.getElementById('nextBtn').classList.add('hidden');

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = q.options.map((opt, i) => `
    <button class="option-btn" data-index="${i}" onclick="selectAnswer(${i})">${opt}</button>
  `).join('');
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;

  const q = questions[currentIndex];
  const buttons = document.querySelectorAll('.option-btn');

  buttons.forEach(btn => btn.disabled = true);
  buttons[q.answer].classList.add('correct');

  if (index === q.answer) {
    score++;
  } else {
    buttons[index].classList.add('wrong');
  }

  document.getElementById('nextBtn').classList.remove('hidden');
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  document.getElementById('progressFill').style.width = '100%';

  const pct = (score / questions.length) * 100;
  let emoji, title, msg;

  if (pct === 100) {
    emoji = '🏆'; title = 'Perfect Score!'; msg = 'Outstanding! You got every question right!';
  } else if (pct >= 60) {
    emoji = '🎉'; title = 'Great Job!'; msg = 'Good work! Keep it up!';
  } else {
    emoji = '📚'; title = 'Keep Practicing!'; msg = 'Don\'t give up — try again to improve!';
  }

  document.getElementById('resultEmoji').textContent = emoji;
  document.getElementById('resultTitle').textContent = title;
  document.getElementById('resultScore').textContent = `${score} / ${questions.length}`;
  document.getElementById('resultMsg').textContent = msg;
}

function restartQuiz() {
  resultScreen.classList.add('hidden');
  startQuiz();
}
