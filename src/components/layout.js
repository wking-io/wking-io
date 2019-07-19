// Dependencies
import React from "react"

// Components
import Nav from "./nav"

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
  </>
)

export default Layout
