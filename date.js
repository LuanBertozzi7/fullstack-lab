const data = new Date(); // constructor function


function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}


function formatData(data) {

  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const minuto = zeroAEsquerda(data.getMinutes());
  const segundo = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`

}



console.log(formatData(data))