// read the 1-file-cleaner.md for description

const fs = require('fs').promises

const filePath =
  '/Users/saranpathuri/Documents/GitHub/DesignPatterns/100xDevs_Challenges/assignments/week-2/01-async-js/medium/input.txt'

//This function to clean the file by changing multiple spaces to a single sapce in the File
async function cleanFile(filePath) {
  try {
    let fileData = await fs.readFile(filePath, 'utf8')

    const cleanfileData = fileData.replace(/\s+/g, ' ')

    //write the cleanfileData in to the file again
    console.log(cleanfileData)
    fs.writeFile(filePath, cleanfileData)
    console.log('File cleaned!')
  } catch (error) {
    console.log(error)
    s
  }
}

cleanFile(filePath)
