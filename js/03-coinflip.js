let randomNum = Math.round(Math.random());
let coinFlip = randomNum;
let choice = prompt('Heads or Tails');
let results = '';

if (coinFlip < 1/2) {
  results = 'heads';
} else if (coinFlip > 1/2) {
  results = 'tails';
};

if (results === 'heads' && choice === 'heads') {
  alert('The flip was heads and you chose heads... you win!');
} else if (results === 'heads' && choice === 'tails') {
  alert('The flip as heads but you chose tails... you lose!');
} else if (results === 'tails' && choice === 'heads') {
  alert('The flip was tails but you chose heads... you lose!');
} else if (results === 'tails' && choice === 'tails') {
  alert('The flip was tails and you chose tails... you win!');
};
