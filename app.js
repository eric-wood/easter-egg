let keywords = ["Ember", "Ruby", "Rails", "Elixir", "React"];

let seenModal = false
const emailInput = document.querySelector('input[name="email"]');
const modal = document.querySelector('.modal');
const yesButton = modal.querySelector('.btn-primary')
const noButton = modal.querySelector('.btn-outline')

function showModal() {
  if (seenModal) { return }
  modal.classList.remove('hide');
  seenModal = true;
}

function hideModal() {
  modal.classList.add('hide');
}

function handleInputChange() {
  const isMatch = keywords.some((keyword) => {
    const value = emailInput.value.toLowerCase();
    return value.includes(keyword.toLowerCase());
  });

  if (isMatch) {
    showModal();
  }
}

emailInput.addEventListener('keydown', handleInputChange);
emailInput.addEventListener('keyup', handleInputChange);
yesButton.addEventListener('click', () => window.location = 'challenge.html');
noButton.addEventListener('click', hideModal);