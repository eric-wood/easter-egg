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
    this.createSolution();
    this.nodes.numbers.innerText = this.numbers.join(',');
  }

  createSolution() {
    const deduped = Array.from(new Set(this.numbers));
    this.solution = deduped.sort((a, b) => a - b);
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
  
  parseUserInput(input) {
    // This could be improved to be more permissive if we wanted to
    // accept a wider variety of inputs (such as allowing spaces)
    return input
      .split(',')
      .map((i) => parseInt(i, 10));
  }

  hasLost() {
    return this.attempts >= MAX_ATTEMPTS;
  }

  onSubmit(event) {
    event.preventDefault();
    const userInput = this.nodes.input.value

    const userInput = this.parseUserInput(this.nodes.input.value);
    if (this.arraysAreEqual(userInput, this.solution)) {
      this.win();
    }

    this.attempts += 1;

    if (this.hasLost()) {
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