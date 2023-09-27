import Validator from '../app';

test('Positive. Correct input return true', () => {
  const truthyInstance = new Validator();
  expect(truthyInstance.validateUsername('Username')).toBe(true);
});

test('Negative. Non latin letters in name return false', () => {
  const falsyInstance = new Validator();
  expect(falsyInstance.validateUsername('Имя-123_ab')).toBe(false);
});

test('Negative. Symbols in name return false', () => {
  const falsyInstance = new Validator();
  expect(falsyInstance.validateUsername('Username%-123_ab')).toBe(false);
});

test('Negative. More than three digits in a row return false', () => {
  const falsyInstance = new Validator();
  expect(falsyInstance.validateUsername('Username-1234ab')).toBe(false);
});

test('Negative. Does not start with letters return false', () => {
  const falsyInstance = new Validator();
  expect(falsyInstance.validateUsername('-123_Username')).toBe(false);
});

test('Negative. Does not end with letters return false', () => {
  const falsyInstance = new Validator();
  expect(falsyInstance.validateUsername('Username-123_')).toBe(false);
});