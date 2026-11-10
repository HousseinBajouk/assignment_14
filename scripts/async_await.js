function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 3000);
  });
}
async function getPromiseResult() {
  console.log("first line");
  try {
    const result = await getPromise();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  console.log("last line");
}

getPromiseResult();
//the last line is is not being printed unless that getPromise function is being finished
//when using async/await, the code after the await will not execute until the promise is resolved or rejected
