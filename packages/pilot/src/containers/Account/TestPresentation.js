import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Button } from 'former-kit'

import IconBack from 'emblematic-icons/svg/ChevronBack32.svg'
import IconGithub from 'emblematic-icons/svg/Github20.svg'

import styles from './style.css'

const TestPresentationContainer = ({
  onGotoSignup,
  t,
}) => (
  <div className={styles.secondaryContent}>
    <div>
      <h1 className={styles.title}>
        {t('landing.title')}
      </h1>
      <span className={styles.uppercase}>
        {t('landing.test.subtitle')}
      </span>
    </div>
    <p className={styles.paragraph}>
      {t('landing.test.body')}
    </p>
    <div className={classNames(styles.uppercase, styles.signInBlock)}>
      <p>
        <span>{t('landing.login_call')}</span>
        <span>
          {t('landing.signup_call')}
          <button
            role="link"
            onClick={onGotoSignup}
            className={styles.signInLink}
          >
            {t('landing.signup_action')}
          </button>
        </span>
      </p>
    </div>
    <div>
      <div>
        <Button
          fill="outline"
          icon={<IconBack width={16} height={16} />}
        >
          VOLTAR PARA O LOGIN LIVE
        </Button>
      </div>
      <div>
        <IconGithub height={32} width={32} />
      </div>
    </div>
  </div>
)

TestPresentationContainer.propTypes = {
  onGotoSignup: PropTypes.func.isRequired,
  t: PropTypes.func,
}

TestPresentationContainer.defaultProps = {
  t: t => t,
}

export default TestPresentationContainer
