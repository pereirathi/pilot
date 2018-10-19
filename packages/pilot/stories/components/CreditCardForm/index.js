import React from 'react'
import { Card } from 'former-kit'
import { complement, isEmpty } from 'ramda'
import { action } from '@storybook/addon-actions'

import Section from '../../Section'
import CreditCardForm from '../../../src/containers/CreateTransaction/Payment/CreditCard'

const actionChange = action('change')

const hasErrors = complement(isEmpty)

class CreditCard extends React.Component {
  constructor () {
    super()

    this.state = {
      creditCard: {
        cvv: '',
        expirationDate: '',
        holderName: '',
        installments: '',
        cardNumber: '',
        capture: true,
      },
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (data, errors) {
    if (!hasErrors(errors)) {
      this.setState({
        creditCard: data,
      }, () => actionChange(this.state.creditCard))
    }
  }

  render () {
    const { creditCard } = this.state

    return (
      <Section>
        <Card>
          <CreditCardForm
            data={creditCard}
            installmentsOptions={[
              { name: '1x sem juros', value: '1' },
              { name: '2x sem juros', value: '2' },
              { name: '3x sem juros', value: '3' },
            ]}
            onChange={this.handleChange}
            t={t => t}
          />
        </Card>
      </Section>
    )
  }
}

export default CreditCard
