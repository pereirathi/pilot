import React from 'react'

import IconTest from 'emblematic-icons/svg/TestAmbientOn24.svg'

import Logo from './logo.svg'

const LogoTest = () => (
  <div>
    <div>
      <IconTest width={76} height={88} />
    </div>
    <div>
      <Logo width={160} height={47} />
      <span>Area de <strong>teste</strong></span>
    </div>
  </div>
)

export default LogoTest
