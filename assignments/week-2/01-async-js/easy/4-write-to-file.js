const content = 'Wrting to file : Hello!!!';

//Using callbacks
// const fs = require('fs');

// fs.writeFile('output.txt', content, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('File written sucessfully!');
//   }
// });

//Using Promises
const fs = require('fs').promises;

async function writeToFile(content) {
  try {
    await fs.writeFile('output.txt', content);
    console.log('File written sucessfully!');
  } catch (error) {
    console.log(error);
  }
}

writeToFile(content);
