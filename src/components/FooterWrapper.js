import React from 'react'
import styled from 'styled-components'

import { colors } from '../utils/constants'

const Footer = styled.footer`
  background: ${colors.gradient} no-repeat;
  padding: 2rem 0;
  width: 100vw;

  & p {
    color: white;
    text-align: center;
  }
`

const FooterWrapper = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <Footer>
      <p>
        © 2016-{currentYear} William King, All Rights Reserved.
      </p>
    </Footer>
  )
}

export default FooterWrapper
