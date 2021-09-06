let quizData = [
  {
    question: 'Lenguaje de programación más usado?',
    a: 'Python',
    b: 'Javascript',
    c: 'c++',
    d: 'Java',
    correct: 'a'
  },
  {
    question: 'Framework de Javascript más popular?',
    a: 'Angular',
    b: 'Vue',
    c: 'Svelt',
    d: 'React',
    correct: 'd'
  },
  {
    question: 'En que año se creo Javascript?',
    a: '1995',
    b: '2000',
    c: '2005',
    d: '1982',
    correct: 'a'
  }
];

let currentIndexQuiz = 0;
let score = 0;

function showQuestionQuiz(i) {
  let questionDiv = document.getElementById('question-c');

  if (i >= quizData.length) {
    let summary = `<h5>Total de aciertos ${score}/${quizData.length}</h5>`;
    questionDiv.innerHTML = summary;
    currentIndexQuiz = 0;
    score = 0;
    return;
  }

  let question = `<h5 id="title-question">${quizData[i].question}</h5>`;

  for (let key in quizData[i]) {
    if (key == 'question' || key == 'correct') continue;
    
    question += `
      <div class="option">
        <input type="radio" id="${key}" name="question-option" value="${key}">
        <label for="${key}">${quizData[i][key]}</label>
      </div>
    `;
  }

  questionDiv.innerHTML = question;
}

function getScore(resp) {
  let question = quizData[currentIndexQuiz - 1];

  if (question?.correct == resp) score++;
}

showQuestionQuiz(currentIndexQuiz++);

document.getElementById('quiz-form')
  .addEventListener('submit', function (e) {

    e.preventDefault();

    let options = document.querySelectorAll('input[name="question-option"]');
    let resp;

    for (let i = 0; i < options.length; i++) {
      if (options[i].checked) {
        resp = options[i].value;
        break;
      }
    }

    getScore(resp || '');
    showQuestionQuiz(currentIndexQuiz++);
  });
