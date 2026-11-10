let par = document.getElementById("Hi_there2");
let stopBtn = document.getElementById("stop_btn");

let intervalId = setInterval(() => {
  par.classList.toggle("font");
}, 3000);

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  console.log(par.style);
});
