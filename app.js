class App {
  constructor() {
    this.nodeRefs = {
      email: 'input[name="email"]',
      modal: '.modal',
      yesBtn: '.modal .btn-primary',
      noBtn: '.modal .btn-outline',
    };

    this.keywords = ["Ember", "Ruby", "Rails", "Elixir", "React"];
    this.seenModal = false;
    this.fetchNodes();
    this.addEventListeners();
  }

  fetchNodes() {
    this.nodes = Object.keys(this.nodeRefs).reduce((acc, key) => { 
      acc[key] = document.querySelector(this.nodeRefs[key]);
      return acc;
    }, {});
  }

  addEventListeners() {
    this.nodes.email.addEventListener('keydown', () => this.onInputChange());
    this.nodes.email.addEventListener('keyup', () => this.onInputChange());
    this.nodes.yesBtn.addEventListener('click', () => this.goToChallenge());
    this.nodes.noBtn.addEventListener('click', () => this.hideModal());
  }

  onInputChange() {
    const isMatch = this.keywords.some((keyword) => {
      const value = this.nodes.email.value.toLowerCase();
      return value.includes(keyword.toLowerCase());
    });

    if (isMatch) {
      this.showModal();
    }
  }

  showModal() {
    if (this.seenModal) { return }
    this.nodes.modal.classList.remove('hide');
    this.seenModal = true;
  }

  hideModal() {
    this.nodes.modal.classList.add('hide');
  }

  goToChallenge() {
    window.location = 'challenge.html';
  }
}

window.app = new App();