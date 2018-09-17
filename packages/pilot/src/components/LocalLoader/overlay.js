import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './overlay.css'

const Overlay = ({
  label,
  text,
}) => (
  <div
    className={
      classNames(
        style.overlay,
        style.loaderOverlay,
        style.highZIndex
      )}
  >
    <div
      aria-live="polite"
      aria-busy="true"
      aria-label={label}
      className={style.loader}
      role="progressbar"
    />
    <span className={style.text}>{text}</span>
  </div>
)

Overlay.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
}

Overlay.defaultProps = {
  label: 'loading',
  text: 'Loading',
}

export default Overlay
