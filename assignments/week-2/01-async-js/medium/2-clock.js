const { Console } = require("console");


function time12HFormat(time, is12H){
    if (is12H) {
        return time.toLocaleTimeString('en-US', {hour12: true});
    } else {
        return time.toLocaleTimeString('en-US', {hour12: false});
    }
    
}

function displayClock(){
    console.clear();
    let timeNow = new Date();

    console.log(`Clock in 12H format: ${time12HFormat(timeNow,true)}`);
    console.log("----------------------------------")
    console.log(`Clock in 24H format: ${time12HFormat(timeNow, false)}`);

    setTimeout(displayClock, 1000);
}

displayClock();