const pessoa = {
  nome: "Luan",
  sobrenome: "Bertozzi",
  idade: 19,
  endereco: {
    Rua: "São Luiz",
    avenida: "Nova Pimenta",
    numero: 1180
  }
}



// destructuring
const {
  nome: nomePessoa,
  sobrenome: sobrenomePesssoa,
  idade: idadePessoa = 'Idade não informada'
} = pessoa;

console.log(`Nome: ${nomePessoa} ${sobrenomePesssoa} idade: ${idadePessoa}`);


const {
  endereco: {
    Rua,
    avenida,
    numero
  }
} = pessoa;

console.log(`endereço: ${Rua} avenida ${avenida} número ${numero}`);
 