//using url module in Node.js

/*
The url module in Node.js provides utilities for URL resolution and parsing.
 It allows you to work with URLs in a structured way,
  making it easier to extract and manipulate different components of a URL.

Here are some common use cases and examples of how to use the url module in Node.js:

1. Importing the url Module
To use the url module, you first need to import it into your Node.js application.
Javascriptconst url = require('url');   --- IGNORE ---
*/  
import { URL } from 'url';

/*  



*/
//url module use cases in Node.js
//parse and manipulate URLs
//extract hostname, pathname, protocol, etc.
//example:
const myUrl = new URL('https://example.com:8080/path?name=John#section');

console.log('Hostname:', myUrl.hostname); // example.com
console.log('Pathname:', myUrl.pathname); // /path
console.log('Protocol:', myUrl.protocol); // https:
console.log('Port:', myUrl.port);         // 8080
console.log('Search Params:', myUrl.searchParams.get('name')); // John  


//extract query parameters
//example:
const searchParams = new URL('https://example.com/path?name=John&age=30').searchParams;
console.log('Name:', searchParams.get('name')); // John
console.log('Age:', searchParams.get('age'));   // 30   

//construct URLs from components
//example:
const baseUrl = 'https://example.com';
const path = '/api/data';
const queryParams = new URLSearchParams({ name: 'John', age: '30' });

const fullUrl = `${baseUrl}${path}?${queryParams.toString()}`;
console.log('Full URL:', fullUrl); // https://example.com/api/data?name=John&age=30 

//handle URL encoding/decoding
//example:
const encodedUrl = encodeURIComponent('https://example.com/path with spaces');
console.log('Encoded URL:', encodedUrl); // https%3A%2F%2Fexample.com%2Fpath%20with%20spaces

const decodedUrl = decodeURIComponent(encodedUrl);
console.log('Decoded URL:', decodedUrl); // https://example.com/path with spaces

/*
In summary, the url module in Node.js is essential for working with URLs, allowing you to parse, manipulate, and construct URLs easily. It is widely used in web development, API interactions, and any application that requires URL handling.
*/
//  Manipulating Query Parameters with URLSearchParams
//example:
const urlWithParams = new URL('https://example.com/path?name=John&age=30');
urlWithParams.searchParams.append('city', 'NewYork');
console.log('Updated URL:', urlWithParams.toString()); // https://example.com/path?name=John&age=30&city=NewYork

urlWithParams.searchParams.set('name', 'Jane');
console.log('Modified URL:', urlWithParams.toString()); // https://example.com/path?name=Jane&age=30&city=NewYork

urlWithParams.searchParams.delete('age');
console.log('Final URL:', urlWithParams.toString()); // https://example.com/path?name=Jane&city=NewYork
