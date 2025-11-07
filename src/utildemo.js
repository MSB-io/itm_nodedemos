//use cases for using the util module in Node.js

//Debugging and Inspection:

//util.inspect(object[, options]): Converts objects into a string representation, 
// useful for debugging.
import util from 'util';
import fs from 'fs';


const obj = { name: 'Node.js', version: '18.0', features: { esm: true, cjs: true, worker_threads: true } };
console.log(util.inspect(obj, { showHidden: true, depth: Infinity }));



//Formatting Strings:

//util.format(format, [...args]): Formats strings similarly to printf in C.

console.log(util.format('we have %f discount on %s',  25, 'mobiles'));
console.log(util.format('Hello, %s! You have %d new messages.', 'Alice', 5));
console.log(util.format('Object: %j', { id: 1,name:'smita' }));
console.log(util.format('JSON: %j', { key: 'value', arr: [1, 2, 3] })); 






//Inheritance:

//util.inherits(constructor, superConstructor): 
// Helps in setting up prototype inheritance between objects.
function Parent() {
  this.name = 'Parent';
}
function Child() {
  Parent.call(this);
  this.type = 'Child';
}
util.inherits(Child, Parent);
const child = new Child();
console.log(child.name); // Output: Parent





//Promisify Functions:

//util.promisify(original): 
// Converts a callback-based function into a Promise-based one.

const readFile = util.promisify(fs.readFile);
readFile('input.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));





//Text Encoding and Decoding:

//util.TextEncoder and util.TextDecoder: Used for encoding and decoding text.
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const encoded = encoder.encode('Hello, World!');
console.log(encoded); // Uint8Array
console.log(decoder.decode(encoded)); // Hello, World!




//Callback Wrapping:

//util.callbackify(func): Converts a Promise-based function back to a callback-based one.
const asyncFunction = async (value) => {
  return `Value is: ${value}`;
};
const callbackFunction = util.callbackify(asyncFunction);
callbackFunction('Test', (err, result) => {
  if (err) throw err;
  console.log(result); // Output: Value is: Test
}); 
