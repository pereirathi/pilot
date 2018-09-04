import React from 'react'
import PropTypes from 'prop-types'

import {
  Landing,
  LandingPrimarySection,
  LandingSecondarySection,
} from 'former-kit'

import styles from './style.css'

const DARK_BASE = 'dark'
const LIGHT_BASE = 'light'

const getSecondaryBase = (
  base
) => {
  if (base === DARK_BASE) {
    return LIGHT_BASE
  }
  return DARK_BASE
}

const Account = ({
  t,
  base,
  logo: Logo,
  primaryContent,
  secondaryContent,
}) => (
  <Landing className={styles.container}>
    <LandingPrimarySection base={base}>
      <div className={styles.columnContainer}>
        <div className={styles.logo}>
          <Logo alt={t('landing.logo')} />
        </div>
        {primaryContent}
      </div>
    </LandingPrimarySection>
    <LandingSecondarySection base={getSecondaryBase(base)}>
      <div className={styles.columnContainer}>
        {secondaryContent}
      </div>
    </LandingSecondarySection>
  </Landing>
)

Account.propTypes = {
  base: PropTypes.oneOf([DARK_BASE, LIGHT_BASE]),
  logo: PropTypes.func.isRequired,
  primaryContent: PropTypes.node.isRequired,
  secondaryContent: PropTypes.node.isRequired,
  t: PropTypes.func,
}

Account.defaultProps = {
  base: DARK_BASE,
  t: t => t,
}

export default Account
