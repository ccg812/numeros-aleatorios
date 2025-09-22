const display = document.getElementById('display');
const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 30) + 1;
  display.textContent = randomNumber;
  display.style.transform = 'scale(1.2)';
  setTimeout(() => {
    display.style.transform = 'scale(1)';
  }, 300);
});