const pessoas = [
  { id: 3, nome: "luan" },
  { id: 2, nome: "fulano" },
  { id: 1, nome: "larissa" },
];

const novasPessoas = new Map();

for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas.get(2));
