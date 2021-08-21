const convert = require('./convert')

test('convert(4, 4)', () => {
  expect(convert.convert(4, 4)).toBe(16)
})

test('convert(0, 4)', () => {
  expect(convert.convert(0, 4)).toBe(0)
})

test('convert(1, 1)', () => {
  expect(convert.convert(1, 1)).toBe(1)
})

test('toMoney(2)', () => {
  expect(convert.toMoney(2)).toBe('2.00')
})

test('toMoney(2.5)', () => {
  expect(convert.toMoney(2.5)).toBe('2.50')
})

test('toMoney(2.5) - String', () => {
  expect(convert.toMoney('2.5')).toBe('2.50')
})