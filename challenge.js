const MAX_ATTEMPTS = 3;

class Challenge {
  constructor() {
    this.nodeRefs = {
      numbers: '.numbers',
      form: 'form',
      input: 'input[name="answer"]',
    };

    this.attempts = 0;
    this.fetchNodes();
    this.addEventListeners();
    this.initChallenge();
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  initChallenge() {
    const length = this.random(4, 10);
    this.numbers = new Array(length).fill(0).map(() => this.random(0, 10));
    this.solution = Array.from(new Set(this.numbers))
      .sort((a, b) => a - b);
    this.nodes.numbers.innerText = this.numbers.join(',');
  }

  fetchNodes() {
    // Ideally I'd be inheriting this from a base view of some sort
    this.nodes = Object.keys(this.nodeRefs).reduce((acc, key) => { 
      acc[key] = document.querySelector(this.nodeRefs[key]);
      return acc;
    }, {});
  }

  addEventListeners() {
    this.nodes.form.addEventListener('submit', (event) => this.onSubmit(event));
  }

  arraysAreEqual(a1, a2) {
    return a1.every((element, index) => (
      element === a2[index]
    ));
  }

  onSubmit(event) {
    event.preventDefault();
    const userInput = this.nodes.input.value
      .split(',')
      .map((i) => parseInt(i, 10));

    if (this.arraysAreEqual(userInput, this.solution)) {
      this.win();
    }

    this.attempts += 1;

    if (this.attempts >= MAX_ATTEMPTS) {
      this.fail();
    }
  }

  win() {
    window.location = 'pass.html';
  }

  fail() {
    window.location = 'fail.html';
  }
}

window.challenge = new Challenge()