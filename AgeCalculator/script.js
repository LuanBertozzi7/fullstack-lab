
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const anoNascimento = document.getElementById('AnoDeNascimento').value;
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - anoNascimento;
  document.querySelector('.resultado').textContent = 
  idade >= 0 ? `Você tem ${idade} anos` : `Ano Inválido!`;
  console.warn(idade);
});


/* 
feat: new feature 
fix: bug resolved
style: resource and updates for stylization
refactor: refactoring
test: all for tests
docs: all for documentations
chore: regular maintenance
*/
