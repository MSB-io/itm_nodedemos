// db.js
import { MongoClient } from 'mongodb';

const uri  = process.env.MONGO_URI ||  "mongodb://localhost:27017/demoDB"
const client = new MongoClient(uri);

try {
  // Connect to MongoDB
  await client.connect();
  console.log("Connected to MongoDB!");

  // Select database
  const db = client.db("demoDB");

  // Select collection
  const studentsCollection = db.collection("students");

  // Insert a document
  await studentsCollection.insertOne({ name: "Asha", age: "twenty two", enrolled: "yes" });

  // Query documents
  const students = await studentsCollection.find({age:22}).toArray();
  console.log(students);

} catch (err) {
  console.error("Error connecting:", err);
} finally {
  // Close connection when done
  await client.close();
}
