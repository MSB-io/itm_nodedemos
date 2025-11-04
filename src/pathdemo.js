import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path'; 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const fullPath = path.join('/users', 'nidhi', 'documents', 'file.txt');
console.log(fullPath); 


// Resolving paths
const absolutePath = path.resolve('users', 'rahul', 'documents', 'file.txt');
console.log(absolutePath); // Output: '/current/working/directory/users/john/documents/file.txt'


const filePath2 = '/users/sahil/documents/file.txt';

// Extracting file name
console.log(path.basename(filePath2)); // Output: 'file.txt'

// Extracting directory name
console.log(path.dirname(filePath2)); // Output: '/users/sahil/documents'
// Extracting file extension
console.log(path.extname(filePath2)); // Output: '.txt'


const messyPath = '/users/sahil/../rahul/./documents/file.txt';
const normalizedPath = path.normalize(messyPath);
console.log(normalizedPath); // Output: '/users/rahul/documents/file.txt'

const from = '/users/rahul/documents';
const to = '/users/vinay/photos';
const relativePath = path.relative(from, to);
console.log(relativePath); // Output: '../../vinay/photos'


const filePath = path.join(__dirname, 'data', 'file.txt');
console.log(filePath); // Output: '/absolute/path/to/current/directory/data/file.txt'
