const promisedemo = require('../promisedemo');

describe('Promise Demo', () => {
    test('should resolve with correct value', () => {
        return promisedemo().then(data => {
            expect(data).toBe('Expected Value');
        });
    });

    test('should reject with an error', () => {
        return promisedemo().catch(error => {
            expect(error).toBe('Expected Error');
        });
    });
});