// Read 2-Counter for the description

let counter = 0;

function incrementCounter() {
  counter++;
  console.log(counter);

  if (counter < 10) {
    setTimeout(incrementCounter, 1000);
  } else {
    return;
  }
}

incrementCounter();
