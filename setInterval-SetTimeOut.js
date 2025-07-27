function currentTime() {
  let date = new Date();
  return date.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

function intervalFunction() {
  console.log(currentTime());
}

let timer = setInterval(function(){
  console.log(currentTime())
}, 1000);

setTimeout(function(){
  clearInterval(timer);
}, 10000)