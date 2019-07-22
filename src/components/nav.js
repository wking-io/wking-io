// Dependencies
import React from "react"
import { Link } from "gatsby"

// Components
import { LogoIcon } from "./icons"

const Nav = () => (
  <header className="flex justify-between items-center px-8 md:px-16 py-6 absolute top-0 left-0 w-full">
    <h1 className="w-auto h-8 md:h-12">
      <Link to="/">
        <span className="visually-hidden">wking</span>
        <LogoIcon />
      </Link>
    </h1>
    <Link className="link" to="/articles">
      Articles
    </Link>
  </header>
)

export default Nav
