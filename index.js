console.log('Will Run as soon as the code is loaded')

// These are effectively global variables
let question = "awaiting click"
let expectedAnswer = 0;

function getRandomInt(from, to) {
  return Math.floor(Math.random() * (to - from)) + from;
}

function onClickAsk() {
  console.log('Ask')

  let divQuestion = document.getElementById('question')

  // Generate some values
  let a = getRandomInt(1, 10);
  let b = getRandomInt(1, 10);

  // Compose the question, calculate correct answer
  expectedAnswer = a * b;
  question = `What is ${a} x ${b}?`

  // Put the question onto the page
  divQuestion.innerHTML = question;
}


function onClickAnswer() {
  console.log('Answer')

  let playerAnswerRaw = document.forms['maths-quiz']['player-answer'].value;

  // Convert to integer
  let playerAnswer = parseInt(playerAnswerRaw);

  // Use alerts to feedback to the user
  // Not pleasant in real UI's, but you need to know how to do this...
  if (playerAnswer === expectedAnswer) {
    alert('Correct!')
  } else {
    alert('Incorrect :(')
  }
}

function onClickTrash() {
  document.write('Contents of Page Replaced');
}

function onClickNext() {
  window.location.href = 'https://Hello-HTML.jamesmalins.repl.co';
}

