import {
  always,
  applySpec,
  ifElse,
  prop,
  propEq,
} from 'ramda'

import {
  phone as formatPhoneNumber,
  birthdate as getTimestampFromBirthDate,
} from '../../formatters'

const buildMql = applySpec({
  answers: {
    sales_starts: prop('salesStarts'),
    tpv: prop('amount'),
    platform: prop('platform'),
    segment: prop('segment'),
  },
})

const getDocumentType = ifElse(
  propEq('hasCNPJ', true),
  always('cnpj'),
  always('cpf')
)

export default applySpec({
  company_template_token: always('cjkifh2ja0000y0739q5odyyt'),
  email: prop('email'),
  name: prop('tradeName'),
  password: prop('password'),
  full_name: prop('legalName'),
  document_type: getDocumentType,
  document_number: prop('cnpj'),
  site_url: prop('site'),
  partner_name: prop('partnerName'),
  partner_cpf: prop('cpf'),
  partner_birthday: getTimestampFromBirthDate('birthDate'),
  partner_mother_name: prop('montherName'),
  partner_phone: formatPhoneNumber('phone'),
  partner_street: prop('street'),
  partner_complementary: prop('complement'),
  partner_street_number: prop('number'),
  partner_neighborhood: prop('neighborhood'),
  partner_city: prop('city'),
  partner_state: prop('state'),
  partner_zipcode: prop('cep'),
  agreement_term_version: always(1),
  mql: buildMql,
  primary_phone: formatPhoneNumber('commercialPhone'),
})
