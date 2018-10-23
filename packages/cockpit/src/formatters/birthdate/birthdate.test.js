import moment from 'moment'
import getTimestampFromBirthDate from './index'

describe('Birthdate Formatter', () => {
  const form = {
    birthdate: '01/02/1975',
  }
  const formattedDate = '1975-02-01'

  const expectedResult = Number(moment(formattedDate).format('x'))
  const result = getTimestampFromBirthDate('birthdate')(form)

  it('should get a timestamp from a given birthdate', () => {
    expect(result).toEqual(expectedResult)
  })
})
