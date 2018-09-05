import React from 'react'
import PropTypes from 'prop-types'
import {
  Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'

import {
  compose,
  contains,
} from 'ramda'

import { translate } from 'react-i18next'

import Account from '../../containers/Account'
import InvalidEmailError from './SignUp/InvalidEmailError'
import Login from './Login'
import LivePresentation from './LivePresentation'
import PasswordRecovery from './PasswordRecovery'
import PasswordRecoveryConfirmation from './PasswordRecovery/Confirmation'
import SignUp from './SignUp'
import SignUpConfirmation from './SignUp/Confirmation'
import TestPresentation from './TestPresentation'

import environment from '../../environment'

import Logo from '../logo.svg'

const DARK_BASE = 'dark'
const LIGHT_BASE = 'light'

const getBaseByPath = (pathname) => {
  if (contains('account/login', pathname) && environment === 'live') {
    return LIGHT_BASE
  }
  return DARK_BASE
}

const getEnvironment = () => {
  if (environment === 'live') {
    return LivePresentation
  }
  return TestPresentation
}

const enhance = compose(
  withRouter,
  translate()
)

const AccountArea = ({ t, history: { location } }) => (
  <Account
    t={t}
    logo={Logo}
    base={getBaseByPath(location.pathname)}
    primaryContent={
      <Switch>
        <Route
          path="/account/login"
          component={Login}
        />
        <Route
          path="/account/password/recovery/confirmation"
          component={PasswordRecoveryConfirmation}
        />
        <Route
          path="/account/password/recovery"
          component={PasswordRecovery}
        />
        <Route
          path="/account/signup/confirmation"
          component={SignUpConfirmation}
        />
        <Route
          path="/account/signup/error"
          component={InvalidEmailError}
        />
        <Route
          path="/account/signup"
          component={SignUp}
        />
      </Switch>
    }
    secondaryContent={
      <Switch>
        <Route
          path="/account/login"
          component={getEnvironment()}
        />
        <Route
          path="/account/password"
          component={LivePresentation}
        />
        <Route
          path="/account/signup"
          component={LivePresentation}
        />
        <Redirect to="/account/login" />
      </Switch>
    }
  />
)

AccountArea.propTypes = {
  t: PropTypes.func.isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
}

export default enhance(AccountArea)
