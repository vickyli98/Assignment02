let num = prompt('Enter a number between 1 and 100');

if (num > 100 || num < 1) {
  alert('Only numbers between 1 and 100 are accepted');
  num = prompt('Enter a number between 1 and 100');
}

if (num >= 60 && num <= 69) {
  console.log('You received a D');
} else if (num >= 70 && num <= 79) {
  console.log('You received a C');
} else if (num >= 80 && num <= 89) {
  console.log('You received a B');
} else if (num >= 90 && num <= 100) {
  console.log('You received an A');
} else if (num < 60) {
  console.log('You received an F');
}