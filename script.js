// Defining the the  Quiz data.
const quizData = [
  [
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
    {
      question: "What does fiber optic cable resemble, in terms of size?",
      a: "Pipeline",
      b: "Bamboo",
      c: "Telephone wire",
      d: "Human hair",
      correct: "d",
    },
    {
      question:
        "To which of these devices is the cellular telephone most closely related?",
      a: "Telegraph",
      b: "Radio",
      c: "Light bulb",
      d: "Telescope",
      correct: "b",
    },
    {
      question: "When was the DVD introduced?",
      a: "1970",
      b: "1990",
      c: "2000",
      d: "1995",
      correct: "d",
    },
    {
      question:
        "Who was responsible for some of the earliest, widely influential development of military rockets?",
      a: "Elon Musk",
      b: "Hermann Oberth",
      c: "William Congreve",
      d: " Robert Hutchings Goddard",
      correct: "c",
    },
    {
      question:
        "What is the oldest still-floating commissioned warship in the world?",
      a: "HMS Victory",
      b: "HMS Warrior",
      c: "USS Missouri",
      d: "USS Constitution",
      correct: "d",
    },
    {
      question: "What was given the nickname “Stalin Organ”?",
      a: "Katyusha rocket launcher",
      b: "Red army radio",
      c: "Myasishchev M-4",
      d: "first Soviet hydrogen bomb",
      correct: "a"
    },
  ],
  [
    {
      question: "The first Buddhist Council was held in the reign of ?",
      a: "Ajatashatru",
      b: "Ashoka",
      c: "Kanishka",
      d: "Bimbisara",
      correct: "a",
    },
    {
      question: "Which metal was first used by the Indus people ?",
      a: "Gold",
      b: "Silver",
      c: "Tin",
      d: "Carolinian",
      correct: "b",
    },
    {
      question:
        "Which of the following regions did not form the part of Ashoka's empire ?",
      a: "Taxila",
      b: "Kanauj",
      c: "Kashmir",
      d: "Madras",
      correct: "d",
    },
    {
      question: "The founder of the first Afghan rule in India was ?",
      a: "Sikander Lodi",
      b: "Sher Shan Suri",
      c: "Bahlul Lodi",
      d: "Ibrahim Lodi",
      correct: "d",
    },
    {
      question: "The Indus Valley houses were built of ?",
      a: "Bamboos",
      b: "Wood",
      c: "Bricks",
      d: "Stone",
      correct: "c",
    },
    {
      question: "Entomology is the science that studies ?",
      a: "Behaviour of human beings",
      b: "Insects",
      c: "The origin and history of technical and scientific terms",
      d: "The formation of rocks",
      correct: "b",
    },
    {
      question: "Garampani sanctuary is located at ?",
      a: "Junagarh, Gujarat",
      b: "Diphu, Assam",
      c: "Kohima, Nagaland",
      d: "Gangtok, Sikkim",
      correct: "b",
    },
    {
      question:
        "For which of the following disciplines is Nobel Prize awarded?",
      a: "Physics and Chemistry",
      b: "Physiology or Medicine",
      c: "Literature, Peace and Economics",
      d: "All of the above",
      correct: "d",
    },
    {
      question:
        "First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in",
      a: "1967",
      b: "1968",
      c: "1958",
      d: "1922",
      correct: "a",
    },
    {
      question: "Golf player Vijay Singh belongs to which country?",
      a: "USA",
      b: "Fiji",
      c: "India",
      d: "UK",
      correct: "b",
    },
  ],
];

// Initialize global variables.
const techEl = document.getElementById("technology");
const genEl = document.getElementById("general");
const sciEl = document.getElementById("science");
const progEl = document.getElementById("programming");
const elecEl = document.getElementById("electronics");
const answerEls = document.querySelectorAll(".answers");
const quiz = document.querySelector("#quiz");
const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");
let currentQuiz = 0;
let score = 0;

// Initialize the category quiz variable. 
let categoryQuiz;

// Function to set the index of the category.
function initVariables(val) {
  categoryQuiz = val;
}

// Redirect function
const redirectToQuiz = function (category) {
  window.location = `quiz.html?${category}`;
};

// Initialize quiz function
const initializeQuiz = function () {
  const category = window.location.search?.replace("?", "");
  if (category) {
  switch (category) {
    case "technology":
      initVariables(0);
      loadQuiz();
      break;
    case "general":
      initVariables(1);
      loadQuiz();
      break;
    default:
      window.location = "/";
  }
  }
};

// Call function.
initializeQuiz();

// Load quiz function.
function loadQuiz() {

  // Call the deselect Function.
  deselectAnswers();
  // Calling the index of the next quiz.
  let currentQuizData = quizData[categoryQuiz][currentQuiz];
  // Insert the Quiz and option to the element
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// Function to get the clicked option.
function getSelected() {
  // Initialize local variables.
  let answer = undefined;
  // Get the id of the selected option
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
   console.log(answer);
  return answer;
 
}


// Function to deselect the option selected.
function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
if (submitBtn)
  submitBtn.addEventListener("click", () => {
    // Check to see the answer
    const answer = getSelected();
    // Check to see if an answer id checked.
    if (answer) {
      // Increase score if the answer is correct
      if (answer === quizData[categoryQuiz][currentQuiz].correct) {
        // console.log(quizData[categoryQuiz][currentQuiz].correct);
        score += 10;
      }
      // Increase the index of the quiz data, so as to load the next question.
      currentQuiz++;

      // Declare the percentage score variable.
      let percentageScore = (score / 10 / quizData[categoryQuiz].length) * 100;
      // Load the next question
      if (currentQuiz < quizData[categoryQuiz].length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `<h2>You answered correctly ${score / 10}/${
          quizData[categoryQuiz].length
        } questions. Your percentage score is ${percentageScore}% </h2> <button onclick="location.reload()">Retake the Quiz</button>`;

        if (percentageScore >= 70) {
          document.body.style.backgroundImage = "url('images/Hooray.gif')";
        }
      }
    }
  });
