import getScores from './getScores.js';

const showResults = async () => {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';
  const scores = await getScores();
  scores.result.sort((a, b) => b.score - a.score).forEach((el) => {
    ul.innerHTML += `<li>${el.user}: ${el.score}</li>`;
  });
};

export default showResults;
