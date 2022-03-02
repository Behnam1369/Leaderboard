import getScores from './getScores.js';

const showResults = async () => {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';
  const scores = await getScores();
  scores.result.sort((a, b) => b.score - a.score).forEach((el) => {
    const progress = el.score / 10;
    ul.innerHTML += `<li style='background-image: linear-gradient(to right, #d1ffa5  ${progress}%, transparent ${progress}%);'>${el.user.toUpperCase()}: ${parseFloat(el.score)}</li>`;
  });
};

export default showResults;
