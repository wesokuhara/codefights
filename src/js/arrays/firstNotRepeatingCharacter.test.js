/*
Note: Write a solution that only iterates over the string once and uses O(1)
additional memory, since this is what you would be asked to do during a real
interview.

Given a string s, find and return the first instance of a non-repeating
character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'.
Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.

There are no characters in this string that do not repeat.

Input/Output

[time limit] 4000ms (js)
[input] string s

A string that contains only lowercase English letters.

Guaranteed constraints:
1 ≤ s.length ≤ 105.

[output] char

The first non-repeating character in s, or '_' if there are no characters
that do not repeat.
*/

const { firstNotRepeatingCharacter } = require('./firstNotRepeatingCharacter');

describe('firstNotRepeatingCharacter()', () => {
  it('should find the first character that does not repeat', () => {
    const s = 'abacabad';

    const result = firstNotRepeatingCharacter(s);
    expect(result).toBe('c');
  });

  it('should find the first character that does not repeat', () => {
    const s = 'abacabaabacaba';

    const result = firstNotRepeatingCharacter(s);
    expect(result).toBe('_');
  });

  it('should find the first character that does not repeat', () => {
    const s = 'z';

    const result = firstNotRepeatingCharacter(s);
    expect(result).toBe('z');
  });
});
