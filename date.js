const date = new Date(); // constructor function

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formatDate(date) {
  const dia = zeroAEsquerda(date.getDate());
  const mes = zeroAEsquerda(date.getMonth() + 1);
  const ano = zeroAEsquerda(date.getFullYear());
  const hora = zeroAEsquerda(date.getHours());
  const minuto = zeroAEsquerda(date.getMinutes());
  const segundo = zeroAEsquerda(date.getSeconds());
  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
}

console.log(formatDate(date))