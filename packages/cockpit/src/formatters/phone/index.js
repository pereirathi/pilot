import {
  concat,
  pipe,
  prop,
  replace,
} from 'ramda'

const formatPhone = phone =>
  pipe(
    prop(phone),
    replace(/\D+/g, ''),
    concat('+55')
  )

export default formatPhone
