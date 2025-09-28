function awaitResponse(message, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve(message);
    }, time);
  });
}

function randomTime(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

// async function exec() {
//   try {
//     const phrase1 = await awaitResponse('phrase1', randomTime());
//     console.log('Resolved:', phrase1);

//     const phrase2 = await awaitResponse('phrase2', randomTime());
//     console.log('Resolved:', phrase2);
//   } catch(e) {
//     console.log(e);
//   }
// }

async function exec() {
  const [a, b] = await Promise.all([
    awaitResponse("phrase1", randomTime()),
    awaitResponse("phrase2", randomTime()),
  ]);

  console.log("end: ", a, b);
}

exec();
