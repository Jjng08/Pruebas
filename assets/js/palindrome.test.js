const exp = require('constants');
const {persona} = require('./persona');

test('Check if a word is palindrome', () => {
    const result = palindrome('madam, 2, 23, 3.2, mexico, ingles');
    expect(result('madan, 2, 23, 3.2, mexico, ingles')).toBe(true);
});

