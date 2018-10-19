import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-vanilla-form'
import {
  CardContent,
  CardSection,
  CardTitle,
  Checkbox,
  Col,
  FormDropdown,
  FormInput,
  Row,
} from 'former-kit'

import isCVV from '../../../validation/cvv'
import isCreditCard from '../../../validation/creditCard'
import isRequired from '../../../validation/required'

import style from './style.css'

const validations = t => ({
  cvv: [isRequired(t('required')), isCVV('cvv_invalid')],
  expirationDate: isRequired(t('required')),
  holderName: isRequired(t('required')),
  installments: isRequired(t('required')),
  cardNumber: [
    isRequired(t('required')),
    isCreditCard(t('credit_card_invalid')),
  ],
})

const setStateData = (name, { value }) =>
  ({ data }) => ({
    data: {
      ...data,
      [name]: value,
    },
  })

class CreditCard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: props.data,
    }

    this.onChangeCapture = this.onChangeCapture.bind(this)
    this.onChangeWithMask = this.onChangeWithMask.bind(this)
  }

  onChangeCapture () {
    this.setState({
      data: {
        ...this.state.data,
        capture: !this.state.data.capture,
      },
    })
  }

  onChangeWithMask (name) {
    return ({ target }) => this.setState(setStateData(name, target))
  }

  render () {
    const {
      installmentsOptions,
      onChange,
      t,
    } = this.props

    const { data } = this.state

    return (
      <CardSection>
        <CardTitle title={t('add_transaction_payment_title')} />

        <CardContent>
          <Form
            data={data}
            onChange={onChange}
            validation={validations(t)}
            validateOn="blur"
          >
            <Row>
              <Col tablet={10} desk={10}>
                <FormInput
                  name="holderName"
                  label={t('add_transaction_payment_holder')}
                />
              </Col>
            </Row>

            <Row>
              <Col tablet={6} desk={6}>
                <FormInput
                  label={t('add_transaction_payment_card_number')}
                  mask="1111 1111 1111 1111 1111"
                  name="cardNumber"
                  onChange={this.onChangeWithMask('cardNumber')}
                />
              </Col>

              <Col tablet={2} desk={2} className={style.fields}>
                <FormInput
                  label={t('add_transaction_payment_expiration')}
                  mask="11/11"
                  name="expirationDate"
                  onChange={this.onChangeWithMask('expirationDate')}
                />
              </Col>

              <Col tablet={2} desk={2} className={style.fields}>
                <FormInput
                  label={t('add_transaction_payment_cvv')}
                  mask="1111"
                  name="cvv"
                  onChange={this.onChangeWithMask('cvv')}
                />
              </Col>
            </Row>

            <Row>
              <Col tablet={5} desk={5}>
                <FormDropdown
                  name="installments"
                  options={installmentsOptions}
                  label={t('add_transaction_payment_installments')}
                />
              </Col>

              <Col tablet={7} desk={7}>
                <FormInput
                  name="description"
                  label={t('add_transaction_payment_description')}
                />
              </Col>
            </Row>

            <Row>
              <Checkbox
                label={t('add_transaction_payment_capture')}
                name="capture"
                value="capture"
                onChange={this.onChangeCapture}
                checked={data.capture}
              />
            </Row>
          </Form>
        </CardContent>
      </CardSection>
    )
  }
}

CreditCard.propTypes = {
  data: PropTypes.shape({
    cvv: PropTypes.string.isRequired,
    expirationDate: PropTypes.string.isRequired,
    holderName: PropTypes.string.isRequired,
    installments: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
    capture: PropTypes.bool.isRequired,
  }).isRequired,
  installmentsOptions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

export default CreditCard
