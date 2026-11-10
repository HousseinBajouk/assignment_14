function getDataFromServer(condition) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (condition) {
        resolve("Done");
      } else {
        reject("Error");
      }
    }, 2000);
  });
}
let promise = getDataFromServer()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("promise called");
  });
