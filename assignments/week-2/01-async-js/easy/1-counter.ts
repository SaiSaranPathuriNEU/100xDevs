//typescript version of the solution

let count: number = 0;
let intervelId: any;

function incrCounter() {
  count++;
  console.log(count);

  if (count >= 10) {
    clearInterval(intervelId);
  }
}

intervelId = setInterval(incrCounter, 1000);
