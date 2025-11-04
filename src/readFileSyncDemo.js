import { readFileSync, writeFile, renameSync } from 'fs';
import  fs from 'fs';
try {
    const data = fs.readFileSync('data.txt', 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }

  fs.rename('data.txt', 'datatwo.txt', (err) => {
    if (err) {
      console.error('Error renaming file:', err);
      return;
    }
    console.log('File renamed successfully');
  });

  try {
    fs.renameSync('datatwo.txt', 'newname.txt');
    console.log('File renamed successfully');
  } catch (err) {
    console.error('Error renaming file:', err);
  }


// Write to a file
fs.writeFile('sample.txt', 'Hello, world!', (err) => {
    if (err) throw err;
    console.log('File written successfully');
  });