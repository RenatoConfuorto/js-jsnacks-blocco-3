const firstArray = ['machhina', 'bici', 'moto', 'treno', 'tram', 'aereo', 'monopattino', 'nave'];
const secondArray = [20, 1, 8, 3, 5];

console.log(firstArray, secondArray);

let shortestArray = firstArray.length < secondArray.length ? firstArray : secondArray;
let longhestArray = firstArray.length > secondArray.length ? firstArray : secondArray;

//aggiungere elementi all'array più corto
while(shortestArray.length < longhestArray.length){

  const element = casualInteger(1, 100);
  shortestArray.push(element);
}

function casualInteger(min, max){
  return Math.floor(Math.random() * (max - min) + min + 1);
}