const questions = [
  { question: "What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: 0 },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: 2 },
  { question: "Who wrote the National Anthem of India?", options: ["Rabindranath Tagore", "Mahatma Gandhi", "Bankim Chandra Chatterjee", "Subhash Chandra Bose"], answer: 0 },
  { question: "Which is the largest ocean in the world?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], answer: 1 },
  { question: "What is the chemical symbol for water?", options: ["H2", "H2O", "O2", "HO2"], answer: 1 },
  { question: "Who was the first President of India?", options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel", "Indira Gandhi"], answer: 0 },
  { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
  { question: "Which country is known as the Land of Rising Sun?", options: ["China", "Japan", "Korea", "Thailand"], answer: 1 },
  { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], answer: 1 },
  { question: "Which is the fastest land animal?", options: ["Lion", "Tiger", "Cheetah", "Leopard"], answer: 2 },
  { question: "Who invented the telephone?", options: ["Graham Bell", "Edison", "Newton", "Einstein"], answer: 0 },
  { question: "Which planet is closest to the Sun?", options: ["Venus", "Earth", "Mercury", "Mars"], answer: 2 },
  { question: "What is the national flower of India?", options: ["Rose", "Lily", "Lotus", "Marigold"], answer: 2 },
  { question: "Which organ purifies blood in the human body?", options: ["Heart", "Kidney", "Liver", "Lungs"], answer: 1 },
  { question: "Which festival is known as the Festival of Lights?", options: ["Holi", "Diwali", "Eid", "Christmas"], answer: 1 }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;

  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`opt${i+1}`);
    btn.textContent = q.options[i];
    btn.style.backgroundColor = "#f2f2f2";
  }
  selectedOption = null;
}

function selectOption(index) {
  selectedOption = index;
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`opt${i+1}`);
    btn.style.backgroundColor = i === index ? "#6a11cb" : "#f2f2f2";
    btn.style.color = i === index ? "#fff" : "#000";
  }
}

function nextQuestion() {
  if (selectedOption === null) {
    alert("⚠️ Please select an option before proceeding!");
    return;
  }

  if (selectedOption === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-box").classList.add("hide");
  document.getElementById("result-box").classList.remove("hide");
  document.getElementById("score").textContent = `You scored ${score} out of ${questions.length} ✅`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result-box").classList.add("hide");
  document.getElementById("quiz-box").classList.remove("hide");
  showQuestion();
}

showQuestion();
