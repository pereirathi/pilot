import {
  always,
  applySpec,
  prop,
} from 'ramda'

export default applySpec({
  company_template_token: always('cjkifh2ja0000y0739q5odyyt'),
  email: prop('email'),
  password: prop('password'),
})
