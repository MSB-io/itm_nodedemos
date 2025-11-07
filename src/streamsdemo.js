import  fs from "fs";
import http from "http";    
import zlib from "zlib";


// Create a readable stream
const readableStream = fs.createReadStream("bigfile.txt", {
  encoding: "utf-8",
  highWaterMark: 64 * 1024 // 64 KB chunks
});

// Listen to data events
readableStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk.length);
});

readableStream.on("end", () => {
  console.log("File reading completed!");
});
readableStream.on("error", (err) => {
  console.error("Error reading file:", err);
});


// Create writable stream
const readable2 = fs.createReadStream("input.txt");
const writable = fs.createWriteStream("output.txt");

// Pipe data from read → write
readable2.pipe(writable);

console.log("File copied successfully using streams!");


http.createServer((req, res) => {
  const stream = fs.createReadStream("../video.mp4");
  res.writeHead(200, { "Content-Type": "video/mp4" });
  stream.pipe(res);
}).listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});



const readable = fs.createReadStream("input.txt");
const compressed = fs.createWriteStream("input.txt.gz");

// Compress file using gzip
readable.pipe(zlib.createGzip()).pipe(compressed);

console.log("File compressed successfully!");

/*
✅ Useful for logs, backups, and optimizing storage

Real-World Use Cases of Node.js Streams

Video/Audio streaming (Netflix, YouTube-like apps)

Large file uploads/downloads

Log processing in real-time

Chat applications with WebSockets

Data pipelines (ETL jobs)
*/

//you can run this file using the command: node src/streamsdemo.js
//Make sure to have the necessary files (bigfile.txt, input.txt, video.mp4) in the same directory or adjust the paths accordingly.

//you can refer this link for more info : https://nodejs.org/api/stream.html
//even this one https://medium.com/deno-the-complete-reference/10-use-cases-of-streams-in-node-js-273f02011f60
//and this one too : https://www.freecodecamp.org/news/node-js-streams-explained-with-examples/
