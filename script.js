const notice = document.querySelector('#notice');
const toolButtons = document.querySelectorAll('[data-coming-soon]');

for (const button of toolButtons) {
  button.addEventListener('click', () => {
    notice.hidden = false;
    notice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}
