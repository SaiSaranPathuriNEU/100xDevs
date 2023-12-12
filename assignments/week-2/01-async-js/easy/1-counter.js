//We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
//It should go up as time goes by in intervals of 1 second

let counter = 0; // Initialize the counter
let intervalId;

// Function to increment the counter
function incrementCounter() {
  counter++;
  console.log(counter);

  if (counter >= 10) {
    clearInterval(intervalId); //clearing the interval when the couter reaches cout 10
  }
}

// Set the interval to call incrementCounter every 1000 milliseconds (1 second)
intervalId = setInterval(incrementCounter, 1000);
