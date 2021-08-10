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
  ],
];
// Get the id for each page.
let page = document.body.id;
switch (page) {
  case "index-page":
    var catEls = document.querySelectorAll(".categories");
    console.log(catEls);
    // Stringify the array, for localStorage.
    let catElsSerialized = JSON.stringify(catEls);
    // Get all the category element.
    var techEl = document.getElementById("technology");
    var genEl = document.getElementById("general");
    var sciEl = document.getElementById("science");
    var progEl = document.getElementById("programming");
    var elecEl = document.getElementById("electronic");
    // Store in local storage.
    localStorage.setItem("techEl", techEl)
    localStorage.setItem("genEl", genEl);
    // localStorage.setItem("sciEl", sciEl);
    // localStorage.setItem("progEl", progEl);
    // localStorage.setItem("elecEl", elecEl);
    localStorage.setItem("catEls", catElsSerialized);
    console.log(catEls)
    break;

  case "quiz-page":
    var answerEls = document.querySelectorAll(".answers");
    var quiz = document.getElementById("quiz");
    var questionEl = document.getElementById("question");
    var a_text = document.getElementById("a_text");
    var b_text = document.getElementById("b_text");
    var c_text = document.getElementById("c_text");
    var d_text = document.getElementById("d_text");
    var submitBtn = document.getElementById("submit");
    // Get the items from local storage.
    let techQuizEl = localStorage.getItem("techEl");
    let genQuizEl = localStorage.getItem("genEl");
    // let sciQuizEl = localStorage.getItem("sciEl");
    // let progQuizEl = localStorage.getItem("progEl");
    // let elecQuizEl = localStorage.getItem("elecEl");
    // Parse the data and then get the data with localstorage.
    let catQuizEls = JSON.parse(localStorage.getItem("catEls"));

    // Initialize the index of the category quiz.
    let categoryQuiz = 0;
    // Initialize the index of the Quiz.
    let currentQuiz = 0;
    // Initialize the value of the score
    let score = 0;
    console.log(catQuizEls[1])
    // Call function
    loadQuiz();
    

    // Load Quiz Function

    function loadQuiz() {
      // Call the deselect Function.
      deselectAnswers();
      // Calling the index of the next quiz.
      var currentQuizData = quizData[categoryQuiz][currentQuiz];
      console.log(currentQuizData);
      switch (catQuizEls) {
        case catQuizEls[0]:
          console.log(catQuizEls[0]);
          // currentQuizData = quizData[0][currentQuiz];
          while (currentQuiz < quizData[0].length) {
            console.log(quizData[0].length)
            currentQuizData = quizData[categoryQuiz][currentQuiz];
            currentQuiz++;
          }
          break;
        case 1:
          // currentQuizData = quizData[1][currentQuiz];
          categoryQuiz++;
          // while ()
          break;
      }

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
        console.log(currentQuiz);
        if (answer === quizData[categoryQuiz][currentQuiz].correct) {
          console.log(answer);
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
            quizData.length
          } questions. Your percentage score is ${percentageScore}% </h2> <button onclick="location.reload()">Retake the Quiz</button>`;

          if (percentageScore >= 70) {
            document.body.style.backgroundImage = "url('images/Hooray.gif')";
          }
        }
      }
    });
    break;
}



// Get all the category element classes.





