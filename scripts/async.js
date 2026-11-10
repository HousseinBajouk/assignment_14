// in async order line 1 logs first
//then line 3 logs immediately after line 1 because line 2 is delayed by 2 seconds asynchronously
//line 2 logs after 2 seconds asynchronously(at the end)
//so the order (line 1 logs and block the others, line 3 logs immediately after line 1, line 2 logs at the end after 2 seconds)
console.log("line 1");
setTimeout(() => {
  console.log("line 2");
}, 2000);
console.log("line 3");
