function randomNumberTimeSecond(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function awaitMoment(message, time) {
  return new Promise((resolve, reject) => {
    if (typeof message !== "string") {
      reject(new Error());
      return;
    }
    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

awaitMoment("phrase 1", randomNumberTimeSecond(1, 3))
  .then((response) => {
    console.log(response);
    return awaitMoment("phrase 2", randomNumberTimeSecond(1, 3));
  })
  .then((response) => {
    console.log(response);
    return awaitMoment(11111, randomNumberTimeSecond(1, 3));
  })
  .then((response) => {
    console.log(response);
  })
  .catch((e) => {
    console.log("ERROR:   message is not a string");
    console.log(e);
  });

/*
     Promises.all -> waits for multiple promises and 
     returns all results, or fails if one does.
     */
/*
     Promises.race -> returns the first settled promise—win or fail.
     */
  