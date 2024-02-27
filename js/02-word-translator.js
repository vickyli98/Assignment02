let langCode = prompt('Enter a language code');

if (langCode === 'es') {
  console.log('Hello World translated in Spanish is: Hola Mundo');
} 

if (langCode === 'de') {
  console.log('Hello World translated in German is: Hallo Welt');
} 

if (langCode === 'en') {
  console.log('Hello World translated in English is: Hello World');
}

if (langCode === 'fr') {
  console.log('Hello World translated in French is: Bonjour le monde');
} 

if (langCode !== 'es' && langCode !== 'de' && langCode !== 'fr' && langCode !== 'en') {
  console.log('Hello World translated in English is: Hello World');
}
