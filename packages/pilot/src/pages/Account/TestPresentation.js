import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { translate } from 'react-i18next'
import { compose } from 'ramda'

import TestPresentation from '../../containers/Account/TestPresentation'

const enhanced = compose(
  translate(),
  withRouter
)

class TestPresentationPage extends PureComponent {
  constructor (props) {
    super(props)
    this.handleSignup = this.handleSignup.bind(this)
  }

  // eslint-disable-next-line class-methods-use-this
  handleSignup (e) {
    e.preventDefault()
    window.location = 'https://dashboard.pagar.me/#/signup'
  }

  render () {
    return (
      <TestPresentation
        onGotoSignup={this.handleSignup}
        t={this.props.t}
      />
    )
  }
}

TestPresentationPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default enhanced(TestPresentationPage)
