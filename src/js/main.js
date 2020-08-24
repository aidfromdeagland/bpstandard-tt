console.log('INTERACTED');

const questionsBlock = document.querySelector('.faq__questions')
const questions = questionsBlock.querySelectorAll('.question');
questionsBlock.addEventListener('click', (evt) => {
  if (evt.target.closest('.question__toggler')) {
    const questionItem = evt.target.closest('.question');
    if (questionItem.classList.contains('question_active')) {
      questionItem.classList.remove('question_active');
    } else {
      Array.prototype.forEach.call(questions, (question) => {
        if (question.classList.contains('question_active')) {
          question.classList.remove('question_active');
        }
      });
      questionItem.classList.add('question_active');
    }
  }
});
