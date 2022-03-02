import showMessage from './message.js';

const getScores = () => new Promise((resolve) => {
  const scores = fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ffLA8bI6eF9yyXwbNJ4E/scores/')
    .then((response) => response.json())
    .catch((error) => {
      showMessage(`Operation failed. error: ${error}`, 'error');
    });
  resolve(scores);
});

export default getScores;