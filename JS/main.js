// Cuando se haga click en el botón de cerrar, el texto bajo el título de la card debe desaparecer, y el
// // texto del botón debe pasar a ser "Open"
// const faqSection = document.querySelector('faqSection');
// const faqItems = document.querySelectorAll('.faq-item');

const faqSection = document.querySelector('.faqSection');
const faqItems = document.querySelector('.faqItems');
const faqText = document.querySelector('#faq-text');


closeButton.addEventListener('click', () => {
    faqText.classList.toggle('hidden');
    faqSection.textContent = faqText.classList.contains('hidden') ? 'Open' : 'Close';
  });



