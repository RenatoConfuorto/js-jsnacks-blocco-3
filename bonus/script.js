const greenEvenDisplay = document.getElementById('green-even-nbr');
const redOddDisplay = document.getElementById('red-odd-nbr');

const numbers = [];
//riempire l'array
const length = 20;
for(let i = 0; i < length; i++){
  numbers.push(casualInteger(1, 50));
}

function casualInteger(min, max){
  return Math.floor(Math.random() * (max - min) + min + 1);
}

numbers.forEach(element => {
  //stabile in quale div va posizionato l'elemento
  const display = element % 2 === 0 ? greenEvenDisplay : redOddDisplay;

  innerElement(element, display);
});

function innerElement(number, display){
  display.innerText += `${number}-`;
}
