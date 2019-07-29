// Dependencies
import React from "react"
import { Link } from "gatsby"
import VisuallyHidden from "@reach/visually-hidden"

// Components
import { LogoIcon, ProjectIcons } from "./icons"

const Logo = () => (
  <h1 className="w-auto h-8 md:h-12 self-start">
    <Link to="/">
      <VisuallyHidden>wking</VisuallyHidden>
      <LogoIcon />
    </Link>
  </h1>
)

const ElmPressLogo = () => (
  <h1 className="w-auto h-16 md:h-24 self-start">
    <Link to="/">
      <VisuallyHidden>elm-press</VisuallyHidden>
      <ProjectIcons id="elm-press" />
    </Link>
  </h1>
)

const Nav = ({ theme = "default" }) => (
  <header className="px-8 md:px-16 py-6 absolute top-0 left-0 w-full">
    <div className="flex justify-between items-center h-8 md:h-12">
      {theme === "elm-press" ? <ElmPressLogo /> : <Logo />}
      <div>
        <Link
          className={`link mr-8 ${
            theme === "elm-press" ? "link--secondary" : null
          }`}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className={`link ${theme === "elm-press" ? "link--secondary" : null}`}
          to="/content"
        >
          Content Feed
        </Link>
      </div>
    </div>
  </header>
)

export default Nav
