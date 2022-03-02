import showMessage from './message.js';

const submitScore = (form) => new Promise((resolve) => {
  const btn = form.querySelector('button');
  btn.value = 'Submitting ... ';
  btn.setAttribute('disabled', 'disabled');
  const user = form.user.value;
  const score = form.score.value;
  const response = fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ffLA8bI6eF9yyXwbNJ4E/scores/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user, score }),
    redirect: 'follow',
  })
    .then((response) => response.text())
    .then((result) => {
      showMessage(JSON.parse(result).result, 'success');
    })
    .catch((error) => {
      showMessage(`Operation failed. error: ${error}`, 'error');
    })
    .finally(() => {
      btn.value = 'Submit';
      btn.removeAttribute('disabled');
    });
  resolve(response);
});

export default submitScore;