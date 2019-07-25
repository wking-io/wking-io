// Dependencies
import React from "react"
import { Link } from "gatsby"
import VisuallyHidden from "@reach/visually-hidden"

// Components
import { LogoIcon, ElmPressIcon } from "./icons"

const Logo = () => (
  <h1 className="w-auto h-8 md:h-12">
    <Link to="/">
      <VisuallyHidden>wking</VisuallyHidden>
      <LogoIcon />
    </Link>
  </h1>
)

const ElmPressLogo = () => (
  <h1 className="w-auto h-16 md:h-20">
    <Link to="/">
      <VisuallyHidden>elm-press</VisuallyHidden>
      <ElmPressIcon />
    </Link>
  </h1>
)

const Nav = ({ theme = "default" }) => (
  <header className="flex justify-between items-center px-8 md:px-16 py-6 absolute top-0 left-0 w-full">
    {theme === 'elm-press' ? <ElmPressLogo /> : <Logo />}
    <Link className={`link ${theme === 'elm-press' ? 'link--secondary' : null}`} to="/articles">
      Articles
    </Link>
  </header>
)

export default Nav
