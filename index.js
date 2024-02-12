const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const min = 0;
const max = 100;

const secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Загадано число в диапазоне от ${min} до ${max}`);

rl.on('line', (input) => {
  const number = parseInt(input);
  
  if (number === secretNumber) {
    console.log(`Отгадано число ${number}`);
    rl.close();
  } else if (number < secretNumber) {
    console.log('Больше');
  } else if (number > secretNumber) {
    console.log('Меньше');
  }
});


