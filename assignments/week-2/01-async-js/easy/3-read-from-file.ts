import * as fs from 'fs';

const filePath: string =
  '/Users/saranpathuri/Documents/GitHub/DesignPatterns/100xDevs_Challenges/assignments/week-2/01-async-js/easy/test.txt';

async function readFilets(filePath: string) {
  try {
    const data: any = fs.readFileSync(filePath);
    console.log(data.toString());
  } catch (error) {
    console.log(error.data);
  }
}

readFilets(filePath);
