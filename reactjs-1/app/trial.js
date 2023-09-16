const h1 = document.querySelector('h1');

const updateButton = document.querySelector('button');

updateButton.addEventListener('click', () => {
  h1.textContent = 'My marks were 33';
});