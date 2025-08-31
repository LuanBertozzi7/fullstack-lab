// methods are functions, that are inside the object
// this is a literal object
const pessoa = new Object();

pessoa.nome = 'Luan Bertozzi';
pessoa.idade = 19;

pessoa.falarNome = function() {
  return `meu nome é ${this.nome}!`
}
pessoa.getIdadeNascimento = function() {
  const date = new Date();
  return date.getFullYear() - this.idade;
}


function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luan', 'Bertozzi');

console.log(p1)