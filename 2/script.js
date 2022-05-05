const userNumbers = [];

let sum = 0;
const limit = 50;

do{
  const number = parseInt(prompt('inserisci un numero'));
  if(!isNaN(number)){
    userNumbers.push(number);
    sum += number;
    console.log(number, sum)
  }else{
    alert('Il valore inserito non è un numero')
  }
}while(sum < limit);
