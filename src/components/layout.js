// Dependencies
import React from "react"

// Components
import Nav from "./nav"

const Layout = ({ children, theme }) => (
  <>
    <Nav theme={theme} />
    {children}
  </>
)

export default Layout
