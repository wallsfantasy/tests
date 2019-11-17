const color = require('../src/color_service');

test('it returns light blue when text ends with number', () => {
    expect(color.byLastChar('abcdefg01234567')).toBe('#E6F1F6');
});

test('it returns null when text ends with character', () => {
    expect(color.byLastChar('abcdefg01234567a')).toBe(null);
});
