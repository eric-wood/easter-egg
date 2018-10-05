Envoy is hiring! We're trying to build an easter egg in our site to hire a talented JavaScript developer.
Here is how it'll work:
There is a sign up form in Envoy's webpage. (index.html) When the user's e-mail has keywords such as "JavaScript" or "Ruby", we'll display a modal that covers entire screen says "Looks like you're a kickass coder, do you want to play a game?"

Please implement the following features by updating `app.js` and `index.html`:

1. When the user enters their e-mail address, as soon as it has keyword that we are looking for, display the modal
2. When the user click "No", it should hide the modal
3. When the user click "Yes", it should redirect them to `challenge.html`
4. Sign up form and modal are provided in index.html

---

In the challenge page, we'd like to test the user's ability to sort list of numbers.

Please implement the following features by updating `challenge.js` and `challenge.html`:

1. Replace content inside `<p class="numbers">10,3,1,2,5,9</p>` to display a list of random numbers. The length of these numbers are also random.
2. When the user click "submit", if the answer is correct, then redirect them to pass.html
3. When the user click "submit", if the answer is incorrect, then redirect them to retry.html

Bonus points:
1. We also want the user to drop number if it’s duplicate. For example, we display list of numbers: "2,1,5,3,2,6" Answer is correct if user enter "1,2,2,3,5,6"
2. Limit number of retries to three. After the users fail to answer the question for three times, redirect them to fail.html
