function getPromiseOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 Done");
    }, 1000);
  });
}

function getPromiseTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 Done");
    }, 2000);
  });
}

function getPromiseThree() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise 3 Error");
    }, 3000);
  });
}

function getPromisesAll(promise1, promise2, promise3) {
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("getPromisesAll called");
      console.log("------- getPromisesAll ended -------");
    });
}

function getPromisesAllSettled(promise1, promise2, promise3) {
  Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("getPromisesAllSettled called");
      console.log("------- getPromisesAllSettled ended -------");
    });
}

function getPromisesRace(promise1, promise2, promise3) {
  Promise.race([promise1, promise2, promise3])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("getPromisesRace called");
      console.log("------- getPromisesRace ended -------");
    });
}
getPromisesAll(getPromiseOne(), getPromiseTwo(), getPromiseThree());
getPromisesAllSettled(getPromiseOne(), getPromiseTwo(), getPromiseThree());
getPromisesRace(getPromiseOne(), getPromiseTwo(), getPromiseThree());
