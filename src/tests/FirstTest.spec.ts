import getRev from '../utils/getRev'

test('It should be ok', () => {
  const rev = getRev(new Date())

  expect(typeof rev).toBe('string')
})
