//your code here
<script>
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let previousGuess;
    let response = document.getElementById('response');
    response.textContent = '';

    function checkGuess() {
      let guess = parseInt(document.getElementById('guess').value);
      if (guess < 1 || guess > 100) {
        response.textContent = 'Please enter a number between 1 and 100.';
      } else if (guess === secretNumber) {
        response.textContent = 'Congratulations! You guessed the secret number.';
      } else {
        let difference = Math.abs(secretNumber - guess);
        if (previousGuess) {
          let previousDifference = Math.abs(secretNumber - previousGuess);
          if (difference < previousDifference) {
            response.textContent = 'Getting hotter! Guess ' + (guess > previousGuess ? 'lower' : 'higher') + '.';
          } else {
            response.textContent = 'Getting colder! Guess ' + (guess > secretNumber ? 'lower' : 'higher') + '.';
          }
        } else {
          response.textContent = 'Guess ' + (guess > secretNumber ? 'lower' : 'higher') + '.';
        }
        previousGuess = guess;
      }
    }

    document.getElementById('submit').addEventListener('click', checkGuess);
  </script>
