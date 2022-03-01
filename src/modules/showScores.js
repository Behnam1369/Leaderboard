import scores from './getData';

window.addEventListener('load', () => {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';
  scores.forEach((el) => {
    ul.innerHTML += `<li>${el.user}: ${el.score}</li>`;
  });
});