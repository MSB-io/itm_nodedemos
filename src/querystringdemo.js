//using querystring module in Node.js

/*
The querystring module in Node.js provides utilities for parsing and formatting URL query strings. It allows you to work with query parameters in a structured way, making it easier to extract and manipulate data from URLs.

Here are some common use cases and examples of how to use the querystring module in Node.js:

1. Importing the querystring Module
To use the querystring module, you first need to import it into your Node.js application.
Javascriptconst querystring = require('querystring');   --- IGNORE ---
*/  
import querystring from 'querystring';

/*  
*/
//querystring module use cases in Node.js
//parsing query strings
//example:
const parsed = querystring.parse('name=John&age=30&city=New%20York');
console.log('Parsed Query String:', parsed); 
// Output: { name: 'John', age: '30', city: 'New York' }

//formatting query strings
//example:
const formatted = querystring.stringify({ name: 'John', age: 30, city: 'New York' });
console.log('Formatted Query String:', formatted); 
// Output: name=John&age=30&city=New%20York

//handling special characters
//example:
const specialChars = querystring.stringify({ name: 'John Doe', city: 'New York & Co.' });
console.log('Special Characters Query String:', specialChars); 
// Output: name=John%20Doe&city=New%20York%20%26%20Co.

/*
In summary, the querystring module in Node.js is essential for working with URL query strings, allowing you to parse and format them easily. It is widely used in web development, API interactions, and any application that requires URL parameter handling.
*/
//  Manipulating Query Parameters with URLSearchParams
//example:
const urlWithParams = new URL('https://example.com/path?name=John&age=30');
const params = querystring.parse(urlWithParams.search.slice(1));
console.log('Extracted Query Parameters:', params); 
// Output: { name: 'John', age: '30' }

const newParams = { name: 'Alice', age: 25 };
const newQueryString = querystring.stringify(newParams);
console.log('New Query String:', newQueryString); 
// Output: name=Alice&age=25        
urlWithParams.search = `?${newQueryString}`;
console.log('Updated URL:', urlWithParams.toString()); 
// Output: https://example.com/path?name=Alice&age=25   
/* This demonstrates how to extract, manipulate, and update query parameters using the querystring module in Node.js.
*/  
//  Adding Multiple Values for a Single Key
//example:
const multiValueParams = querystring.stringify({ name: ['John', 'Jane'], age: 30 });
console.log('Multi-Value Query String:', multiValueParams); 
// Output: name=John&name=Jane&age=30
urlWithParams.search = `?${multiValueParams}`;
console.log('Updated URL with Multi-Value Params:', urlWithParams.toString()); 
// Output: https://example.com/path?name=John&name=Jane&age=30
// This shows how to handle multiple values for a single key using the querystring module.
/*
Overall, the querystring module is a powerful tool for managing URL query strings in Node.js applications.
*/
//  Decoding and Encoding Query Strings
//example:
const encodedString = 'name=John%20Doe&city=New%20York%20%26%20Co.';
const decodedParams = querystring.parse(encodedString);
console.log('Decoded Query Parameters:', decodedParams); 
// Output: { name: 'John Doe', city: 'New York & Co.' }

const paramsToEncode = { name: 'Alice & Bob', city: 'Los Angeles' };
const encodedQueryString = querystring.stringify(paramsToEncode);
console.log('Encoded Query String:', encodedQueryString); 
// Output: name=Alice%20%26%20Bob&city=Los%20Angeles
/* This example illustrates how to decode and encode query strings using the querystring module in Node.js.
*/
//  Handling Nested Objects
//example:
const nestedParams = { user: { name: 'John', age: 30 }, city: 'New York' };
const flatParams = {
  'user[name]': nestedParams.user.name,     
    'user[age]': nestedParams.user.age, 
    city: nestedParams.city
};
const nestedQueryString = querystring.stringify(flatParams);
console.log('Nested Query String:', nestedQueryString); 
// Output: user%5Bname%5D=John&user%5Bage%5D=30&city=New%20York

const parsedNested = querystring.parse(nestedQueryString);
console.log('Parsed Nested Parameters:', parsedNested); 
// Output: { 'user[name]': 'John', 'user[age]': '30', city: 'New York' }
/*
This demonstrates how to handle nested objects by flattening them for query string representation using the querystring module in Node.js.
*/
//  Custom Delimiters
//example:
const customDelimiterString = 'name:John|age:30|city:New York';
const customParsed = querystring.parse(customDelimiterString, '|', ':');
console.log('Custom Parsed Query String:', customParsed); 
// Output: { name: 'John', age: '30', city: 'New York' }

const customFormatted = querystring.stringify({ name: 'Alice', age: 25, city: 'Los Angeles' }, '|', ':');
console.log('Custom Formatted Query String:', customFormatted); 
// Output: name:Alice|age:25|city:Los Angeles
/* This example shows how to use custom delimiters for parsing and formatting query strings with the querystring module in Node.js.
*/
