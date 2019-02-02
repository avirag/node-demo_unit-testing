const lib = require('../lib');

describe('absolute', () => {
  test('should return a positive number if number is positive', () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  test('should return a positive number if number is negative', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  test('should return 0 if number is 0', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});
