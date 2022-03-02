const showMessage = (messageText, state) => {
  const message = document.createElement('p');
  message.setAttribute('class', state);
  message.innerHTML = messageText;
  document.querySelector('body').appendChild(message);
  setTimeout(() => {
    message.remove();
  }, 3000);
};

export default showMessage;