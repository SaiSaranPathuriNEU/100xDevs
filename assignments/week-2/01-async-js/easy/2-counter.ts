// typescript version of the solutiobn

let count2: number = 0;

function incrementCounter2() {
  counter++;
  console.log(counter);
  if (counter < 10) {
    setTimeout(incrementCounter2, 1000);
  } else {
    return;
  }
}

incrementCounter();
