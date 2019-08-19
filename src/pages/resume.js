import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Newsletter } from "../components/newsletter"

const ResumePage = () => (
  <Layout>
    <SEO title="Sign up for updates" />
    <div className="flex flex-col min-h-screen text-black">
      <div className="flex-1 flex items-end justify-center">
        <h2 className="homepage-hero font-display font-bold leading-tight md:mb-20 pt-40 p-12 md:p-0 md:pt-32 md:w-3/4">
          My name is Will King, <br className="hidden md:inline" />
          and I am a Frontend Developer. I use Elm when I can.
        </h2>
        <h3>Current facts about me:</h3>
        <div>
          <p>
            I approach software from a functional perspective. This is easiest
            in functional languages I use, like Elm, but the principles can be
            applied to any language.
          </p>
          <p>
            I don't think functional programming is the only way or always the
            best way to solve a problem.
          </p>
          <p>
            I have a design and research background which has proven to be a
            huge asset building software. Ask me how, I enjoy talking about it.
          </p>
          <p>
            I am a recent father and other than marring my wife it is the best
            thing that has ever happened to me.
          </p>
        </div>
        <h3>Work Experience:</h3>
        <h3>Software:</h3>
        <h3>Design:</h3>
        <h3>Education:</h3>
      </div>
    </div>
  </Layout>
)

export default ResumePage
