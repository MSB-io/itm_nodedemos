const request = require('supertest');
const app = require('../expressdemos/basicserver'); // Adjust the path as necessary

describe('Basic Server Functionality', () => {
    test('should respond with 200 status code', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    test('should return a welcome message', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Welcome to the Basic Server!');
    });
});