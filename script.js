// Defining the the  Quiz data.
const quizData = [
  {
    question: "What is the most used programming language in 2020?",
    a: "Java",
    b: "Python",
    c: "C",
    d: "JavaScript",
    correct: "d",
  },
  {
    question:
      'Which of the following is not one of the early "protocols", or ways to use the Internet ?',
    a: "Blogging",
    b: "Telnet",
    c: "Gopher",
    d: "File Transfer Protocol (FTP)",
    correct: "a",
  },
  {
    question: "Who invented flexible photographic film",
    a: "Leonardo da Vinci",
    b: "Linda Eastman",
    c: "Louis Daguerre",
    d: "George Eastman",
    correct: "d",
  },
  {
    question: "Which of this is a file format for digital images",
    a: "CIA",
    b: "JPG",
    c: "ICBM",
    d: "IBM",
    correct: "b",
  },
];

// Get the element of the answer.
const answerEls = document.querySelectorAll(".answers");
// Get all the Element, Initialize the variables
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


// Initialize the index of the Quiz.
let currentQuiz = 0;
// Initialize the value of the score
let score = 0;

// Call function
loadQuiz();

// Load Quiz Function

function loadQuiz() {
  // Call the deselect Function.
  deselectAnswers();
  // Calling the index of the next quiz.
  const currentQuizData = quizData[currentQuiz];
  // Insert the Quiz and option to the element
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// Function to get the clicked option.
function getSelected() {
  // Initialize the value of answer.
  let answer = undefined;
  // Get the id of the selected option
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// Function to deselect the option selected.
function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // Check to see the answer
  const answer = getSelected();

  // Check to see if an answer id checked.
  if (answer) {
    // Increase score if the answer is correct
    if (answer === quizData[currentQuiz].correct) {
      score += 10;
    }
    // Increase the index of the quiz data, so as to load the next question.
    currentQuiz++;

    // Declare the percentage score variable.
    let percentageScore = (score / 10 / quizData.length) * 100;
    // Load the next question
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      
      quiz.innerHTML = `<h2>You answered correctly ${score / 10}/${
        quizData.length} questions. Your percentage score is ${percentageScore}% </h2> <button onclick="location.reload()">Retake the Quiz</button>`;
      
      if (percentageScore >= 70) {
        document.body.style.backgroundImage = "url('images/Hooray.gif')";
      }
    }
  }
});
