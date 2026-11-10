let par = document.getElementById("Hi_there");
let stopBtn = document.getElementById("stop_btn");

let timeoutId = setTimeout(() => {
  par.style.fontSize = "1.5rem";
}, 3000);
stopBtn.addEventListener("click", () => {
  clearTimeout(timeoutId);
  if (par.style.fontSize != "1.5rem") console.log(par.style);
});
