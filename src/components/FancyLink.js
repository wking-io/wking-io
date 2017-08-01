import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import "typeface-roboto"

const FancyLink = styled(Link)`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: black;
  text-transform: uppercase;
  padding: 2px 4px;
  position: relative;
  z-index: 1;
  transition: all .25s ease-in-out; 
  text-decoration: none;
  line-height: normal;

  :after {
    content: "";
    background-image: linear-gradient(to right top, #7B4397, #DC2430 75%);
    height: 0.5em;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transition: all .25s ease-in-out;
  }

  :hover::after {
    height: 1.5em;
  }
`

export default FancyLink