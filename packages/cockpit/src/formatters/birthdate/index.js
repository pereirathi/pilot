import moment from 'moment'
import {
  isNil,
  join,
  pipe,
  prop,
  reverse,
  split,
  unless,
} from 'ramda'

const formatDate = date => moment(date).format('x')

const getTimestampFromBirthDate = birthdate =>
  pipe(
    prop(birthdate),
    unless(
      isNil,
      pipe(
        split('/'),
        reverse,
        join('-'),
        formatDate,
        Number
      )
    )
  )

export default getTimestampFromBirthDate
