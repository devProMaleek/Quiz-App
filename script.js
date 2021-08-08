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

// Get all the Element, Initialize the variables

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');

// Initialize the index of the Quiz.
let currentQuiz = 0;

// Call function
loadQuiz();

// Load Quiz Function

function loadQuiz() {
  // Calling the index of the next quiz.
  const currentQuizData = quizData[currentQuiz];
  // Insert the Quiz and option to the element
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;


}

submitBtn.addEventListener('click', () => {
    currentQuiz++;
    loadQuiz();
})
