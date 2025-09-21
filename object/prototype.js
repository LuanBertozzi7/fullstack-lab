function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

// Adicionando um método ao prototype
Pessoa.prototype.NomeCompleto = function () {
  console.log(this.nome + " " + this.sobrenome);
};

const p1 = new Pessoa("Luan", "Bertozzi");
const p2 = new Pessoa("Ana", "silva");

p1.NomeCompleto();
p2.NomeCompleto();
