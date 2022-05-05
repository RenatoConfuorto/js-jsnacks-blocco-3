class Team {

  constructor(nome, puntiFatti, falliSubiti){
    this.nome = nome;
    this.puntiFatti = puntiFatti;
    this.falliSubiti = falliSubiti;
  }

}

const teams = [];

//creare le squadre
const napoli = new Team('napoli', 0, 0);
const milan = new Team('milan', 0, 0);
const juve = new Team('juve', 0, 0);
const inter = new Team('inter', 0, 0);
const atalanta = new Team('atalanta', 0, 0);
teams.push(napoli, milan, juve, inter, atalanta);

teams.forEach(element => {
  
  element.puntiFatti = casualInteger(1, 10);
  element.falliSubiti = casualInteger(1, 20);
  
});

function casualInteger(min, max){
  return Math.floor(Math.random() * (max - min) + min + 1);
}