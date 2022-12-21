const validatePassword = require('../validatePassword');

describe('validatePassword test suite', () => {
    it('should return false as an empty string is provided', () => {
        expect(validatePassword("")).toBe(false);
    });
});