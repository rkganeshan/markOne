const readlineSync = require('readline-sync');
const chalk = require('chalk');

var user = readlineSync.question('Hey There,Can you please tell me your Name? ');
var score = 0;

console.log(`Awesome Sauce! Welcome ${user} to ${chalk.bgBlue('Pehchan Ganeshan!')}`);

var questionBank = [
  {
    question: 'In which city was I born?',
    answer: 'Vizag',
  },
  {
    question: 'Do you know, in which city I was brought up?',
    answer: 'Ranchi',
  },
  {
    question: 'Do you know my favourite food?',
    answer: 'Momo',
  },
  {
    question: 'Who is my favourite sportsperson?',
    answer: 'MS Dhoni',
  },
  {
    question: 'Do I love watching movies?(Yes/No)',
    answer: 'No',
  },
];

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (answer.includes(userAnswer)) {
    console.log(`${chalk.green('Yay! Correct Answer')}`);
    score += 1;
  } else {
    console.log(`${chalk.red('Oops! Incorrect Answer')}`);
    console.log(`${chalk.yellow(`The correct answer is:${answer}`)}`);
  }
  console.log(`Your score is: ${score}`);
}

for (var i = 0; i < questionBank.length; i++) {
  quiz(questionBank[i].question, questionBank[i].answer);
}
console.log("=====RESULT=====")
console.log(`Your total score is: ${score}`);