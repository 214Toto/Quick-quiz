const quizData = [
  {
    question: "WHat is your name? ",
    a: "Toto",
    b: "Jonas",
    c: "mike",
    d: "Prince",
    correct: "a",
  },
  {
    question: "WHere do you stay? ",
    a: "Kitwe",
    b: "Kabwe",
    c: "Ndola",
    d: "Paris",
    correct: "c",
  },
  {
    question: "WHat is your mums name? ",
    a: "Grace",
    b: "Agatha",
    c: "Christine",
    d: "Idah",
    correct: "d",
  },
  {
    question: "WHat is your dads name? ",
    a: "Blake",
    b: "Joe",
    c: "Jake",
    d: "Joel",
    correct: "b",
  },
  {
    question: "WHat is your brothers name? ",
    a: "Mwelwa",
    b: "Joses",
    c: "Changwe",
    d: "Mwitwa",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")


let currentQuiz = 0 
let score = 0

loadQuiz()

function loadQuiz() {
   
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
      answerEls.forEach(answerEls => answerEls.checked = false)

}

function getSelected() {
      let answer
      answerEls.forEach(answerEl => {
        if(answerEl.checked) {
          answer = answerEl.id
        }
      })
      return answer

}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++

    if(currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
      <h2> You Answered ${score}/${quizData.length} questions corretly</h2>

      <button onclick='window.location.href="tada.html" '> Reload </button>
      `
      
    }
  }
})