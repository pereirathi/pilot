import React from 'react'
import PropTypes from 'prop-types'
import style from './style.css'
import Transition from '../Transition'

const Loader = ({
  children,
  overlay,
  visible,
}) => (
  <div className={style.contentAnchor}>
    <Transition
      atActive={{
        width: 100,
        opacity: 1,
      }}
      atEnter={{
        width: 0,
        zIndex: 10,
        opacity: 0,
      }}
      atLeave={{
        width: 15,
        opacity: 0,
      }}
      mapStyles={item => ({
        ...item,
        width: `${item.width.toFixed(2)}%`,
      })}
      springOptions={{
        damping: 26,
        precision: 0.01,
        stiffness: 170,
      }}
    >
      {visible &&
        <div
          key="overlay"
          className={style.transition}
        >
          {overlay}
        </div>
      }
    </Transition>
    {children}
  </div>
)

Loader.propTypes = {
  children: PropTypes.node.isRequired,
  overlay: PropTypes.element.isRequired,
  visible: PropTypes.bool,
}

Loader.defaultProps = {
  visible: false,
}

export default Loader
