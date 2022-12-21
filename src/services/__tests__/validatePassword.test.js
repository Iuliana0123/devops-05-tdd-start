/*eslint linebreak-style: ["error", "windows"]*/
const validatePassword = require('../validatePassword');

describe('validatePassword test suite', () => {
    it('should return false as an empty string is provided', () => {
        expect(validatePassword("")).toBe(false);
    });

    it('should return true given a password 8 char or longer, a letter and a number', () => {
        expect(validatePassword("0123456test")).toBe(true);
    });

    it('should return false given a password 8 char or longer, without letters', () => {
        expect(validatePassword("0123456")).toBe(false);
    });

    it('should return false given a password 8 char or longer, without numbers', () => {
        expect(validatePassword("azertyui")).toBe(false);
    });

});