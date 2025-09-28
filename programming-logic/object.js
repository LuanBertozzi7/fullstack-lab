const pessoa = {
  nome: "Luan",
  sobrenome: "Bertozzi",
  idade: 19,
  endereco: {
    rua: "São Luiz",
    avenida: "Nova Pimenta",
    numero: 1180
  }
};

// Object destructuring to extract properties from pessoa
const {
  nome: nomePessoa,
  sobrenome: sobrenomePessoa,
  idade: idadePessoa = 'Idade não informada'
} = pessoa;

console.log(`Name: ${nomePessoa} ${sobrenomePessoa} Age: ${idadePessoa}`);

// Nested destructuring to extract address properties
const {
  endereco: {
    rua,
    avenida,
    numero
  }
} = pessoa;

console.log(`Address: ${rua}, avenue ${avenida}, number ${numero}`);
