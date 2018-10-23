import React from 'react'
import PropTypes from 'prop-types'

import {
  Col,
  FormDropdown,
  FormInput,
  Grid,
  Row,
} from 'former-kit'

import SearchableDropdown from '../../../../components/SearchableDropdown/'
import accountTypes from '../../../../models/accountTypes'
import bankCodes from '../../../../models/banks'

const AddAccountContent = ({ t }) => {
  const accountTypeOptions = accountTypes.map(accountType => ({
    name: t(`models.account_type.${accountType}`),
    value: accountType,
  }))

  const bankOptions = bankCodes.map(bankCode => ({
    name: t(`models.bank_code.${bankCode}`),
    value: bankCode,
  }))

  return (
    <Grid>
      <Row>
        <Col tv={5} desk={7} tablet={9} palm={8}>
          <SearchableDropdown
            name="bank"
            placeholder={t('pages.add_recipient.type_bank_name')}
            label={t('pages.add_recipient.bank')}
            noOptionsMessage={t('pages.add_recipient.no_results')}
            options={bankOptions}
          />
        </Col>
      </Row>
      <Row>
        <Col tv={3} desk={4} tablet={5} palm={8}>
          <FormInput
            type="text"
            label={t('pages.add_recipient.agency')}
            name="agency"
            placeholder={t('pages.add_recipient.type_agency_number')}
          />
        </Col>
        <Col tv={2} desk={3} tablet={4} palm={8}>
          <FormInput
            type="text"
            label={t('pages.add_recipient.agency_digit')}
            name="agency_digit"
            placeholder={t('pages.add_recipient.type_agency_digit')}
          />
        </Col>
      </Row>
      <Row>
        <Col tv={3} desk={4} tablet={5} palm={8}>
          <FormInput
            type="text"
            label={t('pages.add_recipient.account')}
            name="number"
            placeholder={t('pages.add_recipient.type_account')}
          />
        </Col>
        <Col tv={2} desk={3} tablet={4} palm={8}>
          <FormInput
            type="text"
            label={t('pages.add_recipient.account_digit')}
            name="number_digit"
            placeholder={t('pages.add_recipient.type_account_digit')}
          />
        </Col>
      </Row>
      <Row>
        <Col tv={4} desk={5} tablet={6} palm={8}>
          <FormDropdown
            name="type"
            label={t('pages.add_recipient.account_type')}
            options={accountTypeOptions}
          />
        </Col>
      </Row>
      <Row>
        <Col tv={5} desk={7} tablet={9} palm={8}>
          <FormInput
            type="text"
            label={t('pages.add_recipient.account_name')}
            name="name"
            placeholder={t('pages.add_recipient.type_account_name')}
          />
        </Col>
      </Row>
    </Grid>
  )
}

AddAccountContent.propTypes = {
  t: PropTypes.func.isRequired,
}

export default AddAccountContent
