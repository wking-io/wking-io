// Dependencies
import React from "react"
import { Link } from "gatsby"

// Components
import { LogoIcon } from "./icons"

const Nav = () => (
  <header>
    <h1 className="w-auto h-4">
      <span className="visually-hidden">wking</span>
      <LogoIcon />
    </h1>
    <Link className="link" to="/articles">
      Articles
    </Link>
  </header>
)

export default Nav
