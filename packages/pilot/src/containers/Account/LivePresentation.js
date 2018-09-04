import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import IconGithub from 'emblematic-icons/svg/Github20.svg'
import IconTest from 'emblematic-icons/svg/TestAmbientOn24.svg'

import styles from './style.css'

const LivePresentationContainer = ({
  onGotoSignup,
  t,
}) => (
  <div className={styles.secondaryContent}>
    <div>
      <h1 className={styles.title}>
        {t('landing.title')}
      </h1>
      <span className={styles.uppercase}>
        {t('landing.live.subtitle')}
      </span>
    </div>
    <p className={styles.paragraph}>
      {t('landing.live.body')}
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
        <IconTest height={60} width={60} />
      </div>
      <div>
        <IconGithub height={32} width={32} />
      </div>
    </div>
  </div>
)

LivePresentationContainer.propTypes = {
  onGotoSignup: PropTypes.func.isRequired,
  t: PropTypes.func,
}

LivePresentationContainer.defaultProps = {
  t: t => t,
}

export default LivePresentationContainer
