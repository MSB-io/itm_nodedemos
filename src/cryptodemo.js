//using crypto module in Node.js

import crypto from 'crypto';

// Generate a random UUID
const uuid = crypto.randomUUID();
console.log('Generated UUID:', uuid);

// Create a SHA-256 hash of a string
const hash = crypto.createHash('sha256').update('Hello, World!').digest('hex');
console.log('SHA-256 Hash:', hash);

// Generate random bytes
const randomBytes = crypto.randomBytes(16).toString('hex');
console.log('Random Bytes:', randomBytes);

// Create HMAC using SHA-256
const hmac = crypto.createHmac('sha256', 'a_secret_key').update('Message to hash').digest('hex');
console.log('HMAC:', hmac);

//there is a secret key which is known to both the sender and receiver
//sender will prepare the message and will create the hmac using the secret key and will send both the message and hmac to the receiver
//receiver will create the hmac using the received message and the secret key and will compare it with the received hmac
//if both the hmacs are same then the message is not tampered else it is tampered

/*
Explanation:

Importing the Module:
The crypto module is imported using import crypto from 'crypto'.

Generating UUIDs:
The crypto.randomUUID() method generates a unique identifier.

Hashing Data:
The createHash() method creates a hash object, which can be used to generate hashes using various algorithms like SHA-256.

Generating Random Bytes:
The randomBytes() method generates cryptographically strong pseudo-random data.

Creating HMACs:
The createHmac() method creates an HMAC object for generating message authentication codes.

Common Use Cases of the crypto Module in Node.js

Password
Hashing:
Securely hash and store user passwords.

Data Integrity:
Generate hashes to verify data integrity during transmission.

Token Generation:
Create secure tokens for authentication and session management.

Encryption/Decryption:
Encrypt sensitive data before storing or transmitting it.

Digital Signatures:
Sign data to ensure authenticity and non-repudiation.
*/  