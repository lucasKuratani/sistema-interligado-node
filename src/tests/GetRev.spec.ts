import getRev from '../utils/getRev'

test('Get revision from date.', () => {
  const date = new Date(2021, 8, 24)
  const rev = getRev(date)

  console.table({ date: date.toLocaleDateString(), rev })

  expect(rev).not.toBe(-1)
})
