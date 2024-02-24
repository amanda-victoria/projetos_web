const body = document.querySelector('body');
const button = document.createElement('button');
button.textContent = 'Mudar Cor';
button.addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = randomColor;
});
document.body.appendChild(button);

let count = 0;
const counter = document.createElement('p');
counter.textContent = `Contagem: ${count}`;
const incrementButton = document.createElement('button');
incrementButton.textContent = 'Incrementar';
incrementButton.addEventListener('click', () => {
  count++;
  counter.textContent = `Contagem: ${count}`;
});
document.body.appendChild(counter);
document.body.appendChild(incrementButton);

const reviews = ['Ótimo produto!', 'Excelente atendimento!', 'Recomendo a todos!'];
let currentIndex = 0;
const reviewElement = document.createElement('p');
reviewElement.textContent = reviews[currentIndex];
const nextButton = document.createElement('button');
nextButton.textContent = 'Próxima Avaliação';
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % reviews.length;
  reviewElement.textContent = reviews[currentIndex];
});
document.body.appendChild(reviewElement);
document.body.appendChild(nextButton);
