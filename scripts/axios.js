const url = "https://jsonplaceholder.typicode.com/todos";
let result_promise;
axios
  .get(url)
  .then((response) => {
    result_promise = response.data;
    console.log(result_promise);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Axios called");
  });
