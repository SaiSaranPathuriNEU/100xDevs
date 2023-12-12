// Read 3-read-from-file for the description

const filePath =
  '/Users/saranpathuri/Documents/GitHub/DesignPatterns/100xDevs_Challenges/assignments/week-2/01-async-js/easy/test.txt';

//first way of doing it

// const fs = require('fs');
// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) {
//     console.log('Error while reading file: ' + err);
//   } else {
//     console.log(data);
//   }
// });

//2nd way of doing it
const fs = require('fs').promises;

async function readFilePath(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data.toString());
  } catch (error) {
    console.log(error.data);
  }
}

readFilePath(filePath);
