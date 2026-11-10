example_btn = document.getElementById("example_btn");
login_btn = document.getElementById("login_btn");
setTimeout_btn = document.getElementById("setTimeout_btn");
interval_btn = document.getElementById("interval_btn");
sync_btn = document.getElementById("sync_btn");
async_btn = document.getElementById("async_btn");
promises_btn = document.getElementById("promises_btn");
promises_all_btn = document.getElementById("promises_all_btn");
async_await_btn = document.getElementById("async_await_btn");
axios_btn = document.getElementById("axios_btn");

example_btn.addEventListener(
  "click",
  () => (location.href = "https://example.com"),
);
login_btn.addEventListener("click", () => (location.href = "login.html"));
setTimeout_btn.addEventListener(
  "click",
  () => (location.href = "settimeout.html"),
);
interval_btn.addEventListener("click", () => (location.href = "interval.html"));
sync_btn.addEventListener("click", () => (location.href = "sync.html"));
async_btn.addEventListener("click", () => (location.href = "async.html"));
promises_btn.addEventListener("click", () => (location.href = "promises.html"));
promises_all_btn.addEventListener(
  "click",
  () => (location.href = "promises_all.html"),
);
async_await_btn.addEventListener(
  "click",
  () => (location.href = "async_await.html"),
);
axios_btn.addEventListener("click", () => (location.href = "axios.html"));
