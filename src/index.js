import './style.css';
import showScores from './modules/showScores.js';
import submitScore from './modules/submitScore.js';

window.addEventListener('load', () => {
  showScores();
});

const form = document.forms[0];
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await submitScore(form);
  showScores();
});

const btnRefresh = document.querySelector('.btnRefresh');
btnRefresh.addEventListener('click', () => {
  showScores();
});