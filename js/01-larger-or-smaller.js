let firstInteger = prompt('Enter an integer');
let secondInteger = prompt('Enter a second integer');

if (firstInteger > secondInteger) {
  document.write(`${firstInteger}`);
} 
if (secondInteger > firstInteger) {
  document.write(`${secondInteger}`);
} 
if (firstInteger === secondInteger) {
  document.write('Both integers are equal');
}