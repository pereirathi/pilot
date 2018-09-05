import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Button } from 'former-kit'

import IconBack from 'emblematic-icons/svg/ChevronBack32.svg'
import IconGithub from 'emblematic-icons/svg/Github20.svg'

import { liveUrl } from '../../environment'

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
        &nbsp;
        <strong>{t('landing.test.subtitle_emphasis')}</strong>
        &nbsp;
        {t('landing.test.subtitle2')}
      </span>
    </div>
    <p className={styles.paragraph}>
      {t('landing.test.body')}
      <br /><br />
      {t('landing.test.body2')}
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
    <div className={styles.changeEnvironment}>
      <div>
        <a href={liveUrl}>
          <Button
            fill="outline"
            icon={<IconBack width={16} height={16} />}
          >
            {t('landing.test.back_button')}
          </Button>
        </a>
      </div>
      <div>
        <a href="https://github.com/pagarme/pilot" className={styles.githubLink}>
          <IconGithub height={24} width={21} />
        </a>
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
